# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Landing page estática do **Instituto Francisco** — ONG sediada na Gávea, Rio de Janeiro, focada em fraternidade e desenvolvimento comunitário no Vale da Gávea.

## Como executar

Não há build tools, bundler ou dependências npm. Abra `index.html` diretamente no navegador ou use um servidor local:

```bash
# Python (qualquer máquina com Python instalado)
python -m http.server 8080

# Node.js (via npx)
npx serve .
```

## Arquitetura

Site de página única (`index.html`) com três arquivos principais:

- **`index.html`** — toda a estrutura HTML em uma única página com âncoras de navegação: `#sobre`, `#projetos`, `#bolsas`, `#parceiros`, `#voluntario`
- **`style.css`** — todos os estilos em arquivo único; nenhum pré-processador
- **`script.js`** — três comportamentos: scroll da navbar, animação de contadores (IntersectionObserver) e handler do formulário de voluntariado

### Sistema de cores (CSS custom properties em `:root`)

| Variável | Uso |
|---|---|
| `--blue` (`#1B35D4`) | Cor principal — CTAs, destaques, bordas |
| `--blue-dark` (`#0F1B6B`) | Seção Bolsas e Footer |
| `--blue-light` (`#E8EDFF`) | Fundo de tags e pillars |
| `--gold` (`#E8C030`) | Acento em hero e seção Bolsas |
| `--off-white` (`#F8F9FF`) | Fundo alternado de seções |
| `--text-muted` (`#5A5A7A`) | Textos secundários |

### Tipografia

- **Fraunces** (serif) — títulos (`section-title`, `hero h1`, `card-body h3`)
- **DM Sans** (sans-serif) — corpo de texto; carregadas via Google Fonts no `<head>`

### Responsividade

Único breakpoint em `@media (max-width: 900px)`. Abaixo dele: grades colapsam para 1 coluna, menu de navegação some (`nav ul { display: none }`).

### Animação de contadores

Os elementos `.impact-number` com atributo `data-target` são animados pelo `animateCounters()` em `script.js` quando a `.impact-bar` entra em viewport (IntersectionObserver, `threshold: 0.5`). Para adicionar novos contadores, basta incluir o atributo `data-target="<número>"` no elemento.

## Assets

Todos em `assets/` — imagens JPG/PNG/WebP e dois vídeos MP4 (`INSTITUTO_FRANCISCO.mp4`, `video-hero-bg.mp4`). Logos de parceiros em `assets/parceiros/`.
