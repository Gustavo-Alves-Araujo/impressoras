# 📦 Inserir Produtos no Supabase

Este guia mostra como inserir os 10 produtos extraídos do site antigo no banco de dados Supabase.

## 🎯 Produtos a serem inseridos:

1. ✅ Toner Konica Minolta TN711 (DESTAQUE)
2. ✅ Toner Konica Minolta TN627
3. ✅ Toner TN622
4. ✅ Toner TN619
5. ✅ Toner TN620
6. ✅ Toner TN616 Original
7. ✅ Toner TN615 Original
8. ✅ Cilindro DR313 CMYK (Suprimento)
9. ✅ Toner TN514 Original
10. ✅ Toner TN512 Konica Minolta Original

---

## 📋 Método 1: Via SQL Editor (RECOMENDADO)

### Passo a passo:

1. **Acesse o Supabase Dashboard:**
   - Vá para: https://supabase.com/dashboard
   - Faça login
   - Selecione seu projeto

2. **Abra o SQL Editor:**
   - No menu lateral, clique em "SQL Editor"
   - Clique em "New query"

3. **Cole o SQL:**
   - Abra o arquivo `inserir-produtos.sql`
   - Copie TODO o conteúdo
   - Cole no SQL Editor

4. **Execute:**
   - Clique em "Run" (ou pressione Ctrl+Enter)
   - Aguarde a confirmação

5. **Verifique:**
   - Vá em "Table Editor" → "theikos_produtos"
   - Você deve ver os 10 novos produtos

---

## 💻 Método 2: Via JavaScript no Console

### Passo a passo:

1. **Abra o painel admin:**
   - Acesse: `http://127.0.0.1:5500/admin.html`
   - Faça login com a senha: `admin123`

2. **Abra o Console do navegador:**
   - Pressione F12
   - Vá para a aba "Console"

3. **Cole o código JavaScript:**
   - Abra o arquivo `inserir-produtos.js`
   - Copie TODO o conteúdo
   - Cole no console
   - Pressione Enter

4. **Aguarde a confirmação:**
   - Você verá mensagens no console:
   - `🚀 Iniciando inserção de produtos...`
   - `✅ Produtos inseridos com sucesso!`
   - `📦 Total de produtos inseridos: 10`

5. **Verifique:**
   - Os produtos devem aparecer automaticamente na aba "Produtos"
   - Ou recarregue a página admin

---

## 🎨 Detalhes dos Produtos:

### Categorias:
- **toner**: 9 produtos
- **suprimento**: 1 produto (DR313 CMYK)

### Destaques:
- Apenas o **TN711** está marcado como destaque

### Preços:
- ⚠️ **Nota:** Os preços estão salvos no banco, mas **NÃO aparecem no site**
- O site mostra apenas o botão **"Solicitar Orçamento"** via WhatsApp
- Você pode manter os preços no banco para controle interno
- Ou deixar como NULL se preferir

### Especificações:
- Todos os produtos têm especificações em JSON
- Incluem: Compatibilidade, Tipo, Rendimento, etc.
- Você pode adicionar/editar especificações via admin

---

## ✅ Após Inserir:

1. **Teste no site:**
   - Acesse: `http://127.0.0.1:5500/index.html`
   - Role até a seção "Toners Originais Konica Minolta"
   - Os produtos devem aparecer automaticamente!

2. **Gerencie no admin:**
   - Você pode editar, ativar/desativar, mudar ordem
   - Adicionar preços promocionais
   - Marcar/desmarcar destaques

---

## 🔧 Problemas?

### Erro: "duplicate key value violates unique constraint"
- Significa que os produtos já foram inseridos
- Verifique na tabela antes de inserir novamente

### Produtos não aparecem no site:
1. Verifique se `ativo = true`
2. Verifique se `categoria = 'toner'`
3. Abra o console do navegador (F12) para ver erros
4. Force reload: Ctrl+F5

### Erro no Supabase:
- Verifique se a tabela `theikos_produtos` existe
- Verifique se tem as colunas corretas
- Execute o arquivo `supabase_setup.sql` se necessário

---

## 📝 Observações:

- ✅ Todos os produtos estão ativos (`ativo = true`)
- ✅ URLs das imagens são do site antigo (funcionando)
- ✅ Ordem de exibição já está configurada
- ✅ Um produto está marcado como destaque
- ⚠️ Você pode ajustar os preços conforme necessário
- ⚠️ Você pode adicionar preços promocionais depois

---

## 🚀 Próximos Passos:

1. Inserir os produtos (escolha um dos métodos acima)
2. Testar no site principal
3. Ajustar preços se necessário
4. Adicionar mais produtos via painel admin
5. Configurar preços promocionais para ofertas

---

**Qualquer dúvida, consulte os arquivos:**
- `inserir-produtos.sql` - Comandos SQL
- `inserir-produtos.js` - Script JavaScript
- `README_PRODUTOS.md` - Este arquivo
