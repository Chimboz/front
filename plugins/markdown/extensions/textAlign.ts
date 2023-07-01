/* eslint-disable no-irregular-whitespace */
import { marked } from 'marked';

const center: marked.TokenizerExtension = {
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
};

const right: marked.TokenizerExtension = {
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
};

const extensions: marked.TokenizerExtension[] = [center, right];

export default <marked.MarkedExtension>{
  extensions,
};
