```markdown
# Task 007 - Configuração de contatos

Status:
Backlog

Tipo:
Implementação / Conteúdo

Pedido:
Adicionar canais de contato oficiais da cliente.

Contexto:
O site precisa direcionar usuários para canais oficiais (WhatsApp, email, redes sociais) com informações corretas.

Objetivo:
Garantir que todos os botões e links de contato apontem para canais oficiais e funcionem corretamente.

Escopo técnico:
- Atualizar número do WhatsApp em `lib/whatsapp.ts` e componentes.
- Atualizar links de email (`mailto:`) se necessário.
- Atualizar links de redes sociais no `Footer`.
- Verificar botões flutuantes e CTAs que usem contato.

Critérios de aceite:
- Botões direcionam corretamente
- Links funcionando

Arquivos possivelmente impactados:
- `src/lib/whatsapp.ts`
- `src/components/Footer.tsx`
- `src/components/WhatsAppFloat.tsx`
- `src/components/Navbar.tsx` (CTA)

Observações:
- Confirmar com o cliente o número formatado internacionalmente para links do WhatsApp.

``` 
