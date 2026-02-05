// Script para carregar produtos do JSON e integrar com admin e site

/**
 * Carrega produtos do arquivo produtos.json
 */
async function carregarProdutos() {
    try {
        const response = await fetch('/produtos.json');
        const data = await response.json();
        
        // Salvar no localStorage para o admin usar
        localStorage.setItem('theikos_produtos_catalogo', JSON.stringify(data));
        
        // Salvar impressoras
        localStorage.setItem('theikos_impressoras', JSON.stringify(data.impressoras));
        
        // Salvar toners
        localStorage.setItem('theikos_toners', JSON.stringify(data.toners));
        
        return data;
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        return null;
    }
}

/**
 * Exibe produtos na página
 */
function exibirProdutos() {
    // Buscar dados do localStorage
    const impressoras = JSON.parse(localStorage.getItem('theikos_impressoras') || '[]');
    const toners = JSON.parse(localStorage.getItem('theikos_toners') || '[]');
    
    // Exibir impressoras na seção de aluguel
    exibirImpressoras(impressoras);
    
    // Exibir toners na seção de toners
    exibirToners(toners);
}

/**
 * Exibe impressoras disponíveis para aluguel
 */
function exibirImpressoras(impressoras) {
    const container = document.querySelector('[data-produtos="aluguel"]');
    if (!container) return;
    
    container.innerHTML = impressoras.map(imp => `
        <div class="bg-white rounded-2xl border border-secondary-100 overflow-hidden hover:shadow-xl transition duration-300 card-hover">
            <img src="${imp.imagem}" alt="${imp.nome}" class="w-full h-56 object-cover">
            <div class="p-6">
                <h3 class="text-2xl font-bold text-secondary-900 mb-2">${imp.nome}</h3>
                <p class="text-secondary-900 mb-4 text-sm">${imp.descricao}</p>
                <div class="mb-4 space-y-2">
                    <p class="text-sm font-semibold text-secondary-900"><i class="fas fa-tachometer-alt mr-2 text-primary-600"></i>${imp.velocidade}</p>
                    ${imp.features.map(f => `<p class="text-sm text-secondary-900"><i class="fas fa-check text-green-600 mr-2"></i>${f}</p>`).join('')}
                </div>
                <a href="${imp.link}" target="_blank" class="w-full bg-primary-600 text-white font-bold py-3 rounded-lg hover:bg-primary-700 transition text-center block">
                    Solicitar Orçamento
                </a>
            </div>
        </div>
    `).join('');
}

/**
 * Exibe toners para venda
 */
function exibirToners(toners) {
    const container = document.querySelector('[data-produtos="toners"]');
    if (!container) return;
    
    container.innerHTML = toners.map(toner => `
        <div class="bg-white rounded-2xl border border-secondary-100 overflow-hidden hover:shadow-xl transition duration-300 card-hover">
            <img src="${toner.imagem}" alt="${toner.nome}" class="w-full h-48 object-cover bg-gray-100">
            <div class="p-6">
                <h3 class="text-xl font-bold text-secondary-900 mb-2">${toner.nome}</h3>
                <p class="text-secondary-900 mb-4 text-sm">${toner.descricao}</p>
                <p class="text-sm font-semibold text-secondary-900 mb-2"><i class="fas fa-microchip mr-2 text-primary-600"></i>${toner.compatibilidade}</p>
                <p class="text-sm text-secondary-900 mb-4"><i class="fas fa-file-alt mr-2 text-primary-600"></i>Rendimento: ${toner.rendimento}</p>
                <a href="${toner.link}" target="_blank" class="w-full bg-secondary-900 text-white font-bold py-3 rounded-lg hover:bg-secondary-700 transition text-center block">
                    Comprar Agora
                </a>
            </div>
        </div>
    `).join('');
}

/**
 * Inicializa o carregamento de produtos
 */
document.addEventListener('DOMContentLoaded', async () => {
    // Carregar produtos do JSON
    await carregarProdutos();
    
    // Exibir produtos na página
    exibirProdutos();
});
