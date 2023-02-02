module.exports = {
  vueFiles: './@(components|pages)/**/*.vue',
  languageFiles: './locales/*.json',
  exclude: ['rules.rule', 'admin.modal', 'group.leader', 'group.status'],
  output: false,
  add: false,
  remove: false,
  ci: false,
  separator: '.',
  noEmptyTranslation: ''
}
