---
version: "alpha"
name: "Instituto Francisco"
description: "Sistema de design da landing page do Instituto Francisco — ONG de fraternidade e desenvolvimento comunitário no Vale da Gávea, Rio de Janeiro."

colors:
  primary: "#1B35D4"
  primary-dark: "#0F1B6B"
  primary-light: "#E8EDFF"
  accent: "#E8C030"
  surface: "#FFFFFF"
  surface-alt: "#F8F9FF"
  text: "#1A1A2E"
  text-muted: "#5A5A7A"

typography:
  display:
    fontFamily: "Fraunces"
    fontSize: "clamp(2.8rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.08
  headline:
    fontFamily: "Fraunces"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
  card-title:
    fontFamily: "Fraunces"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.3
  impact-number:
    fontFamily: "Fraunces"
    fontSize: "clamp(3rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "DM Sans"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  body-lead:
    fontFamily: "DM Sans"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "DM Sans"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.12em"
  button:
    fontFamily: "DM Sans"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
  section-v: "6rem"
  section-h: "5vw"

rounded:
  sm: "8px"
  md: "12px"
  lg: "50px"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "0.9rem 2rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: "0.9rem 2rem"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1.75rem"
  card-dark:
    backgroundColor: "rgba(255, 255, 255, 0.07)"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1.25rem 1.5rem"
  nav:
    backgroundColor: "rgba(255, 255, 255, 0.95)"
    height: "72px"
  tag:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0.45rem 1rem"
  form-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1rem"
  pillar:
    backgroundColor: "{colors.surface-alt}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  partner-logo:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    width: "180px"
    height: "90px"
    padding: "1.25rem"
---

## Overview

O Instituto Francisco é uma ONG localizada na Gávea, Rio de Janeiro, que atua no Vale da Gávea promovendo fraternidade e desenvolvimento comunitário. Sua linguagem visual deve comunicar **proximidade humana com seriedade institucional** — nunca corporativa, nunca fria.

O design combina a elegância atemporal de uma tipografia serif humanista com a clareza funcional de uma sans-serif moderna. A paleta une azul (propósito, confiança, profundidade) ao dourado (esperança, calor, destaque). O resultado deve evocar uma instituição enraizada na comunidade, comprometida com o longo prazo.

**Personalidade visual:** acolhedor, humano, comprometido, esperançoso, comunitário.

## Colors

A paleta tem dois eixos: **azul** (família primária) e **dourado** (acento).

- **primary** (`#1B35D4`) — azul vivo. Usado em CTAs, bordas de destaque, links e elementos interativos. É a cor da ação e do propósito.
- **primary-dark** (`#0F1B6B`) — azul muito escuro, quase noite. Reservado para fundos de seções de destaque (Impact Bar, Bolsas, Footer), onde o conteúdo em branco ganha máximo contraste.
- **primary-light** (`#E8EDFF`) — azul muito claro, quase branco. Usado como fundo de tags e elements de destaque suave, sem competir com conteúdo.
- **accent** (`#E8C030`) — dourado. Usado com parcimônia: eyebrows do hero, bordas de benefícios na seção escura, pequenos acentos. Nunca como cor de fundo de seções inteiras.
- **surface** (`#FFFFFF`) — branco puro para fundos de cards e formulários.
- **surface-alt** (`#F8F9FF`) — off-white levemente azulado. Cria ritmo visual entre seções ao alternar com o branco.
- **text** (`#1A1A2E`) — quase preto com tonalidade azulada. Garante harmonia com a paleta sem usar preto puro.
- **text-muted** (`#5A5A7A`) — cinza-violeta para textos secundários, leads, parágrafos de suporte.

Seções alternam entre `surface`, `surface-alt` e `primary-dark` para criar separação visual sem linhas divisórias explícitas.

## Typography

Duas famílias, duas funções distintas — e nunca invertidas.

**Fraunces** (serif display, variável) carrega a voz emocional do Instituto: títulos de seção, o h1 do hero e os números de impacto. É uma fonte com alma, associada a textos literários e humanistas, que comunica profundidade e permanência.

**DM Sans** (sans-serif, variável) carrega toda a comunicação funcional: parágrafos, labels, botões, campos de formulário, navegação. Sua neutralidade moderna complementa a expressividade da Fraunces sem disputar atenção.

A hierarquia tipográfica segue 5 níveis:
1. **display** — hero h1, responsivo com clamp
2. **headline** — títulos de seção (h2), também responsivos
3. **card-title** — h3 dentro de cards
4. **body-lead** — parágrafos de introdução de seção
5. **body** — texto corrente

Labels e eyebrows usam `letter-spacing: 0.12em` em maiúsculas para criar ritmo e sinalizar contexto antes dos títulos principais.

## Layout

Site de página única com scroll vertical. A estrutura é simples: uma coluna de seções em largura total, com conteúdo interno limitado a `max-width: 1100–1200px` centralizado.

**Breakpoint único:** `900px`. Abaixo dele, todas as grades colapsam para uma coluna e o menu de navegação é substituído por um hambúrguer.

**Espaçamento de seções:**
- Padding vertical: `{spacing.section-v}` (6rem)
- Padding horizontal: `{spacing.section-h}` (5vw — escala com o viewport)

**Grids recorrentes:**
- 2 colunas com imagem: seções Sobre, Bolsas e Voluntário
- 3 colunas de cards: seção Projetos
- 4 colunas métricas: Impact Bar (2 colunas em mobile)
- Grid assimétrico `2fr 1fr 1fr`: Galeria de fotos

O `gap` entre colunas é generoso (`3rem–5rem`) para respiração entre os blocos de conteúdo.

## Elevation & Depth

A profundidade é comunicada por sombras e transparências, sem bordas visíveis. Existem três níveis:

**Nível 1 — Sutil (cards em repouso):**
`box-shadow: 0 2px 16px rgba(27, 53, 212, 0.06)`
Cards de projetos, parceiros e pilares em estado estático.

**Nível 2 — Médio (hover e elementos focados):**
`box-shadow: 0 8px 32px rgba(27, 53, 212, 0.12)`
Ativado no `:hover` de cards e logos de parceiros, acompanhado de `transform: translateY(-4px)` para reforçar a elevação.

**Nível 3 — Pesado (elementos âncora):**
`box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4)`
Usado na imagem de destaque da seção Bolsas, onde o fundo escuro exige contraste dramático.

As sombras dos níveis 1 e 2 são baseadas em `{colors.primary}` (não preto), criando coerência com a paleta e evitando o aspecto "cinza" comum em sombras genéricas.

A navbar usa `backdrop-filter: blur(12px)` com fundo semi-transparente para criar separação do conteúdo durante o scroll sem bloquear completamente a visão do hero.

## Shapes

A linguagem de formas comunica **acolhimento** através do arredondamento.

- **`{rounded.md}` (12px)** — padrão para cards, imagens, containers de logos, campos de formulário. Suaviza sem parecer infantil.
- **`{rounded.sm}` (8px)** — versão mais contida para inputs e cards compactos na seção escura.
- **`{rounded.lg}` (50px)** — pílulas. Usado em botões e tags de valor. Transmite leveza e modernidade, diferenciando-se dos cards retangulares.

Imagens dentro de cards têm `border-radius: 12px 12px 0 0` (apenas topo) para fundir com o card sem criar borda dupla.

Nunca use ângulos retos (`border-radius: 0`) em elementos voltados para o usuário — exceto em elementos estruturais como seções de fundo.

## Components

### button-primary
Botão de ação principal. Fundo `{colors.primary}`, texto branco, forma de pílula (`{rounded.lg}`). Em hover: escurece para `#1429AA` e eleva com `translateY(-2px)`. Transição de 0.2s.

### button-outline
Variante fantasma para uso sobre fundos escuros (hero). Borda e texto brancos, fundo transparente. Em hover: borda fica totalmente opaca e fundo recebe `rgba(255,255,255,0.1)`.

### card
Container branco com `{rounded.md}` e sombra de nível 1. Imagem no topo (sem padding), corpo com `padding: 1.75rem`. Em hover: eleva para nível 2 com `translateY(-4px)` e imagem faz `scale(1.04)` suave.

### card-dark
Variante para fundos escuros (`{colors.primary-dark}`). Fundo `rgba(255,255,255,0.07)` com borda esquerda dourada de 3px (`{colors.accent}`). Tipografia em branco.

### pillar
Card de pilar de missão. Fundo `{colors.surface-alt}`, borda superior de 3px em `{colors.primary}`. Título em Fraunces com cor primária, parágrafo em `{colors.text-muted}`.

### nav
Barra de navegação fixa no topo. Altura 72px, fundo com blur. Contém logo, links de âncora e CTA "Seja voluntário" (usa `button-primary` em versão compacta com `padding: 0.5rem 1.25rem`).

### tag
Label de categoria ou valor. Fundo `{colors.primary-light}`, texto `{colors.primary}`, forma de pílula. Usado tanto em cards de projetos quanto nas tags de valores na seção Voluntário.

### form-input
Campos do formulário de voluntariado. Borda de 1.5px em `rgba(27,53,212,0.2)` em repouso, muda para `{colors.primary}` no focus. Inclui `<input>`, `<select>` e `<textarea>`.

### partner-logo
Container de logo de parceiro. 180×90px, fundo branco, `{rounded.md}`, borda sutil. Centraliza a imagem com flexbox. Em hover: eleva com sombra de nível 2.

## Do's and Don'ts

**Faça:**
- Use **Fraunces** para todos os títulos (h1, h2, h3) e números de impacto.
- Use **DM Sans** para todo o restante: parágrafos, labels, botões, navegação.
- Alterne fundos de seções entre `{colors.surface}`, `{colors.surface-alt}` e `{colors.primary-dark}` para criar ritmo visual.
- Use `{colors.accent}` apenas como detalhe — bordas, eyebrows no hero, pequenos acentos sobre fundo escuro.
- Mantenha sombras baseadas em `{colors.primary}` (não preto) para coerência cromática.
- Use `letter-spacing: 0.12em` em maiúsculas nos eyebrows de seção.

**Não faça:**
- Não use Fraunces em parágrafos ou labels — perde legibilidade e hierarquia.
- Não use `{colors.accent}` como cor de fundo de seções — é um acento, não uma cor estrutural.
- Não adicione bordas visíveis entre seções — a alternância de fundos é suficiente.
- Não use sombras pretas genéricas (`rgba(0,0,0,X)`) em cards — use a variante azulada.
- Não crie novos valores de border-radius fora de `{rounded.sm}`, `{rounded.md}` e `{rounded.lg}`.
- Não altere a fonte, peso ou tamanho dos botões — a consistência é parte da identidade de ação.
