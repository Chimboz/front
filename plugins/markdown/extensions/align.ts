import type { TokenizerExtension } from 'marked';

const align: TokenizerExtension = {
  name: 'align',
  level: 'inline',
  start(this, src) {
    return src.match(/^{(left|center|right|justify)}/)?.index;
  },
  tokenizer(src) {
    const match = /^{(left|center|right|justify)}([\S\s]*?)(\n\n|$)/.exec(src);
    if (match) {
      return {
        type: 'align',
        raw: match[0],
        text: match[2],
        align: match[1],
        tokens: this.lexer.blockTokens(match[2]),
      };
    }
  },
};

export default {
  extensions: [align],
};
