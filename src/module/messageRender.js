import Marked from "marked";
import DOMPurify from "dompurify";
import katex from "katex/dist/katex.mjs";

const messageRender = function(string) {
  const renderer = new Marked.Renderer();
  const linkRenderer = renderer.link;

  // Target _blank on links
  renderer.link = (href, title, text) => {
    const localLink = href.startsWith(
      `${location.protocol}//${location.hostname}`
    );
    const html = linkRenderer.call(renderer, href, title, text);
    return localLink
      ? html
      : html.replace(
          /^<a /,
          `<a target="_blank" rel="noreferrer noopener nofollow" `
        );
  };

  // KaTeX
  function mathsExpression(expr) {
    if (expr.match(/^\$\$[\s\S]*\$\$$/)) {
      expr = expr.substr(2, expr.length - 4);
      return katex.renderToString(expr, { displayMode: true });
    } else if (expr.match(/^\$[\s\S]*\$$/)) {
      expr = expr.substr(1, expr.length - 2);
      return katex.renderToString(expr, { displayMode: false });
    }
  }

  const rendererCodespan = renderer.codespan;
  renderer.codespan = function(text) {
    const math = mathsExpression(text);

    if (math) {
      return math;
    }

    return rendererCodespan(text);
  };

  // Custom emotes
  string = string.replace(
    /(:(\w)+:)/g,
    (match) =>
      `![${match.substring(1, match.length - 1)}](/emoticon/${match.substring(
        1,
        match.length - 1
      )}.svg)`
  );

  // Marked options
  Marked.setOptions({
    renderer: renderer,
    highlight: function(code, lang) {
      const hljs = require("highlight.js");
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });

  // DOMPurify
  return DOMPurify.sanitize(Marked(string), {
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h6",
      "p",
      "span",
      "ul",
      "ol",
      "li",
      "blockquote",
      "pre",
      "code",
      "hr",
      "table",
      "br",
      "kbd",
      "strong",
      "em",
      "s",
      "a",
      "input",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "img",
      "svg",
      "path"
    ],
    ALLOWED_ATTR: [
      "style",
      "class",
      "alt",
      "rel",
      "type",
      "disabled",
      "checked",
      "src",
      "href",
      "target",
      "viewBox",
      "d",
      "xmlns",
      "preserveAspectRatio"
    ]
  });
};

export default messageRender;
