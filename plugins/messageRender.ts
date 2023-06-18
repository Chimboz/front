import SimpleMarkdown, { type ParserRules } from '@khanacademy/simple-markdown';

const rules: typeof SimpleMarkdown.defaultRules = {
  ...SimpleMarkdown.defaultRules,
  paragraph: {
    ...SimpleMarkdown.defaultRules.paragraph,
    html: function (node, output, state) {
      return SimpleMarkdown.htmlTag('p', output(node.content, state));
    },
  },
  text: {
    ...SimpleMarkdown.defaultRules.text,
    match: SimpleMarkdown.anyScopeRegex(
      /^[\s\S]+?(?=[^0-9A-Za-z\s\u00C0-\uFFFF]|\n\n| {2,}\n|\n|\w+:\S|$)/
    ),
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
