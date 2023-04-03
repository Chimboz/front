import { marked } from 'marked';

const center: marked.TokenizerExtension | marked.RendererExtension = {
  name: 'center',
  level: 'block',
  start(this, src) {
    return src.match(/<center>/)?.index;
  },
  tokenizer(src) {
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
  renderer(this, token) {
    return `<p class="center">${this.parser.parseInline(token.tokens!)}</p>\n`;
  },
};

const right: marked.TokenizerExtension | marked.RendererExtension = {
  name: 'right',
  level: 'block',
  start(this, src) {
    return src.match(/<right>/)?.index;
  },
  tokenizer(src) {
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
    return `<p class="right">${this.parser.parseInline(token.tokens!)}</p>\n`;
  },
};

const extensions: (marked.TokenizerExtension | marked.RendererExtension)[] = [
  center,
  right,
];

export default <marked.MarkedExtension>{
  extensions,
};
