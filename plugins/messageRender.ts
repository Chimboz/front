import MarkdownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';
import align from 'markdown-it-align';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

const md = new MarkdownIt({
  breaks: true,
  linkify: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  },
});
md.use(emoji).use(align);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      md,
    },
  };
});
