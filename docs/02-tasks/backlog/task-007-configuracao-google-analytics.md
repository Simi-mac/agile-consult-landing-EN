```markdown
# Task 007 - Configuração do Google Analytics (GA4)

Status:
✅ Concluída

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

Arquivos impactados:
- `index.html` - adicionado script do GA4 no `<head>`

Implementação realizada:
- ✅ Script GA4 adicionado ao `index.html` com ID: `G-T36JXG1HSY`
- ✅ Código inserido no início do `<head>` para garantir carregamento prioritário
- ✅ Configuração básica de page_view ativa

Observações:
- Script configurado diretamente no HTML (sem Google Tag Manager)
- O tracking será ativado automaticamente em todas as páginas
- Verifique no painel do GA4 em "Tempo Real" se os eventos estão sendo registrados

``` 
