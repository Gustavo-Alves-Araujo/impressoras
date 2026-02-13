# 🔐 Painel Administrativo Theikos

## 📋 Acesso

**URL:** `/admin.html`

**Credenciais:**
- Senha: `theikos2026admin`

⚠️ **IMPORTANTE:** Altere essa senha no código após o primeiro acesso!

## 🎯 Funcionalidades

### 1. **📊 Estatísticas (Analytics)**
Visualização de cliques e engajamento:
- **Total de Cliques**: Contador em tempo real
- **Gráfico de Barras**: Cliques por tipo (WhatsApp, Navegação, etc.)
- **Dados do LocalStorage**: Captura automática de interações

**Origem dos Dados:**
```javascript
localStorage.getItem('theikos_clicks')
```

Cada clique é registrado com:
- `type`: 'conversion' (WhatsApp) ou 'navigation'
- `timestamp`: Data e hora
- `page`: Página onde ocorreu
- `userAgent`: Navegador do usuário
- `referrer`: Origem do tráfego

### 2. **📦 Gestão de Produtos (CRUD)**

#### **Listar Produtos**
- Grid responsivo com todos os produtos
- Badges visuais (Destaque, Inativo, Categoria)
- Preços com destaque para promoções
- Botões de ação (Editar/Excluir)

#### **Adicionar Produto**
Campos disponíveis:
- ✅ Nome do Produto *
- ✅ Descrição completa *
- ✅ Preço Normal (R$) *
- ✅ Preço Promocional (R$)
- ✅ Categoria (Toner/Impressora/Suprimento) *
- ✅ Ordem de Exibição (0-999)
- ✅ URL da Imagem *
- ✅ Produto em Destaque (checkbox)
- ✅ Produto Ativo (checkbox)
- ✅ Especificações Técnicas (JSON dinâmico)

**Especificações Técnicas:**
- Sistema de key-value pairs
- Botão "Adicionar Especificação" para criar campos
- Exemplo: `Rendimento: 3000 páginas`
- Exemplo: `Compatível: bizhub C258/C308`

#### **Editar Produto**
- Modal overlay elegante
- Todos os campos editáveis
- Salvar alterações em tempo real no Supabase
- Validação de campos obrigatórios

#### **Excluir Produto**
- Confirmação antes de excluir
- Remoção permanente do banco de dados
- Feedback visual de sucesso/erro

## 🔧 Integração Supabase

### **Configuração**
```javascript
URL: https://vkwczizdjhsejbpaapea.supabase.co
Anon Key: eyJhbGci... (já configurada)
```

### **Tabela: theikos_produtos**

Todas as operações CRUD são feitas via API:

**SELECT (Listar):**
```javascript
await supabase
    .from('theikos_produtos')
    .select('*')
    .order('ordem', { ascending: true });
```

**INSERT (Criar):**
```javascript
await supabase
    .from('theikos_produtos')
    .insert([productData]);
```

**UPDATE (Editar):**
```javascript
await supabase
    .from('theikos_produtos')
    .update(productData)
    .eq('id', id);
```

**DELETE (Excluir):**
```javascript
await supabase
    .from('theikos_produtos')
    .delete()
    .eq('id', id);
```

## 🎨 Interface

### **Design System**
- **Cores:**
  - Primary: `#F84428` (vermelho Theikos)
  - Secondary: `#0E0553` (azul escuro)
  - Success: Verde
  - Danger: Vermelho

- **Componentes:**
  - Sidebar fixa (desktop)
  - Cards de produto com hover effects
  - Modal overlay para edição
  - Formulários com validação visual
  - Loading states profissionais
  - Mensagens de erro/sucesso

### **Responsividade**
- ✅ Desktop: Sidebar + conteúdo
- ✅ Tablet: Layout adaptativo
- ✅ Mobile: Menu hamburger (implementar se necessário)

## 📱 Como Usar

### **Passo 1: Login**
1. Acesse `/admin.html`
2. Digite a senha: `theikos2026admin`
3. Clique em "Entrar"

### **Passo 2: Visualizar Analytics**
1. Página inicial já mostra estatísticas
2. Gráfico atualiza automaticamente
3. Cliques são rastreados no site principal

### **Passo 3: Adicionar Produto**
1. Clique em "Novo Produto" na sidebar
2. Preencha todos os campos obrigatórios (*)
3. (Opcional) Adicione especificações técnicas
4. Marque "Destaque" se quiser destacar o produto
5. Clique em "Cadastrar Produto"
6. Aguarde confirmação de sucesso

### **Passo 4: Editar Produto**
1. Clique em "Produtos" na sidebar
2. Localize o produto desejado
3. Clique em "Editar"
4. Modifique os campos necessários
5. Clique em "Salvar Alterações"

### **Passo 5: Excluir Produto**
1. Clique em "Produtos" na sidebar
2. Localize o produto desejado
3. Clique em "Excluir"
4. Confirme a exclusão

### **Passo 6: Logout**
1. Clique em "Sair" no menu inferior da sidebar
2. Sessão será encerrada

## 🛡️ Segurança

### **Autenticação**
- Senha armazenada no sessionStorage
- Logout limpa a sessão
- Verificação em cada carregamento de página

### **Row Level Security (RLS)**
O Supabase está configurado com:
- ✅ Leitura pública (produtos ativos)
- ✅ Escrita apenas para autenticados
- ❌ Para produção, configure autenticação real no Supabase!

### **Recomendações de Segurança:**

1. **Altere a Senha:**
```javascript
// Linha 28 do admin.html
if (pass === 'NOVA_SENHA_FORTE_AQUI') {
```

2. **Configure Auth Real no Supabase:**
   - Ative Supabase Auth
   - Crie usuário admin
   - Substitua verificação simples por:
```javascript
const { user, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
});
```

3. **Use HTTPS:**
   - Em produção, sempre HTTPS
   - Certificado SSL válido

4. **Restrinja IP (opcional):**
   - Configure firewall no Supabase
   - Permita apenas IPs confiáveis

## 📊 Analytics Detalhado

### **Dados Capturados**
Cada evento registra:
```javascript
{
    type: 'conversion',         // ou 'navigation'
    timestamp: '2026-02-12T...',
    page: '/index.html',
    section: '#toners',
    product: 'Toner TN-324',
    userAgent: 'Mozilla/5.0...',
    referrer: 'https://google.com',
    sessionId: 'abc123...',
    fullDate: '12/02/2026'
}
```

### **Melhorias Futuras**
- [ ] Gráfico de cliques por produto específico
- [ ] Timeline de eventos
- [ ] Funil de conversão
- [ ] Taxa de conversão (%)
- [ ] Exportar dados (CSV/JSON)
- [ ] Dashboard de vendas
- [ ] Integração com Google Analytics

## 🚀 Deploy

### **Arquivos Necessários:**
- `admin.html` (painel administrativo)
- `supabase_setup.sql` (estrutura do banco)
- `produtos-supabase.js` (loader de produtos)

### **Checklist de Deploy:**
1. ✅ Execute SQL no Supabase
2. ✅ Verifique credenciais (URL + Anon Key)
3. ✅ Altere senha de admin
4. ✅ Teste CRUD completo
5. ✅ Verifique analytics
6. ✅ Faça backup do banco
7. ✅ Configure SSL/HTTPS
8. ✅ (Opcional) Configure auth real

## 🐛 Troubleshooting

**Produtos não aparecem:**
- Verifique console (F12)
- Confirme que o SQL foi executado
- Verifique credenciais do Supabase
- Teste RLS policies

**Erro ao cadastrar:**
- Verifique campos obrigatórios
- Confirme formato do preço (números)
- Valide URL da imagem

**Analytics vazio:**
- Navegue no site principal
- Clique em links do WhatsApp
- Volte ao admin e recarregue

**Não consegue fazer login:**
- Senha: `theikos2026admin` (padrão)
- Limpe cache do navegador
- Verifique sessionStorage (DevTools)

## 📞 Suporte

Para dúvidas técnicas:
1. Consulte README_SUPABASE.md
2. Verifique logs do console
3. Revise políticas do Supabase

---

**Desenvolvido para Theikos Soluções** 🚀
Versão: 1.0 | Data: Fevereiro 2026
