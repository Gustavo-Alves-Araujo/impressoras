-- Inserir produtos no Supabase
-- Execute este SQL no painel do Supabase (SQL Editor)
-- Nota: Preços são opcionais - Site mostra apenas "Solicitar Orçamento"

INSERT INTO theikos_produtos (nome, descricao, preco, preco_promocional, imagem_url, categoria, ordem, destaque, ativo, especificacoes) VALUES

-- Produto 1: TN711 (Destaque)
('Toner Konica Minolta TN711', 
 'Obtenha o melhor rendimento e performance com o toner original Konica Minolta TN711, ideal para os modelos bizhub 600 e bizhub 750.', 
 850.00, 
 NULL, 
 'https://theikossolucoes.com.br/tn711.jpg', 
 'toner', 
 1, 
 true, 
 true, 
 '{"Compatibilidade": "bizhub 600 / bizhub 750", "Tipo": "Original Konica Minolta", "Rendimento": "Alta capacidade"}'::jsonb),

-- Produto 2: TN627
('Toner Konica Minolta TN627', 
 'Obtenha o melhor rendimento e performance com o toner original Konica Minolta TN627, compatível com os modelos BizHub C12000 e C14000.', 
 1200.00, 
 NULL, 
 'https://theikossolucoes.com.br/tonerkonicaminolta627.jpeg', 
 'toner', 
 2, 
 false, 
 true, 
 '{"Compatibilidade": "BizHub C12000 / C14000", "Tipo": "Original Konica Minolta", "Rendimento": "Produção"}'::jsonb),

-- Produto 3: TN622
('Toner TN622', 
 'Toner Tn-622 Original Alto Rendimento Para As Impressoras Konica Minolta Bizhub Press C1085, C1100, AccurioPress C6085, C6100, Bizhub Press C6085.', 
 950.00, 
 NULL, 
 'https://www.theikossolucoes.com.br/uploads/1755279322-TN622.JPG', 
 'toner', 
 3, 
 false, 
 true, 
 '{"Compatibilidade": "Bizhub Press C1085/C1100 / AccurioPress C6085/C6100", "Tipo": "Original Alto Rendimento", "Rendimento": "Digital Press"}'::jsonb),

-- Produto 4: TN619
('Toner TN619', 
 'Toner Original Tn-619 Para As Impressoras Konica Minolta bizhub PRESS C1060, C1070, AccurioPress C2060, C2070, C3070, C3080.', 
 880.00, 
 NULL, 
 'https://www.theikossolucoes.com.br/uploads/1755279699-619.jpg', 
 'toner', 
 4, 
 false, 
 true, 
 '{"Compatibilidade": "bizhub PRESS C1060/C1070 / AccurioPress C2060/C2070/C3070/C3080", "Tipo": "Original", "Rendimento": "Alto"}'::jsonb),

-- Produto 5: TN620
('Toner TN620', 
 'Toner Tn620 (Produto Original), Para Os Modelos AccurioPrint C3070L, C4065, Bizhub Pro C1060L, C1070L, C2060L, C2070L, C3080L.', 
 920.00, 
 NULL, 
 'https://www.theikossolucoes.com.br/uploads/1755867759-tn620.jfif', 
 'toner', 
 5, 
 false, 
 true, 
 '{"Compatibilidade": "AccurioPrint C3070L/C4065 / Bizhub Pro C1060L/C1070L/C2060L/C2070L/C3080L", "Tipo": "Original", "Rendimento": "AccurioPrint"}'::jsonb),

-- Produto 6: TN616
('Toner TN616 Original', 
 'Toner TN616 Original com Garantia. Para os modelos Bizhub Press C6000, C6000 Pro, C7000, C7000P.', 
 890.00, 
 NULL, 
 'https://www.theikossolucoes.com.br/uploads/1755868003-tonertn616.jfif', 
 'toner', 
 6, 
 false, 
 true, 
 '{"Compatibilidade": "Bizhub Press C6000/C6000 Pro/C7000/C7000P", "Tipo": "Original de Fábrica", "Garantia": "Sim"}'::jsonb),

-- Produto 7: TN615
('Toner TN615 Original', 
 'Toner TN615 Original. Para Modelos Bizhub Pro C8000, C7000, C6500, C6501, C5500, C224, C228.', 
 860.00, 
 NULL, 
 'https://www.theikossolucoes.com.br/uploads/1755868193-tn615.jfif', 
 'toner', 
 7, 
 false, 
 true, 
 '{"Compatibilidade": "Bizhub Pro C8000/C7000/C6500/C6501/C5500/C224/C228", "Tipo": "Original", "Rendimento": "Alto"}'::jsonb),

-- Produto 8: DR313
('Cilindro DR313 CMYK', 
 'O modelo DR-313 CMYK é desenvolvido para linha multifuncional Konica colorida bizhubPRO e bizhubPRESS. Rendimento 25.000 páginas. Compatível com: bizhub PRESS C1070/C1070P, C1060/C1060L, C7000/C8000.', 
 1500.00, 
 NULL, 
 'https://www.theikossolucoes.com.br/uploads/1755872834-tonerdr313.png', 
 'suprimento', 
 1, 
 false, 
 true, 
 '{"Compatibilidade": "bizhub PRESS C1070/C1060/C7000/C8000", "Tipo": "Cilindro Original", "Rendimento": "25.000 páginas"}'::jsonb),

-- Produto 9: TN514
('Toner TN514 Original', 
 'TONER TN 514 ORIGINAL Konica BIZHUB C458/C558/C658. Rendimento Até 30 mil Páginas.', 
 780.00, 
 NULL, 
 'https://www.theikossolucoes.com.br/uploads/1756127286-tn514.jpeg', 
 'toner', 
 8, 
 false, 
 true, 
 '{"Compatibilidade": "BIZHUB C458/C558/C658", "Tipo": "Original", "Rendimento": "30.000 páginas"}'::jsonb),

-- Produto 10: TN512
('Toner TN512 Konica Minolta Original', 
 'Toner ORIGINAL Para os Modelos Konica Minolta TN512 TN-512 para Bizhub C454, C454e, C554, C554e, C258, C308, C368, C458, C558, C658.', 
 750.00, 
 NULL, 
 'https://www.theikossolucoes.com.br/uploads/1756132006-tn514.jpeg', 
 'toner', 
 9, 
 false, 
 true, 
 '{"Compatibilidade": "Bizhub C454/C454e/C554/C554e/C258/C308/C368/C458/C558/C658", "Tipo": "Original Konica Minolta", "Rendimento": "Alto"}'::jsonb);

-- Verificar se os produtos foram inseridos
SELECT nome, categoria, ordem, destaque, ativo FROM theikos_produtos ORDER BY categoria, ordem;
