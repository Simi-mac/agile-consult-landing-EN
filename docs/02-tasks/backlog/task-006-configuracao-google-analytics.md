```markdown
# Task 005 - Configuração do Google Analytics (GA4)

Status:
Backlog

Tipo:
Integração / Telemetria

Pedido:
Integrar Google Analytics para monitoramento de tráfego.

Contexto:
Monitoramento inicial é necessário para acompanhar tráfego, páginas mais vistas e conversões simples.

Objetivo:
Habilitar GA4 e validar que page_view e eventos básicos são registrados.

Escopo técnico:
- Criar propriedade GA4 (ou obter conta existente do cliente).
- Inserir script/gtag no `index.html` ou via tag manager.
- Validar carregamento do tracking em ambiente de preview e produção.
- Configurar eventos básicos (page_view, contato clicado — opcional via dataLayer/event).

Critérios de aceite:
- GA4 ativo (propriedade criada e configuração disponível)
- page_view registrado em tempo real no painel do GA4

Arquivos possivelmente impactados:
- `index.html`
- `src/main.tsx` (se optar por inicializar via JS)

Observações:
- Se cliente preferir, usar Google Tag Manager para facilitar gestão futura.

``` 
