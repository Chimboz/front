import type { TokenizerExtension } from 'marked';

const color: TokenizerExtension = {
  name: 'color',
  level: 'inline',
  start(this, src) {
    return src.match(
      /{color (#[A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})}{(.*?)\}/
    )?.index;
  },
  tokenizer(src) {
    const match =
      /^{color (#[A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})}{(.*?)\}/.exec(
        src
      );
    if (match) {
      return {
        type: 'color',
        raw: match[0],
        text: match[2],
        color: match[1],
        tokens: this.lexer.inline(match[2]),
      };
    }
  },
};

export default {
  extensions: [color],
};
