import type { TokenizerExtension } from 'marked';

const mention: TokenizerExtension = {
  name: 'mention',
  level: 'inline',
  start(this, src) {
    return src.match(/@([\w._@-]{2,15})/)?.index;
  },
  tokenizer(src) {
    const match = /^@([\w._@-]{2,15})/.exec(src);
    if (match) {
      return {
        type: 'mention',
        raw: match[0],
        user: match[1],
      };
    }
  },
};

export default {
  extensions: [mention],
};
