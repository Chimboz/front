import type { TokenizerExtension } from 'marked';

const spoiler: TokenizerExtension = {
  name: 'spoiler',
  level: 'inline',
  start(this, src) {
    return src.match(/\|\|(.*?)\|\|/)?.index;
  },
  tokenizer(src) {
    const match = /^\|\|(.*?)\|\|/.exec(src);
    if (match) {
      return {
        type: 'spoiler',
        raw: match[0],
        text: match[1],
        tokens: this.lexer.inline(match[1]),
      };
    }
  },
};

export default {
  extensions: [spoiler],
};
