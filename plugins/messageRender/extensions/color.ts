/* eslint-disable no-irregular-whitespace */
import { marked } from 'marked';

const color: marked.TokenizerAndRendererExtension = {
  name: 'color',
  level: 'inline',
  start(this, src) {
    return src.match(/<​color>/)?.index;
  },
  tokenizer(src) {
    const rule = /^<​color #([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})>(.*?)<​\/color>/;
    const match = rule.exec(src);
    if (match) {
      const token = {
        type: 'color',
        raw: match[0],
        text: match[2],
        color: match[1],
        tokens: [],
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  },
  renderer(this, token) {
    return `<i style="color: ${token.color}">${this.parser.parseInline(
      token.tokens!
    )}</i>\n`;
  },
};

const extensions: marked.TokenizerAndRendererExtension[] = [color];

export default <marked.MarkedExtension>{
  extensions,
};
