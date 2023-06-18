import SimpleMarkdown, { type ParserRules } from '@khanacademy/simple-markdown';

const rules: typeof SimpleMarkdown.defaultRules = {
  ...SimpleMarkdown.defaultRules,
  paragraph: {
    ...SimpleMarkdown.defaultRules.paragraph,
    html: function (node, output, state) {
      return SimpleMarkdown.htmlTag('p', output(node.content, state));
    },
  },
  br: {
    ...SimpleMarkdown.defaultRules.br,
    match: SimpleMarkdown.anyScopeRegex(/^\n/),
  },
};

const parser = SimpleMarkdown.parserFor(rules as unknown as ParserRules);
const htmlOutput = SimpleMarkdown.outputFor(rules, 'html');

export default defineNuxtPlugin(() => {
  return {
    provide: {
      md: (source: string) => htmlOutput(parser(source)),
    },
  };
});
