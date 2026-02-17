# Tractian – Frontend Challenge

Landing page **multi-idioma** (EN, PT, ES) da persona **Gerente de Planta**, desenvolvida com Next.js (App Router) e next-intl.

---

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **next-intl** (i18n com rotas localizadas)
- **React Hook Form + Zod** (formulário da demo)
- **next/image** para imagens (imgix, S3)

---

## Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). A raiz redireciona para a página do Gerente de Planta no locale padrão (PT).

```bash
# Build de produção
npm run build

# Rodar em produção
npm start
```

---

## Estrutura principal

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz (html, fontes, metadados)
│   ├── page.tsx            # Redirect para locale padrão
│   └── [locale]/
│       ├── layout.tsx      # Provider i18n + DemoModal
│       ├── page.tsx        # Home → redirect plant-manager
│       ├── loading.tsx / error.tsx / not-found.tsx
│       └── who-we-serve/plant-manager/
│           └── page.tsx    # Página Gerente de Planta
├── components/             # Header, Footer, PlantManager, Modal, UI
├── contexts/               # DemoModalContext
├── i18n/                   # routing.ts, request.ts (next-intl)
├── lib/                    # utils, images
└── messages/               # en.json, pt.json, es.json
```

---

## i18n

- **Locales:** EN, PT (padrão), ES  
- **URLs localizadas:** ex. PT `/solucoes-para-gerentes-industriais`, EN `/who-we-serve/plant-manager`  
- **Navegação:** `Link` e `redirect` de `@/i18n/routing` em todo o app  
- **Traduções:** namespaces por área (header, footer, plantManager, demoModal, common)

