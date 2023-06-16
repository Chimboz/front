/* eslint-disable no-irregular-whitespace */
import { marked } from 'marked';

const center: marked.TokenizerAndRendererExtension = {
  name: 'center',
  level: 'block',
  start(this, src) {
    return src.match(/<​center>/)?.index;
  },
  tokenizer(src) {
    const rule = /^<​center>(.*?)<​\/center>/;
    const match = rule.exec(src);
    if (match) {
      const token = {
        type: 'center',
        raw: match[0],
        text: match[1],
        tokens: [],
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  },
  renderer(this, token) {
    return `<p class="center">${this.parser.parseInline(token.tokens!)}</p>\n`;
  },
};

const right: marked.TokenizerAndRendererExtension = {
  name: 'right',
  level: 'block',
  start(this, src) {
    return src.match(/<​right>/)?.index;
  },
  tokenizer(src) {
    const rule = /^<​right>(.*?)<​\/right>/;
    const match = rule.exec(src);
    if (match) {
      const token = {
        type: 'right',
        raw: match[0],
        text: match[1],
        tokens: [],
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  },
  renderer(token) {
    return `<p class="right">${this.parser.parseInline(token.tokens!)}</p>\n`;
  },
};

const extensions: marked.TokenizerAndRendererExtension[] = [center, right];

export default <marked.MarkedExtension>{
  extensions,
};
