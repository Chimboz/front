import { marked } from 'marked';

const color: marked.TokenizerExtension = {
  name: 'color',
  level: 'inline',
  start(this, src) {
    return src.match(/{color (#[A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})}/)?.index;
  },
  tokenizer(src) {
    const rule = /^{color (#[A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})}\((.*?)\)/;
    const match = rule.exec(src);
    if (match) {
      const token = {
        type: 'color',
        raw: match[0],
        text: match[2],
        color: match[1],
        tokens: [],
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  },
};

const extensions: marked.TokenizerExtension[] = [color];

export default <marked.MarkedExtension>{
  extensions,
};
