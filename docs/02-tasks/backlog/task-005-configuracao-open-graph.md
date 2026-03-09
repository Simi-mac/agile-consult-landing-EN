# Task 005 - Configuração de Open Graph

Status:
Backlog

Tipo:
Configuração / SEO Social

Pedido:
Configurar metadados para compartilhamento em redes sociais.

Contexto:
Atualmente não há imagens/metadados próprios para previews sociais; é necessário configurá-los para melhor apresentação em LinkedIn/WhatsApp/etc.

Objetivo:
Adicionar `og:*` e tags relacionadas para garantir previews corretos ao compartilhar links.

Escopo técnico:
- Definir `og:title` e `og:description` em `index.html`.
- Definir `og:image` (gerar imagem adequada em `/public` ou usar imagem hospedada).
- Definir `og:url` e `og:type`.
- Adicionar tags Twitter (`twitter:card`, `twitter:image`) se necessário.

Critérios de aceite:
- Preview correto ao compartilhar no LinkedIn
- Preview correto ao compartilhar no WhatsApp

Arquivos possivelmente impactados:
- `index.html`
- `public/` (imagens open graph sugeridas)

Observações:
- Gerar imagem `og:image` em dimensões recomendadas (ex.: 1200x630) e garantir cache-busting quando atualizar.
