// Script para inserir produtos no Supabase via JavaScript
// Abra o console do navegador na página admin.html e cole este código

const produtos = [
  {
    nome: 'Toner Konica Minolta TN711',
    descricao: 'Obtenha o melhor rendimento e performance com o toner original Konica Minolta TN711, ideal para os modelos bizhub 600 e bizhub 750.',
    preco: 850.00,
    preco_promocional: null,
    imagem_url: 'https://theikossolucoes.com.br/tn711.jpg',
    categoria: 'toner',
    ordem: 1,
    destaque: true,
    ativo: true,
    especificacoes: {
      "Compatibilidade": "bizhub 600 / bizhub 750",
      "Tipo": "Original Konica Minolta",
      "Rendimento": "Alta capacidade"
    }
  },
  {
    nome: 'Toner Konica Minolta TN627',
    descricao: 'Obtenha o melhor rendimento e performance com o toner original Konica Minolta TN627, compatível com os modelos BizHub C12000 e C14000.',
    preco: 1200.00,
    preco_promocional: null,
    imagem_url: 'https://theikossolucoes.com.br/tonerkonicaminolta627.jpeg',
    categoria: 'toner',
    ordem: 2,
    destaque: false,
    ativo: true,
    especificacoes: {
      "Compatibilidade": "BizHub C12000 / C14000",
      "Tipo": "Original Konica Minolta",
      "Rendimento": "Produção"
    }
  },
  {
    nome: 'Toner TN622',
    descricao: 'Toner Tn-622 Original Alto Rendimento Para As Impressoras Konica Minolta Bizhub Press C1085, C1100, AccurioPress C6085, C6100, Bizhub Press C6085.',
    preco: 950.00,
    preco_promocional: null,
    imagem_url: 'https://www.theikossolucoes.com.br/uploads/1755279322-TN622.JPG',
    categoria: 'toner',
    ordem: 3,
    destaque: false,
    ativo: true,
    especificacoes: {
      "Compatibilidade": "Bizhub Press C1085/C1100 / AccurioPress C6085/C6100",
      "Tipo": "Original Alto Rendimento",
      "Rendimento": "Digital Press"
    }
  },
  {
    nome: 'Toner TN619',
    descricao: 'Toner Original Tn-619 Para As Impressoras Konica Minolta bizhub PRESS C1060, C1070, AccurioPress C2060, C2070, C3070, C3080.',
    preco: 880.00,
    preco_promocional: null,
    imagem_url: 'https://www.theikossolucoes.com.br/uploads/1755279699-619.jpg',
    categoria: 'toner',
    ordem: 4,
    destaque: false,
    ativo: true,
    especificacoes: {
      "Compatibilidade": "bizhub PRESS C1060/C1070 / AccurioPress C2060/C2070/C3070/C3080",
      "Tipo": "Original",
      "Rendimento": "Alto"
    }
  },
  {
    nome: 'Toner TN620',
    descricao: 'Toner Tn620 (Produto Original), Para Os Modelos AccurioPrint C3070L, C4065, Bizhub Pro C1060L, C1070L, C2060L, C2070L, C3080L.',
    preco: 920.00,
    preco_promocional: null,
    imagem_url: 'https://www.theikossolucoes.com.br/uploads/1755867759-tn620.jfif',
    categoria: 'toner',
    ordem: 5,
    destaque: false,
    ativo: true,
    especificacoes: {
      "Compatibilidade": "AccurioPrint C3070L/C4065 / Bizhub Pro C1060L/C1070L/C2060L/C2070L/C3080L",
      "Tipo": "Original",
      "Rendimento": "AccurioPrint"
    }
  },
  {
    nome: 'Toner TN616 Original',
    descricao: 'Toner TN616 Original com Garantia. Para os modelos Bizhub Press C6000, C6000 Pro, C7000, C7000P.',
    preco: 890.00,
    preco_promocional: null,
    imagem_url: 'https://www.theikossolucoes.com.br/uploads/1755868003-tonertn616.jfif',
    categoria: 'toner',
    ordem: 6,
    destaque: false,
    ativo: true,
    especificacoes: {
      "Compatibilidade": "Bizhub Press C6000/C6000 Pro/C7000/C7000P",
      "Tipo": "Original de Fábrica",
      "Garantia": "Sim"
    }
  },
  {
    nome: 'Toner TN615 Original',
    descricao: 'Toner TN615 Original. Para Modelos Bizhub Pro C8000, C7000, C6500, C6501, C5500, C224, C228.',
    preco: 860.00,
    preco_promocional: null,
    imagem_url: 'https://www.theikossolucoes.com.br/uploads/1755868193-tn615.jfif',
    categoria: 'toner',
    ordem: 7,
    destaque: false,
    ativo: true,
    especificacoes: {
      "Compatibilidade": "Bizhub Pro C8000/C7000/C6500/C6501/C5500/C224/C228",
      "Tipo": "Original",
      "Rendimento": "Alto"
    }
  },
  {
    nome: 'Cilindro DR313 CMYK',
    descricao: 'O modelo DR-313 CMYK é desenvolvido para linha multifuncional Konica colorida bizhubPRO e bizhubPRESS. Rendimento 25.000 páginas. Compatível com: bizhub PRESS C1070/C1070P, C1060/C1060L, C7000/C8000.',
    preco: 1500.00,
    preco_promocional: null,
    imagem_url: 'https://www.theikossolucoes.com.br/uploads/1755872834-tonerdr313.png',
    categoria: 'suprimento',
    ordem: 1,
    destaque: false,
    ativo: true,
    especificacoes: {
      "Compatibilidade": "bizhub PRESS C1070/C1060/C7000/C8000",
      "Tipo": "Cilindro Original",
      "Rendimento": "25.000 páginas"
    }
  },
  {
    nome: 'Toner TN514 Original',
    descricao: 'TONER TN 514 ORIGINAL Konica BIZHUB C458/C558/C658. Rendimento Até 30 mil Páginas.',
    preco: 780.00,
    preco_promocional: null,
    imagem_url: 'https://www.theikossolucoes.com.br/uploads/1756127286-tn514.jpeg',
    categoria: 'toner',
    ordem: 8,
    destaque: false,
    ativo: true,
    especificacoes: {
      "Compatibilidade": "BIZHUB C458/C558/C658",
      "Tipo": "Original",
      "Rendimento": "30.000 páginas"
    }
  },
  {
    nome: 'Toner TN512 Konica Minolta Original',
    descricao: 'Toner ORIGINAL Para os Modelos Konica Minolta TN512 TN-512 para Bizhub C454, C454e, C554, C554e, C258, C308, C368, C458, C558, C658.',
    preco: 750.00,
    preco_promocional: null,
    imagem_url: 'https://www.theikossolucoes.com.br/uploads/1756132006-tn514.jpeg',
    categoria: 'toner',
    ordem: 9,
    destaque: false,
    ativo: true,
    especificacoes: {
      "Compatibilidade": "Bizhub C454/C454e/C554/C554e/C258/C308/C368/C458/C558/C658",
      "Tipo": "Original Konica Minolta",
      "Rendimento": "Alto"
    }
  }
];

// Função para inserir os produtos
async function inserirProdutos() {
  console.log('🚀 Iniciando inserção de produtos...');
  
  try {
    const { data, error } = await supabaseClient
      .from('theikos_produtos')
      .insert(produtos)
      .select();
    
    if (error) {
      console.error('❌ Erro ao inserir produtos:', error);
      return;
    }
    
    console.log('✅ Produtos inseridos com sucesso!', data);
    console.log(`📦 Total de produtos inseridos: ${data.length}`);
    
    // Recarregar a lista de produtos
    if (typeof loadProductsList === 'function') {
      loadProductsList();
    }
  } catch (error) {
    console.error('❌ Erro:', error);
  }
}

// Executar
inserirProdutos();
