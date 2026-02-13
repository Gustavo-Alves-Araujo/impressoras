-- Criar tabela de produtos Theikos
CREATE TABLE IF NOT EXISTS public.theikos_produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2),
    preco_promocional DECIMAL(10, 2),
    imagem_url TEXT,
    categoria VARCHAR(100) DEFAULT 'toner',
    destaque BOOLEAN DEFAULT false,
    ativo BOOLEAN DEFAULT true,
    especificacoes JSONB,
    ordem INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Adicionar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_theikos_produtos_categoria ON public.theikos_produtos(categoria);
CREATE INDEX IF NOT EXISTS idx_theikos_produtos_ativo ON public.theikos_produtos(ativo);
CREATE INDEX IF NOT EXISTS idx_theikos_produtos_destaque ON public.theikos_produtos(destaque);
CREATE INDEX IF NOT EXISTS idx_theikos_produtos_ordem ON public.theikos_produtos(ordem);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.theikos_produtos ENABLE ROW LEVEL SECURITY;

-- Criar política para leitura pública
CREATE POLICY "Permitir leitura pública de produtos"
ON public.theikos_produtos
FOR SELECT
TO anon, authenticated
USING (ativo = true);

-- Criar política para admin (authenticated users can insert/update/delete)
CREATE POLICY "Permitir admin gerenciar produtos"
ON public.theikos_produtos
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Inserir alguns produtos de exemplo
INSERT INTO public.theikos_produtos (nome, descricao, preco, preco_promocional, imagem_url, categoria, destaque, ordem) VALUES
('Toner TN-221BK Preto Original Brother', 'Toner original Brother com rendimento de até 2.500 páginas. Compatível com HL-3140CW, HL-3170CDW, MFC-9130CW, MFC-9330CDW.', 189.90, 159.90, 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400', 'toner', true, 1),
('Toner TN-221C Ciano Original Brother', 'Toner ciano original com qualidade superior e rendimento de até 1.400 páginas.', 189.90, 159.90, 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400', 'toner', true, 2),
('Toner TN-221M Magenta Original Brother', 'Toner magenta original para impressões coloridas de alta qualidade.', 189.90, 159.90, 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400', 'toner', true, 3),
('Toner TN-221Y Amarelo Original Brother', 'Toner amarelo original com excelente durabilidade e cores vivas.', 189.90, 159.90, 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400', 'toner', false, 4),
('Toner TN-760 Preto Alto Rendimento', 'Toner de alto rendimento para impressão de grandes volumes - até 3.000 páginas.', 249.90, 219.90, 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400', 'toner', false, 5),
('Kit 4 Toners TN-221 (CMYK)', 'Kit completo com as 4 cores: Preto, Ciano, Magenta e Amarelo. Economia garantida!', 599.90, 499.90, 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400', 'toner', true, 6);

-- Criar função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar trigger para atualizar updated_at
CREATE TRIGGER update_theikos_produtos_updated_at
BEFORE UPDATE ON public.theikos_produtos
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

COMMENT ON TABLE public.theikos_produtos IS 'Tabela de produtos (toners, impressoras, etc) para o site Theikos';
COMMENT ON COLUMN public.theikos_produtos.nome IS 'Nome do produto';
COMMENT ON COLUMN public.theikos_produtos.descricao IS 'Descrição detalhada do produto';
COMMENT ON COLUMN public.theikos_produtos.preco IS 'Preço normal do produto';
COMMENT ON COLUMN public.theikos_produtos.preco_promocional IS 'Preço promocional (se houver)';
COMMENT ON COLUMN public.theikos_produtos.imagem_url IS 'URL da imagem do produto';
COMMENT ON COLUMN public.theikos_produtos.categoria IS 'Categoria: toner, impressora, etc';
COMMENT ON COLUMN public.theikos_produtos.destaque IS 'Se o produto deve aparecer em destaque';
COMMENT ON COLUMN public.theikos_produtos.ativo IS 'Se o produto está ativo/visível';
COMMENT ON COLUMN public.theikos_produtos.especificacoes IS 'Especificações técnicas em JSON';
COMMENT ON COLUMN public.theikos_produtos.ordem IS 'Ordem de exibição (menor = primeiro)';
