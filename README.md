# Portfolio Angular

Portfolio pessoal desenvolvido em Angular para apresentar projetos, tecnologias,
publicacoes e informacoes profissionais de forma responsiva e interativa.

O projeto usa uma arquitetura baseada em componentes standalone, dados estaticos
tipados e servicos isolados para tema, background animado e estado da pagina.

## Sumario

- [Visao geral](#visao-geral)
- [Stack](#stack)
- [Arquitetura](#arquitetura)
- [Fluxo da aplicacao](#fluxo-da-aplicacao)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Dados do portfolio](#dados-do-portfolio)
- [Componentes principais](#componentes-principais)
- [Servicos e utilitarios](#servicos-e-utilitarios)
- [Estilos e responsividade](#estilos-e-responsividade)
- [Como executar](#como-executar)
- [Scripts disponiveis](#scripts-disponiveis)
- [Build](#build)
- [Como evoluir o projeto](#como-evoluir-o-projeto)

## Visao geral

A aplicacao e uma single page application com navegacao por secoes:

- Hero com efeito de escrita e background animado.
- Header fixo com navegacao interna, menu mobile e alternancia de tema.
- Lista de projetos com filtro por categoria.
- Modal de detalhes do projeto com galeria de imagens/videos.
- Modal de aviso para links indisponiveis.
- Secao de tecnologias com cards por categoria e carrossel continuo de habilidades.
- Blog/publicacoes e footer com navegacao.

## Stack

- Angular 20 com componentes standalone.
- Angular Router com `withHashLocation()`.
- Angular Signals para estados locais da pagina.
- Tailwind CSS para utilitarios visuais.
- CSS global customizado em `src/styles.css`.
- Lucide Angular para icones.
- FinisherHeader para background animado.
- Karma/Jasmine configurados pelo Angular CLI.

## Arquitetura

O projeto segue uma separacao simples entre pagina, features, core e shared.

```text
src/app
|-- app.config.ts
|-- app.routes.ts
|-- app.ts
|-- core
|   |-- data
|   |-- models
|   `-- services
|-- features
|   |-- blog
|   |-- footer
|   |-- header
|   |-- hero
|   |-- project-modal
|   |-- projects
|   |-- technologies
|   `-- unavailable-modal
|-- pages
|   `-- portfolio-page
`-- shared
    |-- directives
    `-- pipes
```

### Camadas

**`app`**

Contem a entrada logica da aplicacao Angular. O componente raiz renderiza o
`RouterOutlet`, enquanto `app.routes.ts` aponta a rota principal para
`PortfolioPageComponent`.

**`pages`**

Orquestra a tela completa. `PortfolioPageComponent` importa os componentes de
feature, conecta dados estaticos, controla filtros, modais, tema, scroll e efeito
de escrita do hero.

**`features`**

Agrupa componentes visuais de uma responsabilidade especifica. Cada feature
recebe dados via `@Input()` e emite acoes via `@Output()`, mantendo baixa
dependencia entre componentes.

**`core`**

Centraliza dados, modelos e servicos globais. Essa camada define os contratos do
portfolio e concentra regras reutilizaveis como tema e background.

**`shared`**

Guarda utilitarios genericos usados por mais de uma feature, como a diretiva de
reveal on scroll e o pipe de HTML seguro.

## Fluxo da aplicacao

1. `main.ts` registra o locale `pt` e inicializa `App` com `appConfig`.
2. `app.config.ts` configura providers globais, change detection com event
   coalescing e rotas com hash location.
3. `app.routes.ts` direciona a rota raiz para `PortfolioPageComponent`.
4. `PortfolioPageComponent` carrega os dados de `core/data` e passa para as
   features por propriedades.
5. As features emitem eventos como navegar, filtrar, abrir modal, fechar modal e
   alternar tema.
6. A pagina central decide como atualizar signals, controlar scroll e chamar
   servicos.

## Estrutura de pastas

### `core/data`

Arquivos com dados estaticos do portfolio:

- `projects.data.ts`: projetos, categorias, imagens, videos, URLs e mensagens de
  indisponibilidade.
- `technologies.data.ts`: grupos de tecnologias e habilidades adicionais.
- `blog-posts.data.ts`: publicacoes exibidas na secao de blog.

### `core/models`

Define tipos e interfaces usadas por toda a aplicacao:

- `Project`
- `ProjectCategory`
- `TechnologyGroup`
- `Skill`
- `BlogPost`
- `UnavailableMessage`

Esses contratos ajudam a manter os dados consistentes entre componentes.

### `core/services`

- `ThemeService`: controla tema claro/escuro com signal, classe `dark` no
  documento e persistencia em `localStorage`.
- `FinisherBackgroundService`: inicializa e reaplica o background do
  FinisherHeader conforme o tema.

### `features`

Componentes de interface reutilizados pela pagina principal:

- `header`: navegacao, menu mobile e botao de tema.
- `hero`: titulo digitado, apresentacao e links sociais.
- `projects`: grid de projetos, filtros e acoes de abrir detalhes.
- `project-modal`: detalhes do projeto, media principal e navegacao da galeria.
- `technologies`: cards de tecnologias e carrossel de habilidades.
- `blog`: cards de publicacoes.
- `footer`: navegacao final.
- `unavailable-modal`: aviso sobre demo/codigo indisponivel.

### `shared`

- `RevealOnScrollDirective`: usa `IntersectionObserver` para aplicar `visible`
  quando o elemento entra na tela.
- `SafeHtmlPipe`: permite renderizar HTML vindo dos dados do portfolio com
  `DomSanitizer`.

## Dados do portfolio

O projeto nao depende de uma API externa. O conteudo e mantido em arquivos
TypeScript dentro de `src/app/core/data`.

Para adicionar um novo projeto:

1. Inclua um novo objeto em `PROJECTS_DATA`.
2. Garanta que o objeto siga a interface `Project`.
3. Coloque imagens em `src/assets/images` ou videos em `src/assets/videos`.
4. Informe `demoUrl` e `githubUrl` quando existirem.
5. Configure `unavailable` para mensagens de fallback.

Para adicionar uma tecnologia:

1. Edite `TECHNOLOGIES_DATA`.
2. Adicione o SVG em `src/assets/icons`.
3. Informe `name`, `level` e `iconAsset`.

Para alterar habilidades do carrossel:

1. Edite `ADDITIONAL_SKILLS`.
2. O componente duplica a lista visualmente para manter rolagem infinita.

## Componentes principais

### `PortfolioPageComponent`

E o componente coordenador da aplicacao. Ele controla:

- Estado do filtro ativo.
- Projeto selecionado.
- Mensagem do modal de indisponibilidade.
- Estado do menu mobile.
- Estado visual do header durante scroll.
- Efeito de escrita do hero.
- Bloqueio/restauracao de scroll ao abrir modais.
- Inicializacao do tema e background.

### `ProjectsComponent`

Renderiza os cards de projeto e emite eventos para:

- Trocar filtro.
- Abrir modal de detalhes.
- Mostrar aviso de link indisponivel.

### `ProjectModalComponent`

Mostra detalhes do projeto selecionado. O modal possui:

- Conteudo HTML sanitizado.
- Galeria de imagens/videos.
- Navegacao entre medias.
- Acoes para demo e codigo.
- Emissao de aviso quando um link nao esta disponivel.

### `TechnologiesComponent`

Renderiza grupos de tecnologias em cards e uma faixa de habilidades adicionais
com movimento continuo. O carrossel cria copias visuais da lista para evitar
espacos vazios durante o loop.

## Servicos e utilitarios

### Tema

O tema e gerenciado por `ThemeService`:

- Tema padrao: escuro.
- Persistencia: `localStorage`.
- Aplicacao visual: classe `dark` no elemento `html`.
- Consumo: `PortfolioPageComponent` repassa `isDark` para o header.

### Background

O background animado e controlado por `FinisherBackgroundService`:

- Localiza o host `.finisher-header`.
- Remove canvas antigo antes de recriar o efeito.
- Aplica configuracoes diferentes para tema claro e escuro.
- E reiniciado quando o tema muda.

### Modais e scroll

A pagina bloqueia o scroll do body ao abrir modais. A implementacao guarda a
posicao atual, fixa o body e restaura o scroll ao fechar, evitando saltos visuais
e mantendo a pagina no mesmo ponto.

## Estilos e responsividade

Os estilos combinam Tailwind com CSS global:

- Tailwind e usado diretamente nos templates.
- Variaveis CSS em `:root` e `.dark` controlam cores do tema.
- `src/styles.css` contem animacoes, helpers, modais, background e carrossel.
- O hero usa texto digitado por estado no componente, permitindo quebra natural
  de linha em telas menores.
- O carrossel de habilidades usa animacao linear infinita e pausa no hover.

## Como executar

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Acesse:

```text
http://localhost:4200/
```

No Windows, se o PowerShell bloquear `npm.ps1`, use:

```bash
npm.cmd start
```

## Scripts disponiveis

```bash
npm start
```

Inicia o servidor local com `ng serve`.

```bash
npm run build
```

Gera a build de producao em `dist/angular-portfolio`.

```bash
npm run watch
```

Executa build em modo watch para desenvolvimento.

```bash
npm test
```

Executa testes unitarios com Karma/Jasmine.

## Build

Para gerar a versao final:

```bash
npm run build
```

O Angular gera os arquivos otimizados na pasta:

```text
dist/angular-portfolio
```

## Como evoluir o projeto

Sugestoes de evolucao mantendo a arquitetura atual:

- Criar um servico ou adapter para buscar projetos de uma API no futuro.
- Separar dados longos de projetos em arquivos por projeto, caso o arquivo
  `projects.data.ts` cresca muito.
- Adicionar testes para filtros, modais e servicos.
- Criar uma estrategia de SEO com metatags por secao ou pagina.
- Adicionar testes visuais para responsividade do hero, modais e carrossel.
