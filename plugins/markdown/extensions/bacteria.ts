import type { TokenizerExtension } from 'marked';

const bacteria: TokenizerExtension = {
  name: 'align',
  level: 'block',
  start(this, src) {
    return src.match(/^{bacteria( \d+)?}/)?.index;
  },
  tokenizer(src) {
    const match = /^{bacteria( \d+)?}([\S\s]*?)(\n\n|$)/.exec(src);
    if (match) {
      return {
        type: 'bacteria',
        raw: match[0],
        game: match[2],
        match: match[1],
      };
    }
  },
};

export default {
  extensions: [bacteria],
};
