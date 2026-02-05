# Theikos Soluções - Configurações

## 🔐 CREDENCIAIS

### Admin Panel
- **URL:** http://localhost:8000/admin.html
- **Senha:** 123123
- **Nota:** ALTERAR EM PRODUÇÃO!

## 📞 CONTATO

### WhatsApp
- **Número:** +55 31 9 7505-0034
- **Plataforma:** WhatsApp Business

### Email
- **Email Geral:** contato@theikossolucoes.com.br

### Endereço
- **Rua:** Monsenhor Horta, 20
- **Bairro:** Vila São Paulo
- **Cidade:** Contagem/MG
- **Estado:** MG
- **País:** Brasil

## 🌍 DOMÍNIO

### Principal
- **Domínio:** theikossolucoes.com.br
- **Protocolo:** HTTPS recomendado
- **Tipo:** Landing Page + Admin

### URLs Importantes
- **Sitemap:** https://theikossolucoes.com.br/sitemap.xml
- **Robots:** https://theikossolucoes.com.br/robots.txt
- **Admin:** https://theikossolucoes.com.br/admin.html

## 🎨 BRANDING

### Cores
- **Primária:** #F84428 (Vermelho-alaranjado)
- **Secundária:** #0E0553 (Púrpura profundo)
- **Sucesso:** #22c55e (Verde)
- **Aviso:** #f59e0b (Âmbar)
- **Erro:** #ef4444 (Vermelho)

### Logo
- **Arquivo:** image.png
- **Tamanho:** Otimizado para web
- **Formato:** PNG com transparência

### Tipografia
- **Fonte:** Plus Jakarta Sans
- **Fallback:** Sans-serif system
- **Pesos:** 300, 400, 500, 600, 700, 800

## 📊 DADOS DE PRODUTOS

### Impressoras (3 modelos)
```
1. Konica Minolta bizhub C558 - 55 ppm
2. Konica Minolta bizhub C458 - 45 ppm
3. Konica Minolta bizhub C368 - 36 ppm
```

### Toners (11 modelos)
```
TN711, TN627, TN622, TN619, TN620, TN616, TN615
DR 313CMYK, TN514, TN512
```

**Arquivo:** produtos.json

## 🗂️ ESTRUTURA DE PASTAS

```
/impressoras
├── index.html           (Landing page)
├── admin.html           (Painel admin)
├── produtos.json        (Catálogo)
├── produtos.js          (Script dinâmico)
├── image.png            (Logo)
├── sitemap.xml          (SEO)
├── robots.txt           (SEO)
├── start-server.sh      (Dev server)
├── README.md            (Documentação)
├── CHECKLIST.md         (Checklist)
├── CONFIG.md            (Este arquivo)
└── index_backup.html    (Backup)
```

## 📱 RESPONSIVIDADE

### Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Viewport
- **Meta:** `viewport = device-width, initial-scale=1.0`

## 🔗 LINKS IMPORTANTES

### Internos
- Header: Link para #home
- Navbar: Links para #aluguel, #exames, #toners, #vantagens
- CTA: Botões para WhatsApp (wa.me/5531975050034)
- Footer: Links para política, termos, etc.

### Externos
- **Video:** https://www.theikossolucoes.com.br/tonner/apre.mp4
- **Imagens:** https://www.theikossolucoes.com.br/tonner/[produto].jpg

## 💾 LOCAL STORAGE KEYS

| Key | Descrição | Tipo |
|-----|-----------|------|
| `theikos_auth` | Sessão admin | String ("true"/"false") |
| `theikos_clicks` | Cliques rastreados | Array de objetos |
| `theikos_produtos` | Produtos customizados | Array de objetos |
| `theikos_impressoras` | Catálogo impressoras | Array de objetos |
| `theikos_toners` | Catálogo toners | Array de objetos |
| `theikos_produtos_catalogo` | Catálogo completo | Object |

## 🎯 ANALYTICS

### Tracking
- Cliques em WhatsApp buttons
- Tipo de conversão
- Timestamp
- Data formatada

### Visualização
- Dashboard no admin
- Gráfico Chart.js
- Total de cliques

## 🚀 PERFORMANCE

### Otimizações
- Tailwind CSS (utility-first)
- Font Awesome CDN
- Google Fonts (preconnect)
- Lazy loading images (recomendado)
- Minificação em produção

### Tamanhos de Mídia
- **Vídeo:** h-80, max-w-md (constrained)
- **Imagens:** h-64, max-w-sm (constrained)
- **Logo:** h-8/h-10 (navbar)

## 📋 SEÇÕES DA PÁGINA

1. **Header** - Navegação e Logo
2. **Hero** - Banner principal com CTA
3. **Products** - Impressoras para aluguel
4. **Rent vs Buy** - Comparação
5. **Toners** - Produtos para venda
6. **Healthcare** - Soluções médicas
7. **Problemas & Soluções** - Layout enxuto
8. **Escolas** - Soluções educacionais
9. **Features** - Características
10. **Testimonials** - Depoimentos
11. **CTA Final** - Chamada final
12. **Footer** - Rodapé

## 🔄 FLUXO DE CONVERSÃO

```
Landing Page
    ↓
    ├─→ Clique WhatsApp (Tracked)
    ├─→ Admin visualiza interesse
    ├─→ Follow-up via WhatsApp
    └─→ Conversão em cliente
```

## 📈 SEO CHECKLIST

- [x] Meta description
- [x] Meta keywords
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Schema JSON-LD
- [x] Sitemap XML
- [x] Robots.txt
- [x] Canonical URL
- [x] Alt text em imagens
- [x] Heading hierarchy

## 🛡️ SEGURANÇA

### Antes de Produção
1. Alterar senha do admin
2. Implementar autenticação real
3. Usar HTTPS obrigatório
4. Validar formulários server-side
5. Proteger API endpoints
6. Limpar comentários de debug
7. Minificar JavaScript

### LocalStorage
- Não é seguro para dados sensíveis
- Use SessionStorage para auth
- Implementar token JWT em produção

## 📞 SUPORTE & MANUTENÇÃO

### Logs
- Console (browser dev tools)
- localStorage (dados persistidos)
- Admin panel (analytics)

### Monitoramento
- Google Search Console
- Google Analytics
- Uptime monitors
- Performance tools

## 🎓 DOCUMENTAÇÃO ADICIONAL

- **README.md** - Overview geral
- **CHECKLIST.md** - Checklist de implementação
- **CONFIG.md** - Este arquivo
- **Comentários no código** - Inline documentation

---

**Última atualização:** 19/12/2024
**Versão:** 2.0
**Status:** Production Ready ✅
