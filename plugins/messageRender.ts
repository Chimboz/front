import { marked } from "marked";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "@/assets/css/bbs/markdown.css";
import "highlight.js/styles/github-dark.css";

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp

const ALLOWED_URI = ["http", "https"];
const ALLOWED_IMAGES = [
  "i.imgur.com",
  "image.noelshack.com",
  "localhost:3000",
];
const youtube =
  /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gi;
const ALLOWED_TAGS = [
  "p",
  "span",
  "hr",
  "br",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "ul",
  "ol",
  "li",
  "blockquote",
  "pre",
  "code",
  "kbd",
  "strong",
  "em",
  "s",
  "u",
  "i",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "a",
  "img",
];
const ALLOWED_ATTR = ["style", "class", "alt", "src", "href"];
const ALLOWED_PROPERTIES = ["color"];
const ALLOW_CSS_FUNCTIONS = true;
const ALLOWED_CLASS = "hljs-";

function markedRender(string: string) {
  // Custom emotes
  string = string.replace(
    /:[a-z]+:/g,
    (match) => `![${match.slice(1, -1)}](/emoticon/${match.slice(1, -1)}.svg)`
  );

  // Marked options
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang) return hljs.highlight(code, { language: lang }).value;
      return hljs.highlightAuto(code).value;
    },
    langPrefix: "",
    pedantic: false,
    gfm: true,
    breaks: true,
    headerIds: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });

  return marked(string);
}

function dompurifyRender(string: string) {
  // Allowed URI schemes
  const REGEX_URI = RegExp(`^(${ALLOWED_URI.join("|")}):`, "gim");

  /**
   *  Take CSS property-value pairs and validate against allow-list,
   *  then add the styles to an array of property-value pairs
   */
  function validateStyles(output: Array<string>, styles: any) {
    // Validate regular CSS properties
    Object.keys(styles).forEach((prop) => {
      if (typeof styles[prop] === "string") {
        if (styles[prop] && ALLOWED_PROPERTIES.indexOf(prop) > -1) {
          if (ALLOW_CSS_FUNCTIONS || !/\w+\(/.test(styles[prop])) {
            output.push(`${prop}:${styles[prop]};`);
          }
        }
      }
    });
  }

  // Add a hook to enforce CSS element sanitization
  DOMPurify.addHook("uponSanitizeElement", (node) => {
    const classes = node.classList;
    if (!classes) return;
    classes.forEach((name) => {
      if (!name.includes(ALLOWED_CLASS))
        (node as HTMLElement).classList.remove(name);
    });
    if (classes.length === 0) node.removeAttribute("class");
  });

  // Add a hook to enforce CSS attribute sanitization
  DOMPurify.addHook("afterSanitizeAttributes", (node) => {
    let anchor: HTMLAnchorElement;
    // Sanitizing anchors
    if (node.hasAttribute("href")) {
      anchor = document.createElement("a");
      anchor.href = node.getAttribute("href")!;
      if (anchor.hostname !== "localhost:3000") {
        node.setAttribute("target", "_blank");
        node.setAttribute("rel", "noreferrer noopener nofollow");
      }
      if (anchor.protocol && !anchor.protocol.match(REGEX_URI)) {
        node.removeAttribute("href");
      }
    }

    // Whitelist images
    if (node.hasAttribute("src")) {
      anchor = document.createElement("a");
      anchor.href = node.getAttribute("src")!;
      if (anchor.hostname && !ALLOWED_IMAGES.includes(anchor.hostname)) {
        node.removeAttribute("src");
      }
    }

    // Custom embeds

    // Sanitizing CSS
    // Nasty hack to fix baseURI + CSS problems in Chrome
    if (!node.ownerDocument.baseURI) {
      const base = document.createElement("base");
      base.href = document.baseURI;
      node.ownerDocument.head.appendChild(base);
    }
    // Check all style attribute values and validate them
    if (node.hasAttribute("style")) {
      const output: Array<string> = [];
      // re-add styles in case any are left
      validateStyles(output, (node as HTMLElement).style);
      if (output.length) node.setAttribute("style", output.join(""));
      else node.removeAttribute("style");
    }
  });

  return DOMPurify.sanitize(string, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
  });
}

return function messageRender(string: string) {
  const result = dompurifyRender(markedRender(string));

  // Custom embeds
  const DOM = document.createElement("div");
  DOM.innerHTML = result;
  DOM.querySelectorAll("a").forEach((el) => {
    if (el.href.match(youtube)) {
      const iframe = document.createElement("iframe");
      iframe.setAttribute(
        "src",
        el.href.replace(youtube, `https://youtube.com/embed/$5$6`)
      );
      iframe.setAttribute("allowfullscreen", "true");
      iframe.setAttribute("title", "Youtube Video");
      el.parentNode!.replaceChild(iframe, el);
    }
  });

  return DOM.innerHTML;
}
})