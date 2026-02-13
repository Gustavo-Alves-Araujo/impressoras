// Configuração do Supabase
const SUPABASE_URL = 'https://vkwczizdjhsejbpaapea.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrd2N6aXpkamhzZWpicGFhcGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NDU0MzAsImV4cCI6MjA4MzQyMTQzMH0.qvWHxNAhefq253JaoVYG19izClKgLGc4ZkW5y8ladmM';

// Inicializar cliente Supabase
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função para formatar preço
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Função para criar card de produto
function createProductCard(product) {
    const hasPromo = product.preco_promocional && product.preco_promocional < product.preco;
    const discount = hasPromo ? Math.round(((product.preco - product.preco_promocional) / product.preco) * 100) : 0;
    
    return `
        <div class="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 hover:-translate-y-2">
            ${product.destaque ? `
                <div class="absolute -top-3 -right-3 z-10">
                    <span class="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-black uppercase rounded-full shadow-lg">
                        <i class="fas fa-star"></i> Destaque
                    </span>
                </div>
            ` : ''}
            
            ${hasPromo && discount > 0 ? `
                <div class="absolute top-4 left-4 z-10">
                    <span class="inline-flex items-center px-3 py-1.5 bg-red-500 text-white text-sm font-bold rounded-lg shadow-lg">
                        -${discount}%
                    </span>
                </div>
            ` : ''}
            
            <div class="relative mb-6 overflow-hidden rounded-2xl bg-gray-50 aspect-square">
                <img src="${product.imagem_url || 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400'}" 
                     alt="${product.nome}"
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            </div>
            
            <h3 class="text-lg font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                ${product.nome}
            </h3>
            
            <p class="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">
                ${product.descricao || 'Produto de alta qualidade'}
            </p>
            
            <div class="flex flex-col gap-2 mb-6">
                ${hasPromo ? `
                    <div class="flex items-center gap-2">
                        <span class="text-sm text-gray-400 line-through">
                            ${formatPrice(product.preco)}
                        </span>
                        <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">
                            ECONOMIZE ${formatPrice(product.preco - product.preco_promocional)}
                        </span>
                    </div>
                    <div class="text-3xl font-black text-primary-600">
                        ${formatPrice(product.preco_promocional)}
                    </div>
                ` : `
                    <div class="text-3xl font-black text-gray-900">
                        ${formatPrice(product.preco)}
                    </div>
                `}
                <span class="text-xs text-gray-500">ou 12x de ${formatPrice((hasPromo ? product.preco_promocional : product.preco) / 12)}</span>
            </div>
            
            <div class="flex flex-col gap-2">
                <a href="https://wa.me/5531975050034?text=Olá!%20Gostaria%20de%20comprar%20${encodeURIComponent(product.nome)}"
                   target="_blank"
                   class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                    <i class="fab fa-whatsapp text-lg"></i>
                    Comprar Agora
                </a>
                <button onclick="toggleProductDetails(${product.id})"
                        class="w-full px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all">
                    Ver Detalhes
                </button>
            </div>
            
            <div id="details-${product.id}" class="hidden mt-4 pt-4 border-t border-gray-200">
                <h4 class="font-bold text-gray-900 mb-2">Especificações:</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                    ${product.especificacoes ? 
                        Object.entries(product.especificacoes).map(([key, value]) => 
                            `<li><strong>${key}:</strong> ${value}</li>`
                        ).join('') 
                        : '<li>Produto original de alta qualidade</li>'}
                </ul>
            </div>
        </div>
    `;
}

// Função para toggle de detalhes do produto
function toggleProductDetails(productId) {
    const detailsEl = document.getElementById(`details-${productId}`);
    if (detailsEl) {
        detailsEl.classList.toggle('hidden');
    }
}

// Função para carregar produtos
async function loadProducts(category = 'toner', containerId = 'products-grid') {
    try {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container ${containerId} não encontrado`);
            return;
        }

        // Mostrar loading
        container.innerHTML = `
            <div class="col-span-full flex items-center justify-center py-20">
                <div class="text-center">
                    <i class="fas fa-spinner fa-spin text-4xl text-primary-500 mb-4"></i>
                    <p class="text-gray-600">Carregando produtos...</p>
                </div>
            </div>
        `;

        // Buscar produtos do Supabase
        const { data: products, error } = await supabase
            .from('theikos_produtos')
            .select('*')
            .eq('categoria', category)
            .eq('ativo', true)
            .order('ordem', { ascending: true })
            .order('destaque', { ascending: false });

        if (error) {
            console.error('Erro ao carregar produtos:', error);
            container.innerHTML = `
                <div class="col-span-full text-center py-20">
                    <i class="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
                    <p class="text-gray-600">Erro ao carregar produtos. Tente novamente mais tarde.</p>
                </div>
            `;
            return;
        }

        // Se não houver produtos
        if (!products || products.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center py-20">
                    <i class="fas fa-box-open text-4xl text-gray-400 mb-4"></i>
                    <p class="text-gray-600">Nenhum produto encontrado nesta categoria.</p>
                </div>
            `;
            return;
        }

        // Renderizar produtos
        container.innerHTML = products.map(product => createProductCard(product)).join('');
        
        console.log(`${products.length} produtos carregados com sucesso`);
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="col-span-full text-center py-20">
                    <i class="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
                    <p class="text-gray-600">Erro ao carregar produtos. Tente novamente mais tarde.</p>
                </div>
            `;
        }
    }
}

// Carregar produtos quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        loadProducts('toner', 'products-grid');
    });
} else {
    loadProducts('toner', 'products-grid');
}

// Expor função globalmente para uso no HTML
window.toggleProductDetails = toggleProductDetails;
window.loadProducts = loadProducts;
