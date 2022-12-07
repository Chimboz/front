<p align="center">
  <a href="https://chimboz.fr"><img alt="Chimboz" src="src/assets/img/logo.svg" /></a><br>
  <a href="https://chimbozfront.web.app/"><img alt="Deployment to Firebase" src="https://img.shields.io/github/workflow/status/chimboz/chimbozfront/Deploy%20to%20Firebase%20Hosting%20on%20merge?label=preview&logo=firebase"></a><br>
  <a href="http://www.cecill.info/licences/Licence_CeCILL_V2.1-en.html" target="_blank"><img alt="License CeCILL v2.1" src="https://img.shields.io/badge/license-CeCILL%20v2.1-informational" /></a>
  <img alt="Package version" src="https://img.shields.io/github/package-json/v/Chimboz/ChimbozFront" />
  <a href="https://github.com/Chimboz/ChimbozFront/issues"><img alt="Number of issues" src="https://img.shields.io/github/issues/Chimboz/ChimbozFront" /></a>
</p>

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Dependencies

- axios
- date-fns
- dompurify
- highlight.js
- katex
- marked
- mitt
- v-lazy-image
- vue-i18n
- vue-meta
- vue-router
- vuex

# Useful tools

## VS Extensions

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) formatter  
[i18n ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally): a **<ins>must-have</ins>** if you're doing i18n

## SVG

[SVG Animation editor](http://anigen.org/versions/0_8_1/)  
[svgasm](https://github.com/tomkwok/svgasm)
[SVG Path editor](https://yqnn.github.io/svg-path-editor/)  
[Inkscape](https://inkscape.org/)

## Vue doc

[Vue](https://v3.vuejs.org/)  
[Vue Router](https://next.router.vuejs.org/)  
[Vuex](https://next.vuex.vuejs.org/)  
[Vue Meta](https://vue-meta.nuxtjs.org/)
