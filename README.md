# Removery UI

Biblioteca de componentes React + Storybook, espelhando a **Removery Library** no Figma. Construída a partir da auditoria do design system (ver documento *Auditoria — Removery Library vs. Uso no R7*).

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Componentes estilo shadcn/ui (Radix UI + `class-variance-authority` + `cn()`), escritos manualmente — a rede do ambiente onde isso foi gerado não tinha acesso a `ui.shadcn.com`, então os componentes foram recriados à mão seguindo fielmente o padrão real do shadcn (mesma API, mesmas classes, mesma estrutura). Funcionalmente equivalentes ao que a CLI oficial geraria.

## Como rodar

```bash
npm install
npm run storybook
```

Abre em `http://localhost:6006`.

## Scripts

| Comando | O que faz |
|---|---|
| `npm run storybook` | Sobe o Storybook em modo dev |
| `npm run build-storybook` | Gera a versão estática (pasta `storybook-static/`) pra publicar |
| `npm run dev` | Sobe o app Vite isolado (só um host de dev, o catálogo real vive no Storybook) |
| `npm run build` | Build de produção do app Vite |

## O que já existe

**Foundations** (`src/stories/foundations/`): Colors, Typography, Dark Mode.

**Componentes** (`src/components/ui/`): Button, Badge, Card, Input, Label, Textarea, Checkbox, Radio Group, Switch, Select, Avatar, Progress, Skeleton, Alert, Dialog, Sheet, Tooltip, Popover, Tabs.

Cada componente tem sua story em `src/stories/components/<categoria>/`, com `tags: ['autodocs']` — o Storybook gera a documentação de props/variantes automaticamente a partir do TypeScript.

## Antes de publicar pro time

1. **Sincronizar as cores reais do Figma.** Os valores em `src/index.css` são aproximações visuais feitas a partir de prints — os nomes das variáveis já batem 1:1 com o Figma (`--primary`, `--status-confirmed`, etc.), mas os valores hexadecimais/oklch precisam ser conferidos com a collection "Theme Mode" real.
2. **Tokenizar as flags do Badge** (PKG, GUAR, ONLINE, ALERT, $) — hoje usam classes Tailwind diretas (`bg-blue-600` etc.) porque ainda não têm token semântico documentado no Figma.

## Próximos componentes a adicionar

Confirmados na Removery Library, ainda não portados pra cá: Calendar, Data Table, Drawer, Dropdown Menu, Command, Avatar Group, Menubar, Navigation Menu, Hover Card, Context Menu, Accordion, Breadcrumb, Pagination, Sidebar.

Para adicionar um novo:
1. Confirme o componente e as variantes no Figma.
2. Crie `src/components/ui/<nome>.tsx` seguindo a convenção shadcn/ui já usada nos outros arquivos.
3. Crie a story em `src/stories/components/<categoria>/<Nome>.stories.tsx` com `tags: ['autodocs']`.
4. Rode `npm run storybook` pra conferir.

## Publicar o Storybook pro time

Duas opções:

**Chromatic** (recomendado — feito pelo time do Storybook, plano gratuito, inclui teste de regressão visual):
```bash
npx chromatic --project-token=<seu-token>
```

**GitHub Pages** (build estático):
```bash
npm run build-storybook
# depois, publique a pasta storybook-static/ via GitHub Actions ou manualmente
```

## Subir pro Git

```bash
git init
git add .
git commit -m "Initial scaffold: removery-ui Storybook"
git remote add origin <url-do-repo-da-removery>
git push -u origin main
```

(Este projeto não inclui node_modules/ nem .git/ — rode npm install primeiro.)
