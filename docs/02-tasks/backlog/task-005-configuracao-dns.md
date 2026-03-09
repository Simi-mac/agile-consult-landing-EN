```markdown
# Task 010 - Configuração DNS

Status:
Backlog

Tipo:
Infra / Deploy

Pedido:
Configurar DNS para o domínio final do cliente.

Contexto:
Após aprovação do conteúdo e testes finais, é necessário apontar DNS para o provedor de hospedagem escolhido.

Objetivo:
Garantir que o domínio do cliente aponte corretamente para o site publicado.

Escopo técnico:
- Receber informações do provedor de hospedagem (Vercel/Netlify/etc.).
- Atualizar registros DNS (A, CNAME, TXT se necessário).
- Verificar propagação e validação HTTPS/SSL.

Critérios de aceite:
- Domínio aponta corretamente
- HTTPS válido e site acessível pelo domínio

Arquivos possivelmente impactados:
- Documentação de deploy (`README.md` ou `docs/deploy.md`)

Observações:
- Coordenar janela de mudança com cliente para minimizar downtime.

``` 
