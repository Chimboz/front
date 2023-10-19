import type { TokenizerExtension } from 'marked';

const item: TokenizerExtension = {
  name: 'item',
  level: 'inline',
  start(this, src) {
    return src.match(/#(!?)([\d]+)/)?.index;
  },
  tokenizer(src) {
    const match = /^#(!?)([\d]+)/.exec(src);
    if (match) {
      return {
        type: 'item',
        raw: match[0],
        item: match[2],
        exact: !!match[1],
      };
    }
  },
};

export default {
  extensions: [item],
};
