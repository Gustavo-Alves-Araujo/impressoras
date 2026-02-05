#!/bin/bash

# Script de inicialização para Theikos Soluções
# Inicia um servidor HTTP local para testes

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Diretório do projeto
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Theikos Soluções - Dev Server       ║${NC}"
echo -e "${BLUE}║   Landing Page + Admin Panel          ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Verificar se Python está instalado
if command -v python3 &> /dev/null; then
    echo -e "${GREEN}✓${NC} Python 3 encontrado"
    
    # Inicia servidor
    echo -e "${YELLOW}Iniciando servidor HTTP em http://localhost:8000${NC}"
    echo -e "${YELLOW}Ctrl+C para parar o servidor${NC}"
    echo ""
    echo -e "${BLUE}URLs disponíveis:${NC}"
    echo -e "  ${GREEN}Landing Page:${NC}     http://localhost:8000"
    echo -e "  ${GREEN}Admin Panel:${NC}      http://localhost:8000/admin.html"
    echo -e "  ${GREEN}Sitemap:${NC}         http://localhost:8000/sitemap.xml"
    echo -e "  ${GREEN}Robots:${NC}          http://localhost:8000/robots.txt"
    echo ""
    
    cd "$PROJECT_DIR"
    python3 -m http.server 8000
    
elif command -v python &> /dev/null; then
    echo -e "${GREEN}✓${NC} Python 2 encontrado"
    
    echo -e "${YELLOW}Iniciando servidor HTTP em http://localhost:8000${NC}"
    echo -e "${YELLOW}Ctrl+C para parar o servidor${NC}"
    echo ""
    echo -e "${BLUE}URLs disponíveis:${NC}"
    echo -e "  ${GREEN}Landing Page:${NC}     http://localhost:8000"
    echo -e "  ${GREEN}Admin Panel:${NC}      http://localhost:8000/admin.html"
    echo -e "  ${GREEN}Sitemap:${NC}         http://localhost:8000/sitemap.xml"
    echo -e "  ${GREEN}Robots:${NC}          http://localhost:8000/robots.txt"
    echo ""
    
    cd "$PROJECT_DIR"
    python -m SimpleHTTPServer 8000

elif command -v node &> /dev/null; then
    echo -e "${GREEN}✓${NC} Node.js encontrado"
    
    # Instalar http-server se necessário
    if ! npm list -g http-server &> /dev/null; then
        echo -e "${YELLOW}Instalando http-server...${NC}"
        npm install -g http-server
    fi
    
    echo -e "${YELLOW}Iniciando servidor HTTP em http://localhost:8080${NC}"
    echo -e "${YELLOW}Ctrl+C para parar o servidor${NC}"
    echo ""
    echo -e "${BLUE}URLs disponíveis:${NC}"
    echo -e "  ${GREEN}Landing Page:${NC}     http://localhost:8080"
    echo -e "  ${GREEN}Admin Panel:${NC}      http://localhost:8080/admin.html"
    echo -e "  ${GREEN}Sitemap:${NC}         http://localhost:8080/sitemap.xml"
    echo -e "  ${GREEN}Robots:${NC}          http://localhost:8080/robots.txt"
    echo ""
    
    cd "$PROJECT_DIR"
    http-server -p 8080

else
    echo -e "${RED}✗${NC} Nenhum servidor disponível!"
    echo ""
    echo -e "${YELLOW}Instale um dos seguintes:${NC}"
    echo "  • Python 3: sudo apt-get install python3"
    echo "  • Node.js:  https://nodejs.org/"
    echo ""
    echo -e "${YELLOW}Ou use manualmente em outro terminal:${NC}"
    echo "  cd $PROJECT_DIR"
    echo "  python3 -m http.server 8000"
fi
