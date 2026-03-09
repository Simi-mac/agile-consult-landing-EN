# Prompt: Template para criação de Tasks (usar com IA)

Objetivo: gerar uma task completa a partir de uma solicitação curta.

Instruções para o modelo:
1. Receba um título e um pedido curto.
2. Gere os campos: Status (Backlog), Tipo, Pedido, Contexto, Objetivo, Escopo técnico (lista de passos), Critérios de aceite, Arquivos possivelmente impactados, Observações.
3. Use linguagem concisa em português.

Exemplo de entrada (usuário):
- Título: "Atualizar favicon e logos"
- Pedido: "Substituir favicon temporário e logos por ativos oficiais"

Exemplo de saída (modelo):
- Preencher a task usando o formato padrão em `/docs/02-tasks/template-task.md`.

Observações:
- Sempre inclua links relativos para arquivos quando apropriado.
- Se houver incerteza sobre caminhos, liste os locais prováveis (ex: `public/`, `src/assets/`).