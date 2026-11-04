# Teste Front-End Econverse

Página de vitrine de produtos desenvolvida em React e TypeScript, seguindo o layout do Figma.

## Tecnologias

- React + TypeScript (Vite)
- Sass (SCSS) com CSS Modules
- Sem bibliotecas de UI

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Como rodar

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:5173`.

O projeto usa TypeScript 6.0 por compatibilidade com o `typescript-eslint`. O arquivo `.npmrc` (`legacy-peer-deps=true`) foi mantido por segurança na instalação das dependências.

## Como compilar e testar

```bash
npm run build     # compila o projeto (TypeScript + Vite)
npm run preview   # serve a versão compilada
npm run lint      # verifica o código com o ESLint
```

O projeto não tem testes automatizados. A conferência foi visual, comparando com o layout do Figma.

## Estrutura

```
src/
├── components/   # Header, Banner, CategoryList, SectionTitle, ProductTabs,
│                 # ProductCard, ProductShowcase, ProductModal, PartnerBanners,
│                 # BrandList, Newsletter, Footer
├── services/     # busca do JSON de produtos
├── hooks/        # useProducts (carregando, erro e dados)
├── types/        # tipos do produto e da resposta da API
├── utils/        # formatação de preço
├── styles/       # variáveis SCSS (cores, fontes, espaçamentos)
└── assets/       # ícones e imagens
```

## Decisões

- **Proxy do Vite:** o servidor do JSON não libera CORS para o navegador, então as chamadas passam por `/api/produtos`, configurado em `vite.config.ts`. Por isso é preciso rodar com `npm run dev` (ou `npm run build` seguido de `npm run preview`).
- **Dados:** a vitrine usa foto, descrição e preço do JSON. O preço vem em centavos e é formatado com `Intl.NumberFormat`.
- **Textos fixos:** o preço riscado, as parcelas ("ou 2x de...") e o "Frete grátis" não existem no JSON e seguem o layout.
- **Carrossel:** feito sem biblioteca, com estado do React (`useState`) e `slice` da lista. Mostra 4 produtos por vez e as setas andam de 1 em 1.
- **Modal:** abre ao clicar na foto, na descrição ou em "Comprar", com os dados do produto clicado. Fecha com o botão ×, com a tecla Esc ou clicando no fundo escuro.
- **Abas:** são visuais, porque o JSON só tem celulares.
- **Cores:** o layout seguiu o Figma, que usa azul.
- **Acessibilidade e SEO:** HTML semântico (`header`, `nav`, `main`, `section`, `footer`), `alt` nas imagens, `aria-label` nos botões, `lang="pt-BR"` e meta description.
