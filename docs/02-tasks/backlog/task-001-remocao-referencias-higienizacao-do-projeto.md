# Task 001 - Remoção de referências de Ferramenta de Inicialização (LOVABLE)

Status:
Em andamento

Tipo:
Refatoração / limpeza

Pedido:
Remover todas as referências da ferramenta de INICIALIZAÇÃO do projeto.

Contexto:
O projeto foi inicialmente criado com apoio de ferramenta externa(Lovable); entretanto, a entrega precisa parecer totalmente própria, sem menções à ferramenta em textos, comentários, metadados ou interface.

Objetivo:
Garantir que o projeto fique limpo e profissional, sem rastros da ferramenta utilizada na geração inicial.

Escopo técnico:
- Revisar e editar `index.html` (metatags, imagens externas)
- Revisar e editar `README.md` e documentação interna
- Revisar componentes em `src/components/*` para remover imagens e imports relacionados
- Revisar comentários no código e strings visíveis
- Revisar dependências em `package.json` e atualizar lockfiles
- Verificar `public/` e `src/assets/` por arquivos de favicon/logo

Critérios de aceite:
- Nenhuma referência ao "Lovable" no código fonte
- Nenhuma referência visual ou metadado apontando para lovable.dev
- `npm run dev` e `npm run build` executam sem erros relevantes

Arquivos possivelmente impactados:
- `index.html`
- `README.md`
- `package.json`
- `src/components/*`
- `src/App.*`
- `public/*`
- `src/assets/*`

Observações:
- Verificar também arquivos de lock (`package-lock.json`, `bun.lockb`) e, se necessário, regenerá-los após remover dependências.
- Task 001 foi iniciada parcialmente (algumas referências já removidas). Atualizar status conforme progresso.

Progresso:
- Snippet do Microsoft Clarity adicionado em `index.html` (id: `vvbn2htosc`).
