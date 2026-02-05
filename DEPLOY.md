# 🚀 Guia de Deploy - Theikos Soluções

## 📋 Pré-Requisitos

- [ ] Domínio `theikossolucoes.com.br` configurado
- [ ] Certificado SSL/HTTPS ativo
- [ ] Servidor HTTP (Apache, Nginx, etc.)
- [ ] Acesso FTP ou SSH ao servidor
- [ ] Conta Google Search Console
- [ ] Conta Google Analytics (opcional)

## 📦 Arquivos para Upload

### Essenciais
```
✓ index.html           - Landing page
✓ admin.html           - Painel administrativo
✓ produtos.json        - Catálogo de produtos
✓ produtos.js          - Script de carregamento
✓ image.png            - Logo
✓ sitemap.xml          - Mapa do site
✓ robots.txt           - Arquivo robots
```

### Documentação (opcional)
```
- README.md            - Documentação
- CHECKLIST.md         - Verificações
- CONFIG.md            - Configurações
- DEPLOY.md            - Este arquivo
```

### Scripts (opcional)
```
- start-server.sh      - Dev server local
- index_backup.html    - Backup da versão anterior
```

## 🖥️ Configuração do Servidor

### Apache (.htaccess)

Crie um arquivo `.htaccess` na raiz:

```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/json
</IfModule>

# Set MIME types
<IfModule mod_mime.c>
  AddType application/json .json
  AddType application/xml .xml
  AddType text/plain .txt
</IfModule>

# Redirect to HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Canonical domain (sem www)
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Cache control
<FilesMatch "\.html?$">
  Header set Cache-Control "max-age=3600, public"
</FilesMatch>

<FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|json|xml|txt)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

### Nginx (nginx.conf)

```nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name theikossolucoes.com.br;

    # SSL Configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Root directory
    root /var/www/theikossolucoes;
    index index.html;

    # GZIP Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/javascript;

    # Cache Control
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location ~* \.(html|xml|json|txt)$ {
        expires 1h;
        add_header Cache-Control "public";
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff";
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";

    # Rewrite rules
    try_files $uri $uri/ /index.html;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name theikossolucoes.com.br;
    return 301 https://$server_name$request_uri;
}
```

## 📤 Processo de Upload

### Via FTP (FileZilla)
1. Abrir FileZilla
2. Conectar ao servidor FTP
3. Navegar para `/public_html` ou `/www`
4. Fazer upload de todos os arquivos
5. Verificar permissões (644 para arquivos, 755 para pastas)

### Via SSH/SCP
```bash
# Conectar via SSH
ssh user@theikossolucoes.com.br

# Fazer upload via SCP
scp -r /local/path/* user@theikossolucoes.com.br:/var/www/theikossolucoes/

# Ou usando rsync
rsync -avz --delete /local/path/ user@theikossolucoes.com.br:/var/www/theikossolucoes/
```

### Via cPanel/Plesk
1. Fazer login no cPanel
2. Abrir File Manager
3. Navegar para `public_html`
4. Fazer upload via drag-and-drop
5. Descompactar se necessário

## ✅ Verificações Pós-Deploy

### 1. Testes de Acesso
```bash
# Testa se o site está respondendo
curl -I https://theikossolucoes.com.br

# Verifica status HTTP
curl -I https://theikossolucoes.com.br/admin.html
curl -I https://theikossolucoes.com.br/sitemap.xml
curl -I https://theikossolucoes.com.br/robots.txt
```

### 2. Validação HTML
- [ ] Acessar: https://validator.w3.org/
- [ ] Validar: https://theikossolucoes.com.br
- [ ] Verificar erros e warnings

### 3. Teste de SEO
- [ ] Google PageSpeed Insights
- [ ] GTmetrix
- [ ] Lighthouse (DevTools)
- [ ] Screaming Frog

### 4. Mobile Responsiveness
- [ ] Google Mobile-Friendly Test
- [ ] Testar em vários dispositivos
- [ ] Verificar touch targets

### 5. SSL/HTTPS
- [ ] SSL Labs: https://www.ssllabs.com/ssltest/
- [ ] Certificado válido
- [ ] HTTPS redireciona corretamente

## 🔍 Configuração do Google Search Console

### 1. Adicionar Propriedade
1. Acessar: https://search.google.com/search-console
2. Clique em "Adicionar propriedade"
3. Escolha "URL Prefix"
4. Digite: https://theikossolucoes.com.br
5. Clique em "Continuar"

### 2. Verificar Propriedade
- [ ] Método DNS (recomendado)
- [ ] Método arquivo HTML
- [ ] Método meta tag
- [ ] Método Google Analytics
- [ ] Método Google Tag Manager

### 3. Enviar Sitemap
1. No painel, acesse "Sitemaps"
2. Clique "Adicionar novo sitemap"
3. Digite: `sitemap.xml`
4. Clique "Enviar"

### 4. Verificar Robots.txt
1. Acesse "Tester do robots.txt"
2. Verifique se está permitindo crawlers
3. Ajuste se necessário

### 5. Testar URLs
1. Use "Inspeção de URL"
2. Digite: https://theikossolucoes.com.br
3. Clique "Inspecionar URL ao vivo"
4. Verifique se está indexando

## 📊 Configuração do Google Analytics

### 1. Criar Conta
1. Acessar: https://analytics.google.com
2. Clique "Começar a medir"
3. Preencha informações da propriedade
4. Selecione plataforma: Web

### 2. Gerar Código de Rastreamento
1. Copie o ID de rastreamento (UA-XXXXXXX-X)
2. Ou configure via Google Tag Manager (recomendado)

### 3. Adicionar ao Site
```html
<!-- Adicionar ao <head> do index.html -->
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 4. Aguardar 24-48 horas
- Tempo para dados começarem a aparecer
- Verificar no painel de Analytics

## 🔒 Segurança Pós-Deploy

### Senha Admin
1. Altere a senha padrão `123123` IMEDIATAMENTE
2. Use senha forte (min 12 caracteres)
3. Considere implementar 2FA

### HTTPS
- [ ] Certificado SSL válido
- [ ] Força redirecionamento HTTP → HTTPS
- [ ] Implementar HSTS (HTTP Strict-Transport-Security)

### Headers de Segurança
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### Proteção contra Ataques
- [ ] Validação server-side de formulários
- [ ] CSRF tokens
- [ ] Rate limiting
- [ ] WAF (Web Application Firewall)

## 📊 Monitoramento Contínuo

### Uptime
- Serviço recomendado: Uptimerobot.com
- Configurar alertas para downtime
- Monitorar 24/7

### Performance
- [ ] Monitorar Page Speed
- [ ] Analisar Core Web Vitals
- [ ] Otimizar images
- [ ] Minificar CSS/JS

### SEO
- [ ] Monitorar indexação
- [ ] Rastrear keywords
- [ ] Analisar CTR
- [ ] Verificar broken links

### Analytics
- [ ] Sessões e usuários
- [ ] Taxa de rejeição
- [ ] Conversões
- [ ] Comportamento do usuário

## 🆘 Troubleshooting

### Site não carrega
1. Verificar conexão server
2. Verificar permissões de arquivo
3. Verificar DNS
4. Ver logs do servidor

### Erro 404
1. Verificar caminho dos arquivos
2. Verificar rewrite rules
3. Verificar index.html existe

### Erro 500
1. Verificar permissões de pasta
2. Verificar syntax de código
3. Ver logs de erro do servidor
4. Desabilitar plugins se houver

### Produto não carregando
1. Verificar se produtos.json existe
2. Verificar se produtos.js carrega
3. Verificar localStorage (DevTools)
4. Ver console para erros

### Admin não funciona
1. Verificar se admin.html está acessível
2. Verificar localStorage
3. Verificar cookies habilitados
4. Limpar cache do navegador

## 📝 Checklist Final

- [ ] Todos os arquivos uploadados
- [ ] Permissões corretas (644 arquivos, 755 pastas)
- [ ] HTTPS ativo e funcionando
- [ ] Certificado SSL válido
- [ ] Sitemap.xml acessível
- [ ] Robots.txt acessível
- [ ] Admin.html funcionando
- [ ] Landing page responsiva
- [ ] Botões WhatsApp clicáveis
- [ ] Tracking de cliques ativo
- [ ] Sitemap submetido ao GSC
- [ ] Analytics configurado
- [ ] Email configurado
- [ ] Backup realizado
- [ ] Monitores de uptime ativos

## 📞 Suporte & Contato

Se encontrar problemas:

1. **Documentação:** Leia README.md e CONFIG.md
2. **Logs:** Verifique console do navegador e logs do servidor
3. **Email:** contato@theikossolucoes.com.br
4. **WhatsApp:** +55 31 9 7505-0034

---

**Última atualização:** 19/12/2024
**Versão:** 2.0
**Status:** Production Ready ✅

**Tempo estimado de deploy:** 30-60 minutos
**Tempo para indexação SEO:** 24-48 horas
