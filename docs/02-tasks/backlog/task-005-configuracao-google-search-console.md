```markdown
# Task 003 - Configuração Google Search Console

Status:
Backlog

Tipo:
Configuração / SEO / Infra

Pedido:
Adicionar o site ao Google Search Console, verificar propriedade e submeter o sitemap.

Contexto:
Ter a propriedade verificada no Search Console permite monitorar indexação, cobertura, desempenho de pesquisa e enviar sitemaps para acelerar indexação de conteúdo.

Objetivo:
Verificar a propriedade do domínio no Search Console e submeter `public/sitemap.xml` (já criado no repositório).

Escopo técnico:
- Criar/usar conta Google do cliente e acessar Google Search Console.
- Adicionar propriedade (preferir domain property ou URL-prefix, conforme acesso ao DNS).
- Verificar propriedade:
  - Se usar `URL-prefix`, verificar com meta tag (`<meta name="google-site-verification" content="..." />`) ou arquivo HTML colocado em `public/`.
  - Se usar `Domain property`, verificar via registro TXT no DNS (recomendado quando possível).
- No Search Console, em "Sitemaps", submeter `/sitemap.xml`.
- Validar que o sitemap foi processado sem erros.
- Opcional: enviar manualmente URLs importantes para indexação (inspeção de URL → solicitar indexação).

Critérios de aceite:
- Propriedade verificada no Google Search Console
- `sitemap.xml` submetido e processado com status OK
- Instruções de verificação/documentação adicionadas em `docs/` para replicar/atualizar se necessário

Arquivos possivelmente impactados:
- `public/sitemap.xml` (já criado)
- arquivos DNS / painel de hospedagem (se verificação via TXT)
- `index.html` (se for usar meta tag de verificação)

Observações:
- Prefira Domain verification via DNS quando for possível (mais robusto). Se não puder tocar DNS, use verification via meta tag ou arquivo HTML em `public/`.
- Após submissão, use a ferramenta de inspeção de URL para verificar páginas-chave (home, /servicos, /contato).

``` 
