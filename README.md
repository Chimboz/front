<p align="center">
  <a href="https://chapatizretro.com"><img alt="Chapatiz Retro" src="src/asset/img/logo.svg" /></a><br>
  <a href="https://chzretro-front.web.app"><img alt="Deployment to Firebase" src="https://img.shields.io/github/workflow/status/tigriz/chzretro-front/Deploy%20to%20Firebase%20Hosting%20on%20merge?label=preview&logo=firebase"></a><br>
  <a href="http://www.gnu.org/licenses/gpl-3.0" target="_blank"><img alt="License GPL v3" src="https://img.shields.io/badge/license-GPL%20v3-blue.svg" /></a>
  <img alt="Package version" src="https://img.shields.io/github/package-json/v/tigriz/chzretro-front" />
  <a href="https://github.com/Tigriz/chzretro-front/actions/workflows/codeql-analysis.yml"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/tigriz/chzretro-front/CodeQL?label=quality"></a>
  <a href="https://github.com/Tigriz/chzretro-front/issues"><img alt="Number of issues" src="https://img.shields.io/github/issues/Tigriz/chzretro-front" /></a>
</p>

# Contributions

Please see [project kanban](https://github.com/Tigriz/chzretro-front/projects/1), to-do tasks.

# Conventions

Folders' name is singular (excepted `locales` because vue-i18n hardcoded it).  
Routes are plural if they have subroutes (`/games`).  
Use snake_case for files : replace whitespaces " " with **underscores "_"** in filenames.  
Vue files (`*.vue`) begin with an uppercase letter and use PascalCase.

# Branches

One branch per feature.
Fork and PR are appreciated.

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
- vue-router
- vuex
- vue-i18n
- axios
- date-fns
- marked
- mitt

# Useful tools
## VS Extensions
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) formatter  
[i18n ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally): a **<ins>must-have</ins>**  if you're doing i18n

## SVG
[SVG Animation editor](http://anigen.org/versions/0_8_1/)  
[SVG Path editor](https://yqnn.github.io/svg-path-editor/)  
[Inkscape](https://inkscape.org/)  

## Vue doc
[Vue](https://v3.vuejs.org/)  
[Router](https://next.router.vuejs.org/)  
[Vuex](https://next.vuex.vuejs.org/)  
