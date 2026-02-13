# Configuração do Sistema de Produtos com Supabase

## 📋 Visão Geral

O site agora utiliza o Supabase para gerenciar produtos (toners) de forma dinâmica, permitindo adicionar, editar e remover produtos através do painel administrativo sem precisar editar código.

## 🚀 Como Configurar

### 1. Criar a Tabela no Supabase

Acesse o Supabase Dashboard: https://vkwczizdjhsejbpaapea.supabase.co

Execute o SQL do arquivo `supabase_setup.sql` no SQL Editor do Supabase:

```bash
# Copie todo o conteúdo de supabase_setup.sql e execute no SQL Editor
```

Isso irá criar:
- Tabela `theikos_produtos`
- Índices para performance
- Políticas de segurança (RLS)
- Produtos de exemplo

### 2. Verificar Credenciais

As credenciais já estão configuradas em `produtos-supabase.js`:

```javascript
const SUPABASE_URL = 'https://vkwczizdjhsejbpaapea.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGci...';
```

### 3. Estrutura da Tabela

**theikos_produtos:**
- `id` (serial) - ID único
- `nome` (varchar) - Nome do produto
- `descricao` (text) - Descrição detalhada
- `preco` (decimal) - Preço normal
- `preco_promocional` (decimal) - Preço em promoção
- `imagem_url` (text) - URL da imagem
- `categoria` (varchar) - Categoria (toner, impressora, etc)
- `destaque` (boolean) - Produto em destaque
- `ativo` (boolean) - Produto ativo/visível
- `especificacoes` (jsonb) - Specs técnicas em JSON
- `ordem` (integer) - Ordem de exibição
- `created_at` (timestamp) - Data de criação
- `updated_at` (timestamp) - Data de atualização

## 📝 Como Adicionar Produtos

### Pelo SQL Editor:

```sql
INSERT INTO public.theikos_produtos (
    nome, 
    descricao, 
    preco, 
    preco_promocional, 
    imagem_url, 
    categoria, 
    destaque, 
    ordem
) VALUES (
    'Toner TN-324K Preto',
    'Toner original Konica Minolta preto com rendimento de até 28.000 páginas',
    450.00,
    389.90,
    'https://theikossolucoes.com.br/TN-324.jpeg',
    'toner',
    true,
    1
);
```

### Pelo Table Editor (Recomendado):

1. Acesse: Database > Tables > theikos_produtos
2. Clique em "Insert" > "Insert row"
3. Preencha os campos:
   - Nome: "Toner TN-324K Preto"
   - Descrição: "Toner original..."
   - Preço: 450.00
   - Preço Promocional: 389.90
   - Imagem URL: (URL da imagem)
   - Categoria: "toner"
   - Destaque: true/false
   - Ativo: true
   - Ordem: 1 (menor = primeiro)
4. Clique em "Save"

## 🎨 Recursos Visuais

### Produtos em Destaque

Para destacar um produto, marque `destaque = true`. Ele terá:
- Badge "DESTAQUE" amarelo/laranja
- Aparecerá primeiro na lista (junto com ordenação)

### Promoções

Para criar promoção:
- Defina `preco_promocional` menor que `preco`
- Badge de desconto automático (-X%)
- Exibição do valor economizado

### Especificações Técnicas

Use o campo `especificacoes` em formato JSON:

```json
{
  "Rendimento": "28.000 páginas",
  "Compatível": "bizhub C258/C308/C368",
  "Tipo": "Original Konica Minolta",
  "Cor": "Preto"
}
```

## 🔧 Manutenção

### Desativar Produto

Em vez de deletar, marque `ativo = false`:

```sql
UPDATE public.theikos_produtos 
SET ativo = false 
WHERE id = 1;
```

### Alterar Ordem de Exibição

```sql
UPDATE public.theikos_produtos 
SET ordem = 5 
WHERE id = 1;
```

Produtos são ordenados por `ordem ASC` (menor primeiro) e depois por `destaque DESC`.

### Atualizar Preço

```sql
UPDATE public.theikos_produtos 
SET preco = 399.90, preco_promocional = 349.90 
WHERE id = 1;
```

## 📱 Como Funciona no Site

O arquivo `produtos-supabase.js` carrega automaticamente os produtos:

1. Conecta ao Supabase
2. Busca produtos ativos da categoria "toner"
3. Ordena por `ordem` e `destaque`
4. Renderiza cards dinamicamente
5. Atualiza automaticamente ao recarregar a página

## 🛡️ Segurança

- **RLS Habilitado**: Row Level Security ativo
- **Leitura Pública**: Qualquer um pode VER produtos ativos
- **Escrita Protegida**: Apenas usuários autenticados podem CRIAR/EDITAR/DELETAR
- **Anon Key**: Segura para uso público (apenas leitura)

## 🎯 Próximos Passos

1. Execute o SQL de setup no Supabase
2. Adicione suas imagens de produtos no Supabase Storage ou use URLs externas
3. Insira produtos via Table Editor
4. Teste a página /index.html#toners
5. Configure o painel admin (opcional)

## ❓ Troubleshooting

**Produtos não aparecem:**
- Verifique se `ativo = true`
- Verifique se `categoria = 'toner'`
- Abra o Console do navegador (F12) para ver erros
- Verifique as credenciais do Supabase

**Imagens não carregam:**
- Use URLs completas (https://...)
- Faça upload no Supabase Storage ou use CDN externo
- Verifique se a URL está acessível publicamente

**Erro de permissão:**
- Verifique se RLS está configurado corretamente
- Certifique-se de que a política de SELECT está ativa

