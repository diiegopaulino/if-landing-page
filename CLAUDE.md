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

Site de página única (`index.html`) com quatro arquivos principais:

- **`index.html`** — toda a estrutura HTML em uma única página com âncoras de navegação: `#sobre`, `#projetos`, `#bolsas`, `#parceiros`, `#voluntario`
- **`style.css`** — todos os estilos em arquivo único; nenhum pré-processador
- **`script.js`** — quatro comportamentos: scroll da navbar, animação de contadores (IntersectionObserver), menu hambúrguer mobile e handler do formulário de voluntariado
- **`DESIGN.md`** — especificação do sistema de design no formato [design.md](https://github.com/google-labs-code/design.md) do Google Labs; documenta tokens de cores, tipografia, espaçamento, border-radius e componentes em YAML frontmatter + prosa explicativa

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

Único breakpoint em `@media (max-width: 900px)`. Abaixo dele: grades colapsam para 1 coluna, o menu de navegação (`nav ul`) é ocultado e substituído pelo ícone hambúrguer (`.hamburger`), que exibe um menu dropdown vertical ao ser clicado.

### Animação de contadores

Os elementos `.impact-number` com atributo `data-target` são animados pelo `animateCounters()` em `script.js` quando a `.impact-bar` entra em viewport (IntersectionObserver, `threshold: 0.5`). Para adicionar novos contadores, basta incluir o atributo `data-target="<número>"` no elemento.

## Repositório e versionamento

O projeto está publicado em `https://github.com/diiegopaulino/if-landing-page`. **Toda alteração feita no código deve ser commitada e enviada ao repositório remoto** com `git push origin main`.

## Assets

Todos em `assets/` — imagens JPG/PNG/WebP e dois vídeos MP4 (`INSTITUTO_FRANCISCO.mp4`, `video-hero-bg.mp4`). Logos de parceiros em `assets/parceiros/`.
