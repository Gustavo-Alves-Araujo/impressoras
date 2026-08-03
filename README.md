# Theikos Soluções - Landing Page & Admin Panel

## 📋 Visão Geral

Sistema completo de landing page com painel administrativo para Theikos Soluções - empresa especializada em aluguel de impressoras profissionais Konica Minolta e venda de toners para clínicas, laboratórios e escolas.

## � Navegação do Site (IDs das Seções)

Use estes links para navegar diretamente para cada seção:

### Página Principal (index.html)

| Seção | ID | URL Direta | Descrição |
|-------|----|-----------:|-----------|
| 🏠 **Hero** | - | `https://theikossolucoes.com.br/` | Topo da página com título e CTA principal |
| 📦 **Toners** | `#toners` | `https://theikossolucoes.com.br/#toners` | Catálogo de toners originais Konica Minolta |
| 🖨️ **Aluguel de Impressoras** | `#aluguel` | `https://theikossolucoes.com.br/#aluguel` | Planos de aluguel corporativo |
| 📋 **Nosso Processo** | `#processo` | `https://theikossolucoes.com.br/#processo` | Como funciona o aluguel (passo a passo) |
| ⭐ **Vantagens** | `#vantagens` | `https://theikossolucoes.com.br/#vantagens` | Aluguel vs Compra - Comparação |
| 🏥 **Saúde** | `#saude` | `https://theikossolucoes.com.br/#saude` | Soluções para hospitais e clínicas |
| 🎓 **Escolas** | `#escolas` | `https://theikossolucoes.com.br/#escolas` | Soluções para instituições de ensino |
| 🏢 **Nosso Espaço** | `#espaco` | `https://theikossolucoes.com.br/#espaco` | Tour virtual pela sede |
| ❓ **FAQ** | `#faq` | `https://theikossolucoes.com.br/#faq` | Perguntas frequentes |
| 📞 **Contato** | `#contato` | `https://theikossolucoes.com.br/#contato` | Formulário e informações de contato |

### Páginas Específicas por Segmento

| Página | URL | Descrição |
|--------|-----|-----------|
| 🏥 **Saúde Completa** | `/saude.html` | Landing page completa para o setor de saúde |
| 🎓 **Educação Completa** | `/educacao.html` | Landing page completa para instituições de ensino |
| 🔐 **Admin** | `/admin.html` | Painel administrativo (senha: `admin123`) |

### Exemplos de Uso

**Para o cliente usar no site:**
```html
<!-- Link no menu -->
<a href="#toners">Ver Toners</a>

<!-- Link externo -->
<a href="https://theikossolucoes.com.br/#processo">Como Funciona</a>

<!-- Botão CTA -->
<a href="https://theikossolucoes.com.br/#contato">Fale Conosco</a>
```

**Para marketing e redes sociais:**
- Instagram Bio: `theikossolucoes.com.br/#toners` (link direto para produtos)
- Google Ads: `theikossolucoes.com.br/#aluguel` (captura interesse em aluguel)
- Email Marketing: `theikossolucoes.com.br/#vantagens` (educação do cliente)
- WhatsApp Status: `theikossolucoes.com.br/#saude` (segmento específico)

---

## �📁 Estrutura de Arquivos

```
/home/axolutions/projetos/impressoras/
├── index.html                    # Landing page principal
├── saude.html                    # Landing page setor saúde
├── educacao.html                 # Landing page setor educação
├── admin.html                    # Painel administrativo
├── produtos-supabase.js          # Script para carregar produtos do Supabase
├── produtos.js                   # Script legado (não usado)
├── produtos.json                 # Catálogo legado (não usado)
├── inserir-produtos.sql          # Script SQL para popular banco
├── inserir-produtos.js           # Script JS para popular banco
├── supabase_setup.sql            # Setup inicial do Supabase
├── sitemap.xml                   # Mapa do site para SEO
├── robots.txt                    # Arquivo robots para buscadores
├── WhatsAppVideo20260218at113956AM.mp4  # Vídeo setor educação
├── test-admin.html               # Página de teste de login
└── README.md                     # Este arquivo
```

## 🚀 Funcionalidades

### Landing Page Principal (index.html)
- ✅ **Hero Section** - Layout horizontal com imagem à direita
- ✅ **Seção Toners (#toners)** - Produtos dinâmicos do Supabase
- ✅ **Aluguel de Impressoras (#aluguel)** - Planos corporativos
- ✅ **Nosso Processo (#processo)** - Timeline visual do processo
- ✅ **Vantagens (#vantagens)** - Comparação Aluguel vs Compra
- ✅ **Setor Saúde (#saude)** - Vídeo e soluções para hospitais
- ✅ **Setor Educação (#escolas)** - Vídeo e soluções para escolas
- ✅ **Nosso Espaço (#espaco)** - Tour virtual
- ✅ **FAQ (#faq)** - Perguntas frequentes
- ✅ **Contato (#contato)** - Formulário de contato
- ✅ **Botão WhatsApp flutuante** - Conversão em tempo real
- ✅ **SEO completo** - Meta tags, schema JSON-LD, sitemap

### Landing Pages Segmentadas
- ✅ **Saúde (saude.html)** - Página completa para hospitais e clínicas
- ✅ **Educação (educacao.html)** - Página completa para escolas e universidades

### Painel Administrativo (admin.html)
- ✅ **Autenticação** - Senha protegida (`admin123`)
- ✅ **Dashboard de Estatísticas** - Gráfico de cliques (em desenvolvimento)
- ✅ **Gerenciamento de Produtos** - CRUD completo via Supabase
- ✅ **Visualização de Produtos** - Lista de itens cadastrados
- ✅ **Cadastro de Produtos** - Formulário com especificações JSON
- ✅ **Interface moderna** - Design responsivo com Tailwind

### Integração Supabase
- ✅ **Banco de dados** - PostgreSQL na nuvem
- ✅ **Produtos dinâmicos** - Carregamento automático na página
- ✅ **API REST** - Endpoints automáticos
- ✅ **Categorias** - Toners, Impressoras, Suprimentos
- ✅ **Especificações** - Campos JSON customizáveis

## 🔐 Credenciais

### Painel Administrativo
- **URL:** `https://theikossolucoes.com.br/admin.html`
- **Senha:** `admin123`
- **Funcionalidades:** Gerenciar produtos, visualizar estatísticas

### Banco de Dados Supabase
- **URL:** `https://vkwczizdjhsejbpaapea.supabase.co`
- **Tabela:** `theikos_produtos`
- **Acesso:** Via painel admin ou SQL Editor do Supabase

---

## 📞 Informações de Contato no Site

- **WhatsApp:** +55 31 97505-0034
- **Email:** contato@theikossolucoes.com.br (configurar)
- **Endereço:** [A definir - atualizar no footer]

---

## 🎯 Como Usar os Links de Seção

### Para o Cliente Compartilhar:

**Em Bio do Instagram:**
```
🖨️ Aluguel de impressoras profissionais
👉 theikossolucoes.com.br/#aluguel
```

**Em Stories/Posts:**
```
🏥 Soluções para hospitais
Link: theikossolucoes.com.br/#saude

🎓 Soluções para escolas  
Link: theikossolucoes.com.br/#escolas
```

**Em Email Marketing:**
```
Assunto: Economize 70% com aluguel de impressoras

Olá [Nome],

Conheça nosso processo de aluguel:
👉 https://theikossolucoes.com.br/#processo

Veja nossos toners originais:
👉 https://theikossolucoes.com.br/#toners
```

**No Google Meu Negócio:**
```
Website: https://theikossolucoes.com.br
Catálogo: https://theikossolucoes.com.br/#toners
Saúde: https://theikossolucoes.com.br/saude.html
Educação: https://theikossolucoes.com.br/educacao.html
```

---

## 📊 Dados de Produtos

### Impressoras (Aluguel) - 3 modelos
1. **Konica Minolta bizhub C558** - 55 ppm
2. **Konica Minolta bizhub C458** - 45 ppm
3. **Konica Minolta bizhub C368** - 36 ppm

### Toners (Venda) - 11 modelos
1. TN711, TN627, TN622, TN619, TN620
2. TN616, TN615, DR 313CMYK
3. TN514, TN512

Todos os produtos estão em `produtos.json` com:
- Nome e descrição
- Compatibilidade
- Rendimento
- Imagens
- Links diretos para WhatsApp

## 🎨 Design & Branding

### Cores
- **Primária:** #F84428 (Vermelho-alaranjado)
- **Secundária:** #0E0553 (Púrpura profundo)

### Tipografia
- **Fonte:** Plus Jakarta Sans (Google Fonts)
- **Peso:** 300-800 (variável)

### Framework
- **Tailwind CSS** - estilização responsiva
- **Font Awesome 6.0** - ícones
- **Chart.js** - gráficos de análise

## 📈 SEO & Performance

### Meta Tags Implementados
- ✅ Meta description otimizada
- ✅ Keywords relevantes
- ✅ Open Graph (OG) para redes sociais
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ Robots meta tag

### Schema JSON-LD
- ✅ Organization schema
- ✅ LocalBusiness schema
- ✅ Informações de contato estruturadas

### Sitemap
- ✅ `sitemap.xml` com todas as seções
- ✅ Prioridades e frequência de atualização

### Robots.txt
- ✅ Permite crawlers em todas as seções públicas
- ✅ Bloqueia admin e assets temporários
- ✅ Referência para sitemap

## 📱 Responsividade

- ✅ Design Mobile-First
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px)
- ✅ Navbar responsivo com menu móvel
- ✅ Cards e grids adaptáveis
- ✅ Textos e imagens otimizadas

## 📞 Integração com WhatsApp

Todos os botões de CTA levam para:
```
https://wa.me/5531975050034?text={mensagem_customizada}
```

Tipos de cliques rastreados:
- Conversão (CTA buttons)
- Interesse (seções navegadas)

## 💾 Armazenamento Local

### localStorage Keys
- `theikos_auth` - sessão do admin
- `theikos_clicks` - array de cliques rastreados
- `theikos_produtos` - produtos cadastrados via admin
- `theikos_impressoras` - catálogo de impressoras
- `theikos_toners` - catálogo de toners
- `theikos_produtos_catalogo` - catálogo completo

## 🛠️ Como Usar

### Visualizar Landing Page
```bash
# Abrir em navegador (requer servidor HTTP local)
# Não funciona com file:// protocol
```

### Acessar Admin
1. Navegue para `/admin.html`
2. Digite a senha: `123123`
3. Explore:
   - **Estatísticas:** Visualize cliques por tipo
   - **Produtos:** Veja todos cadastrados
   - **Novo Produto:** Adicione produtos personalizados

### Carregar Produtos do Catálogo
- O arquivo `produtos.json` é carregado automaticamente
- Produtos aparecem nas seções de Aluguel e Toners
- Compatível com admin e site

## 📝 Seções da Landing Page

| Seção | ID | Descrição |
|-------|----|----|
| Header | - | Navegação fixa |
| Hero | #home | Apresentação principal |
| Produtos | #aluguel | Impressoras para aluguel |
| Rent vs Buy | #rent-vs-buy | Comparação |
| Toners | #toners | Linha de toners |
| Healthcare | #exames | Soluções médicas |
| Problemas & Soluções | #problemas | Layout enxuto |
| Escolas | #por-que-alugar | Soluções educacionais |
| Recursos | #recursos | Features e benefícios |
| Depoimentos | #escolas | Testimonials |
| CTA Final | - | Chamada final |
| Footer | - | Rodapé com links |

## 🔗 Links Importantes

- **Sitemap:** `/sitemap.xml`
- **Robots:** `/robots.txt`
- **Produtos:** `/produtos.json`
- **Script:** `/produtos.js`
- **Admin:** `/admin.html`

## 📚 Scripts Inclusos

### Tracking de Cliques
```javascript
function trackClick(type) {
    const click = {
        type: type,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('pt-BR')
    };
    // Salvo em localStorage
}
```

### Carregamento de Produtos
```javascript
async function carregarProdutos() {
    // Carrega de produtos.json
    // Armazena em localStorage
    // Exibe na página
}
```

## 🚀 Deploy

### Requisitos
- Servidor HTTP (Apache, Nginx, Node.js, etc.)
- Suporte para JSON estático
- HTTPS recomendado para melhor SEO

### Passos
1. Upload dos arquivos para servidor
2. Configurar MIME type para `.json`
3. Testar sitemap em `/sitemap.xml`
4. Submeter sitemap ao Google Search Console
5. Monitorar analytics no admin

## 📊 Analytics

### Dados Rastreados
- Cliques em botões de conversão
- Tipo de ação (conversão, interesse)
- Timestamp de cada ação
- Data formatada para análise

### Visualização
- Dashboard no admin com Chart.js
- Gráfico de barras por tipo de clique
- Total de cliques agregados

## ⚙️ Configurações Importantes

### Passwords
- Admin: `123123` (ALTERAR EM PRODUÇÃO!)

### Links WhatsApp
- Número: `+55 31 9 7505-0034`
- Mensagens customizadas por seção

### URLs
- Canonical: `https://theikossolucoes.com.br/`
- Sitemaps aceitos pelos buscadores

## 🔄 Próximas Melhorias

- [ ] Integrar com banco de dados real
- [ ] Sistema de autenticação seguro (JWT)
- [ ] Email de confirmação em formulários
- [ ] Analytics avançado (Google Analytics)
- [ ] Integração com CRM
- [ ] Checkout de produtos
- [ ] Dashboard de relatórios avançado

## 📄 Licença

Todos os direitos reservados © 2024 Theikos Soluções

## 📧 Suporte

Para dúvidas ou melhorias, contacte:
- **Email:** contato@theikossolucoes.com.br
- **WhatsApp:** +55 31 9 7505-0034
- **Endereço:** Monsenhor Horta, 20 - Vila São Paulo - Contagem/MG

---

**Última atualização:** 19/12/2024
**Versão:** 2.0 (Com SEO e Admin melhorado)
