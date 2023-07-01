<template>
  <div class="markdown-body"><render /></div>
</template>
<script setup lang="ts">
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import { markedEmoji } from 'marked-emoji';
import hljs from 'highlight.js';
import '@/assets/css/bbs/markdown.css';
import 'highlight.js/styles/github-dark.css';
import type { marked as markedTypes } from 'marked';
import textAlign from '@/utils/marked/textAlign';
import color from '@/utils/marked/color';
import emojis from '@/constants/emojis.json';
import { EmoteList } from '@/types/Emotes';

const props = defineProps<{ src: string }>();

const HOSTS = ['localhost:3000', 'chimboz.fr', 'chimboz-dev.vercel.app'];
const ALLOWED_URI = ['http', 'https', 'mailto'];
const ALLOWED_IMAGES = ['i.imgur.com', 'image.noelshack.com', ...HOSTS];
const youtube =
  /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gi;
const EMOJIS = {
  ...EmoteList.reduce(
    (a, emote) => ({ ...a, [emote]: { url: `/emoticon/${emote}.svg` } }),
    {}
  ),
  ...Object.keys(emojis).reduce(
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

function nodeRender(node: markedTypes.Token) {
  switch (node.type) {
    case 'hr':
      return h('hr', node.raw);
    case 'br':
      return h('br');
    case 'blockquote':
      return h(
        'blockquote',
        node.tokens.map((child: markedTypes.Token) => nodeRender(child))
      );
    case 'code':
      return h('pre', h('code', node.text));
    case 'strong':
      return h(
        'strong',
        node.tokens.map((child: markedTypes.Token) => nodeRender(child))
      );
    case 'em':
      return h(
        'em',
        node.tokens.map((child: markedTypes.Token) => nodeRender(child))
      );
    case 'del':
      return h(
        'del',
        node.tokens.map((child: markedTypes.Token) => nodeRender(child))
      );
    case 'table':
      return h('table', [
        h(
          'thead',
          h(
            'tr',
            node.header.map((child) =>
              h(
                'th',
                child.tokens.map((th) => nodeRender(th))
              )
            )
          )
        ),
        h(
          'tbody',
          node.rows.map((tr) =>
            h(
              'tr',
              tr.map((td) =>
                h(
                  'td',
                  td.tokens.map((content) => nodeRender(content))
                )
              )
            )
          )
        ),
      ]);
    case 'link':
      return h(
        'a',
        { href: node.href, title: node.title },
        node.tokens.map((child: markedTypes.Token) => nodeRender(child))
      );
    case 'space':
      return;
    case 'heading':
      return h(
        `h${node.depth}`,
        node.tokens.map((child: markedTypes.Token) => nodeRender(child))
      );
    case 'list':
      return h(
        node.ordered ? 'ol' : 'ul',
        node.items.map((child: markedTypes.Token) => nodeRender(child))
      );
    case 'list_item':
      return h(
        'li',
        node.tokens.map((child: markedTypes.Token) => nodeRender(child))
      );
    case 'paragraph':
      return h(
        'p',
        node.tokens.map((child: markedTypes.Token) => nodeRender(child))
      );
    case 'def':
      return h('a', { href: node.href, title: node.title }, node.raw);
    case 'image':
      return h('img', { src: node.href, alt: node.title });
    case 'codespan':
      return h('code', node.raw.slice(1, -1));
    case 'emoji':
      return node.unicode
        ? node.emoji
        : h('img', { src: node.emoji, alt: node.name });
    case 'color':
      return h(
        'i',
        { style: { color: node.color } },
        node.tokens.map((child: markedTypes.Token) => nodeRender(child))
      );
    case 'escape':
      return node.text;
    case 'html':
    case 'text':
    default:
      return node.raw;
  }
}

function render() {
  const tokens = marked.lexer(props.src);
  console.log(ALLOWED_IMAGES, ALLOWED_URI, youtube);
  return tokens.map((node) => nodeRender(node));
}
</script>
