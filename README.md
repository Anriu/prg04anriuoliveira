# Portal da Filarmônica

Portal da Filarmônica é um sistema desenvolvido para auxiliar na gestão completa de bandas filarmônicas, centralizando informações sobre alunos, músicos, monitores, instrumentos, fardamentos, repertório, apresentações e demais recursos da instituição. Além das funcionalidades administrativas, o sistema busca preservar a memória e a trajetória da filarmônica, permitindo o registro de seu histórico, apresentações realizadas, repertórios executados e outros acontecimentos relevantes ao longo de sua existência.

> Projeto individual da disciplina **PRG04 — Programação Web** (IFBA).
> Versão 2.0: aplicação em **React**.

## 📖 Sobre o Projeto

Historicamente, bandas filarmônicas e instituições musicais lidam com desafios na organização de seus dados, recorrendo frequentemente a papéis, livros de tombo físicos ou planilhas descentralizadas para controlar seu patrimônio (instrumentos e fardamentos), acervo de partituras e escalas de músicos.

O **Portal da Filarmônica** surge para resolver esse problema, oferecendo uma solução web unificada que simplifica as tarefas administrativas e operacionais. A plataforma moderniza a gestão da banda, evitando perdas de informações e permitindo que a liderança, maestros e diretoria foquem no que mais importa: o desenvolvimento musical e artístico.

## 🎯 Objetivo

Fornecer uma ferramenta centralizada, segura e intuitiva para o gerenciamento de todos os recursos (humanos e materiais) de uma banda filarmônica. Além de otimizar a rotina de processos — como empréstimos de instrumentos e organização de ensaios —, o sistema visa funcionar como um **repositório digital e cultural**, documentando e preservando a história, o legado e a memória da instituição ao longo do tempo.

## 🧩 Módulos do Sistema

- Gestão de alunos
- Gestão de monitores
- Gestão de instrumentos
- Gestão de materiais
- Gestão de repertório
- Gestão de apresentações
- Histórico da banda

## ✨ Funcionalidades

| Rota | Página | O que faz |
|------|--------|-----------|
| `/` | Início | Apresentação do projeto, cards dos módulos, botão de Login |
| `/atividade-3` | Atividade 3 | Lista de instrumentos e imagem dinâmica (`<picture>`) |
| `/paleta-de-cores` | Paleta de Cores | Cor principal, justificativa e tipo de paleta |
| `/sandbox` | SandBox | Áudio do dobrado e vídeo responsivo |
| `/login` | Login | Formulário com validação (HTML5 + JavaScript) e autenticação fictícia |
| `/admin` | Painel | Tabela de usuários com busca, cadastro, edição e exclusão (exige login) |
| qualquer outra | 404 | Página não encontrada |

**Acesso de demonstração** (autenticação fictícia, sem back-end):

- E-mail: `admin@filarmonica.com`
- Senha: `filarmonica123`

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico e CSS3 (variáveis, Flexbox, Media Queries Mobile First, CSS Modules)
- JavaScript (ES6+: módulos, destructuring, arrow functions, async/await)
- [React 18](https://react.dev/) — componentes funcionais, props, PropTypes, `useState`
- [React Router DOM 6](https://reactrouter.com/) — navegação entre páginas
- [Bootstrap 5](https://getbootstrap.com/) — instalado via NPM (grid, tipografia, navbar, cards, formulários, tabelas, badges)
- [Vite](https://vite.dev/) — servidor de desenvolvimento e build de produção

## 🚀 Como executar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior (o NPM já vem junto).

```bash
npm install      # instala as dependências (cria node_modules/)
npm start        # servidor de desenvolvimento em http://localhost:3000
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # serve a pasta dist/ localmente para conferir o build
```

## 🌐 Deploy

O projeto já está preparado para hospedagem gratuita de SPA (as rotas do React Router funcionam ao recarregar a página):

- **Vercel** (recomendada): importe o repositório do GitHub em vercel.com → framework *Vite* é detectado automaticamente. O arquivo `vercel.json` redireciona todas as rotas para o `index.html`.
- **Netlify**: rode `npm run build` e arraste a pasta `dist/` para app.netlify.com/drop. O arquivo `public/_redirects` cuida das rotas.

Link público: _adicione aqui após o deploy_.

## 📁 Estrutura do Projeto

```
.
├── index.html               # único HTML da SPA: título, favicon, fonte e <div id="root">
├── package.json             # dependências e scripts (npm start / build)
├── vite.config.js           # configuração do Vite
├── vercel.json              # reescrita de rotas para o deploy na Vercel
├── public/                  # arquivos servidos sem processamento
│   ├── favicon.ico
│   ├── _redirects           # reescrita de rotas para o deploy na Netlify
│   └── audio/               # áudio da página SandBox
└── src/                     # código da aplicação
    ├── main.jsx             # ponto de entrada: Bootstrap + CSS global + BrowserRouter
    ├── App.jsx              # estado de autenticação e definição das rotas
    ├── assets/images/       # imagens importadas pelos componentes
    ├── components/          # componentes reutilizáveis (+ seus .module.css)
    │   ├── Layout.jsx       # header + main (<Outlet />) + footer
    │   ├── Header.jsx       # logotipo e título
    │   ├── Navbar.jsx       # <nav id="menu"> com links e botão Login/Sair
    │   ├── Footer.jsx       # autoria e links
    │   ├── LoginForm.jsx    # formulário de autenticação validado
    │   ├── UserTable.jsx    # tabela de usuários do painel
    │   ├── UserForm.jsx     # cadastro/edição de usuário
    │   ├── BuscaUsuarios.jsx, StatusBadge.jsx, ModuloCard.jsx,
    │   ├── AmostraCor.jsx, ImagemInstrumento.jsx, VideoResponsivo.jsx
    │   └── RotaProtegida.jsx  # bloqueia /admin sem login
    ├── pages/               # uma página por rota (+ seus .module.css)
    ├── data/                # dados fixos: usuários, instrumentos, módulos, paleta
    ├── services/            # authService.js — autenticação fictícia (async)
    ├── hooks/               # useTituloPagina.js — título da aba por página
    ├── utils/               # validacoes.js — regras de validação reutilizadas
    └── styles/index.css     # CSS global: tokens da paleta + media queries
```

### Organização do CSS

- `src/styles/index.css` define os **tokens** da paleta (`--cor-primaria`, `--cor-secundaria`...) e personaliza o Bootstrap com eles.
- Cada componente/página tem seu `*.module.css` (classes em camelCase, escopo isolado).
- Todos os arquivos seguem **Mobile First**: estilos base para smartphones e `@media (min-width: 601px)` (tablet) e `@media (min-width: 1025px)` (desktop).

## 📝 Convenção de commits

Mensagens no padrão *Conventional Commits*: `tipo: descrição no imperativo`.
Tipos usados: `feat` (nova funcionalidade), `fix` (correção), `refactor` (mudança de código sem alterar comportamento), `style` (CSS/formatação), `docs` (documentação), `chore` (configuração/dependências).

Exemplo: `refactor: migra o projeto para React com React Router e Bootstrap`
