import { marked } from "marked";

export const center = {
  name: 'center',
  level: 'block',
  start(src) {
    return src.match(/<center>/);
  },
  tokenizer(src, tokens) {
    const rule = /^<center>([\S\s]*)<\/center>/;
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
  renderer(token) {
    return `<p style="text-align:center">${this.parser.parseInline(
      token.tokens
    )}</p>\n`;
  },
}  as marked.MarkedExtension;

export const right = {
  name: 'right',
  level: 'block',
  start(src) {
    return src.match(/<right>/);
  },
  tokenizer(src, tokens) {
    const rule = /^<right>([\S\s]*)<\/right>/;
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
    return `<p style="text-align:right">${this.parser.parseInline(
      token.tokens
    )}</p>\n`;
  },
} as marked.MarkedExtension;
