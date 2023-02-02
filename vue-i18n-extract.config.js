module.exports = {
  vueFiles: './@(components|pages)/**/*.vue',
  languageFiles: './locales/*.json',
  exclude: ['rules.rule', 'admin.modal', 'group.leader'],
  output: false,
  add: false,
  remove: false,
  ci: false,
  separator: '.',
  noEmptyTranslation: ''
}
