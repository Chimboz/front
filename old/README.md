<p align="center">
  <a href="https://chimboz.fr"><img alt="Chimboz" src="src/asset/img/logo.svg" /></a><br>
  <a href="https://chimbozfront.web.app/"><img alt="Deployment to Firebase" src="https://img.shields.io/github/workflow/status/chimboz/chimbozfront/Deploy%20to%20Firebase%20Hosting%20on%20merge?label=preview&logo=firebase"></a><br>
  <a href="http://www.cecill.info/licences/Licence_CeCILL_V2.1-en.html" target="_blank"><img alt="License CeCILL v2.1" src="https://img.shields.io/badge/license-CeCILL%20v2.1-informational" /></a>
  <img alt="Package version" src="https://img.shields.io/github/package-json/v/Chimboz/ChimbozFront" />
  <a href="https://github.com/Chimboz/ChimbozFront/issues"><img alt="Number of issues" src="https://img.shields.io/github/issues/Chimboz/ChimbozFront" /></a>
</p>

# Conventions

Folders' name is singular (excepted `locales` because vue-i18n hardcoded it).  
Routes are plural if they have subroutes (`/games`).  
Use snake\_case for files : replace whitespaces " " with **underscores** "\_" in filenames.  
Vue files (`*.vue`) begin with an uppercase letter and use PascalCase.

# Branches

One branch per feature.  
Fork and PR are appreciated.

# Documentation

To generate doc, you need vuese: `npm i -g @vuese/cli` then `npm run docgen`.

# Project setup

```
npm install
```

**Compiles and hot-reloads for development**

```
npm run serve
```

**Compiles and minifies for production**

```
npm run build
```

**Lints and fixes files**

```
npm run lint
```

**Customize configuration**  
See [Configuration Reference](https://cli.vuejs.org/config/).

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
