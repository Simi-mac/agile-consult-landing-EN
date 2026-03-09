# Paleta de Cores

Paleta utilizada (valores definidos como HSL em `src/index.css` — aqui listados para referência):

- Primary / Teal: `--primary` / `--teal` = 177 100% 35%  (hsl(177,100%,35%))
- Primary foreground: `--primary-foreground` = 210 33% 4% (escuro para texto sobre primary)
- Secondary / Gold: `--secondary` / `--gold` = 37 91% 55%  (hsl(37,91%,55%))
- Teal light: `--teal-light` = 174 77% 45%
- Teal dark: `--teal-dark` = 174 100% 24%
- Gold light: `--gold-light` = 40 100% 60%
- Gold dark: `--gold-dark` = 37 88% 40%

- Background: `--background` = 210 33% 4%
- Foreground (texto principal): `--foreground` = 0 0% 100%
- Card / Popover backgrounds: `--card`, `--popover` = 210 30% 7%

- Gray / Neutros:
	- `--gray-1`: 205 20% 47%
	- `--gray-2`: 205 22% 64%
	- `--gray-3`: 205 28% 78%

- Dark shades (camadas de UI): `--dark-2`, `--dark-3`, `--dark-4`, `--dark-5`

Uso recomendado:

- Mapear tokens para variáveis CSS e usar `hsl(var(--token))` para composições e transparências (ex.: `hsl(var(--teal) / 0.3)`).
- Preferir `--teal` para ações primárias (botões, CTAs) e `--gold` como cor de destaque secundário.
- Manter contraste: testar combinações com ferramentas de acessibilidade (contrast checker) e ajustar `-foreground` quando necessário.

Notas:
- As cores são expressas como valores HSL para facilitar ajustes de saturação/tonalidade.
- Atualize este arquivo se os tokens em `src/index.css` forem alterados.