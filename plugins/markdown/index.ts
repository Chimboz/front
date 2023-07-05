import { marked, type marked as markedTypes } from 'marked';
import hljs from 'highlight.js';
import { markedHighlight } from 'marked-highlight';
import { markedEmoji } from 'marked-emoji';
import textAlign from './extensions/textAlign';
import color from './extensions/color';
import emojis from '@/constants/emojis.json';
import { EmoteList } from '@/types/Emotes';

const ALLOWED_IMAGES = ['i.imgur.com', 'image.noelshack.com'];
// const youtube = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gi;

const EMOJIS = {
  ...EmoteList.reduce(
    (a, emote) => ({ ...a, [emote]: { url: `/emoticon/${emote}.svg` } }),
    {}
  ),
  ...(Object.keys(emojis) as Array<keyof typeof emojis>).reduce(
    (a, emote) => ({ ...a, [emote]: { char: emojis[emote] } }),
    {}
  ),
};

marked.use(
  {
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    headerIds: false,
    mangle: false,
    tokenizer: {
      // @ts-expect-error https://github.com/markedjs/marked/issues/420#issuecomment-1210799497
      html() {},
    },
  },
  markedHighlight({
    langPrefix: '',
    highlight: (code: string, lang: string) => {
      if (lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      }
      return hljs.highlightAuto(code).value;
    },
  }),
  markedEmoji({
    emojis: EMOJIS,
  }),
  textAlign,
  color
);

type EmojiToken = {
  type: 'emoji';
  raw: string;
  name: string;
  emoji: string;
  unicode: boolean;
};
type ColorToken = {
  type: 'color';
  raw: string;
  text: string;
  color: string;
  tokens: (markedTypes.Token | EmojiToken | ColorToken)[];
};

type Token = markedTypes.Token | EmojiToken | ColorToken;

function nodeRender(node: Token): VNode | undefined | string {
  switch (node.type) {
    case 'hr':
      return h('hr', node.raw);
    case 'br':
      return h('br');
    case 'blockquote':
      return h(
        'blockquote',
        node.tokens.map((child) => nodeRender(child))
      );
    case 'code':
      return h('pre', h('code', node.text));
    case 'strong':
      return h(
        'strong',
        node.tokens.map((child) => nodeRender(child))
      );
    case 'em':
      return h(
        'em',
        node.tokens.map((child) => nodeRender(child))
      );
    case 'del':
      return h(
        'del',
        node.tokens.map((child) => nodeRender(child))
      );
    case 'table':
      return h('table', [
        h(
          'thead',
          h(
            'tr',
            node.header.map((th, index) =>
              h(
                'th',
                { style: { textAlign: node.align[index] } },
                th.tokens.map((child) => nodeRender(child))
              )
            )
          )
        ),
        h(
          'tbody',
          node.rows.map((tr) =>
            h(
              'tr',
              tr.map((td, index) =>
                h(
                  'td',
                  { style: { textAlign: node.align[index] } },
                  td.tokens.map((content) => nodeRender(content))
                )
              )
            )
          )
        ),
      ]);
    case 'link':
      return h(resolveComponent('MarkdownLink'), { node });
    case 'space':
      return;
    case 'heading':
      return h(
        `h${node.depth}`,
        node.tokens.map((child) => nodeRender(child))
      );
    case 'list':
      return h(
        node.ordered ? 'ol' : 'ul',
        { start: node.start },
        node.items.map((child) => nodeRender(child))
      );
    case 'list_item':
      return h(
        'li',
        node.tokens.map((child) => nodeRender(child))
      );
    case 'paragraph':
      return h(
        'p',
        node.tokens.map((child) => nodeRender(child))
      );
    case 'def':
      return h('a', { href: node.href, title: node.title }, node.raw);
    case 'image':
      try {
        return node.href && ALLOWED_IMAGES.includes(new URL(node.href).host)
          ? h('img', { src: node.href, alt: node.text, title: node.text })
          : node.raw;
      } catch (e) {
        return node.raw;
      }
    case 'codespan':
      return h('code', node.raw.slice(1, -1));
    case 'emoji':
      return node.unicode
        ? node.emoji
        : h('img', { src: node.emoji, alt: node.raw });
    case 'color':
      return h(
        'i',
        { style: { color: node.color } },
        node.tokens.map((child) => nodeRender(child))
      );
    case 'escape':
      return node.text;
    case 'text':
      return 'tokens' in node && node.tokens
        ? h(
            'i',
            node.tokens.map((child) => nodeRender(child))
          )
        : node.raw;
    default:
      return node.raw;
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      md: (src: string) => marked.lexer(src).map((node) => nodeRender(node)),
      nodeRender,
    },
  };
});
