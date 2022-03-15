import { marked } from "marked";
import DOMPurify from "dompurify";
import katex from "katex/dist/katex.mjs";
import hljs from "highlight.js";

const allowed_uri = ["http", "https"];
const allowed_images = ["i.imgur.com", "image.noelshack.com", "chimboz.fr"];
const youtube =
  /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gi;
const allowed_properties = [
  "color",
  "top",
  "margin-left",
  "margin-right",
  "top",
  "height",
];
const allow_css_functions = true;
const allowed_tags = [
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
  "path",
  "u",
];
const allowed_attr = [
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
  "preserveAspectRatio",
];

const markedRender = function (string) {
  const renderer = new marked.Renderer();

  const rendererCodespan = renderer.codespan;
  renderer.codespan = function (text) {
    const math = mathsExpression(text);
    if (math) return math;

    return rendererCodespan(text);
  };

  // KaTeX
  function mathsExpression(expr) {
    let render = "Invalid LaTeX";
    if (expr.match(/^\$\$[\s\S]*\$\$$/)) {
      expr = expr.substr(2, expr.length - 4);
      try {
        render = katex.renderToString(expr, { displayMode: true, maxSize: 2 });
      } catch {
        console.warn("Incorrect LaTeX");
      }
      return render;
    } else if (expr.match(/^\$[\s\S]*\$$/)) {
      expr = expr.substr(1, expr.length - 2);
      try {
        render = katex.renderToString(expr, { displayMode: false, maxSize: 2 });
      } catch {
        console.warn("Incorrect LaTeX");
      }
      return render;
    }
  }

  // Custom emotes
  string = string.replace(
    /(:(\w)+:)/g,
    (match) =>
      `![${match.substring(1, match.length - 1)}](/emoticon/${match.substring(
        1,
        match.length - 1
      )}.svg)`
  );

  // marked options
  marked.setOptions({
    renderer: renderer,
    highlight: (code, lang) => {
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
    xhtml: false,
  });

  return marked(string);
};

const dompurifyRender = function (string) {
  // Allowed URI schemes
  var regex_uri = RegExp("^(" + allowed_uri.join("|") + "):", "gim");

  /**
   *  Take CSS property-value pairs and validate against allow-list,
   *  then add the styles to an array of property-value pairs
   */
  function validateStyles(output, styles) {
    // Validate regular CSS properties
    for (var prop in styles) {
      if (typeof styles[prop] === "string") {
        if (styles[prop] && allowed_properties.indexOf(prop) > -1) {
          if (allow_css_functions || !/\w+\(/.test(styles[prop])) {
            output.push(prop + ":" + styles[prop] + ";");
          }
        }
      }
    }
  }

  /**
   * Take CSS rules and analyze them, create string wrapper to
   * apply them to the DOM later on. Note that only selector rules
   * are supported right now
   */
  function addCSSRules(output, cssRules) {
    for (var index = cssRules.length - 1; index >= 0; index--) {
      var rule = cssRules[index];
      // check for rules with selector
      if (rule.type == 1 && rule.selectorText) {
        output.push(rule.selectorText + "{");
        if (rule.style) {
          validateStyles(output, rule.style);
        }
        output.push("}");
      }
    }
  }

  // Add a hook to enforce CSS element sanitization
  DOMPurify.addHook("uponSanitizeElement", function (node, data) {
    if (data.tagName === "style") {
      var output = [];
      addCSSRules(output, node.sheet.cssRules);
      node.textContent = output.join("\n");
    }
  });

  // Add a hook to enforce CSS attribute sanitization
  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    var anchor;
    // Sanitizing anchors
    if (node.hasAttribute("href")) {
      anchor = document.createElement("a");
      anchor.href = node.getAttribute("href");
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noreferrer noopener nofollow");
      if (anchor.protocol && !anchor.protocol.match(regex_uri)) {
        node.removeAttribute("href");
      }
    }

    // Whitelist images
    if (node.hasAttribute("src")) {
      anchor = document.createElement("a");
      anchor.href = node.getAttribute("src");
      if (anchor.hostname && !allowed_images.includes(anchor.hostname)) {
        node.removeAttribute("src");
      }
    }

    // Custom embeds

    // Sanitizing CSS
    // Nasty hack to fix baseURI + CSS problems in Chrome
    if (!node.ownerDocument.baseURI) {
      var base = document.createElement("base");
      base.href = document.baseURI;
      node.ownerDocument.head.appendChild(base);
    }
    // Check all style attribute values and validate them
    if (node.hasAttribute("style")) {
      var output = [];
      validateStyles(output, node.style);
      // re-add styles in case any are left
      if (output.length) {
        node.setAttribute("style", output.join(""));
      } else {
        node.removeAttribute("style");
      }
    }
  });

  return DOMPurify.sanitize(string, {
    ALLOWED_TAGS: allowed_tags,
    ALLOWED_ATTR: allowed_attr,
  });
};

const messageRender = function (string) {
  const result = dompurifyRender(markedRender(string));

  // Custom embeds
  var DOM = document.createElement("div");
  DOM.innerHTML = result;
  for (let el of DOM.querySelectorAll("a")) {
    if (el.href.match(youtube)) {
      var iframe = document.createElement("iframe");
      iframe.setAttribute(
        "src",
        el
          .getAttribute("href")
          .replace(youtube, `https://youtube.com/embed/$5$6`)
      );
      iframe.setAttribute("allowfullscreen", true);
      iframe.setAttribute("title", "Youtube Video");
      el.parentNode.replaceChild(iframe, el);
    }
  }

  return DOM.innerHTML;
};

export default messageRender;
