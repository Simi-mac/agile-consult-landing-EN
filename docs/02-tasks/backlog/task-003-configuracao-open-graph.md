```markdown
# Task 006 - Configuração de Open Graph

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
- Definir `og:image` — usar a logo do projeto como placeholder: `src/assets/logo-fundo-branco.jpeg`.
    - Recomenda-se copiar a imagem para `/public/og-image.jpg` (ou `og-image.png`) antes do deploy.
    - Preferir 1200x630 (PNG/JPEG) para máxima compatibilidade entre LinkedIn/WhatsApp/Twitter.
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
 - Durante desenvolvimento o arquivo `src/assets/logo-fundo-branco.jpeg` pode ser usado como `og:image`.
 - Para produção: copie o ativo para `/public/og-image.jpg` e atualize `og:image` para `/og-image.jpg` (isso evita problemas de roteamento e garante disponibilidade direta no CDN/prod).
 - Ao atualizar a imagem, incremente um query string para cache-busting (ex.: `/og-image.jpg?v=2`).

``` 
