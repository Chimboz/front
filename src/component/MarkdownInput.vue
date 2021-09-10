<template>
  <table class="bbs">
    <colgroup>
      <col width="100" />
      <col width="100%" />
    </colgroup>
    <thead>
      <tr>
        <th valign="top" colspan="2" height="25" nowrap="nowrap">
          Répondre au sujet
        </th>
      </tr>
    </thead>
    <tbody>
      <tr id="reply" v-if="message">
        <td class="info" width="100" valign="top">
          <Tiz
            :avatar="user ? user.look.avatar : 0"
            :emote="user ? user.look.emote : 1"
            :hat="user ? user.look.hat : 1"
            :body="user ? user.look.body : 1"
            :shoe="user ? user.look.shoe : 1"
            :item0="user ? user.look.item0 : 1"
            :item1="user ? user.look.item1 : 1"
            :item2="user ? user.look.item2 : 1"
          /><br /><User :user="user" /><br />{{ formatDate }}
        </td>
        <td class="justified">
          <div class="head flex centered">
            <router-link to="#reply">
              <img
                draggable="false"
                @contextmenu.prevent
                alt="Voir le dernier message"
                title="Voir le dernier message"
                src="@/asset/img/bbs/msg_new.svg"
              /> </router-link
            >&nbsp;
            <h4 class="ellipsis justified title">{{ title }}</h4>
            &nbsp;
            <img
              alt="Quote button"
              src="https://chapatizretro.com/data/content/images/bbs/icon_quote.png"
            />
          </div>
          <hr style="margin: 2px 0" />
          <div class="markdown-body content" v-html="formatMessage"></div>
          <div class="signature" v-if="message.signature">
            <i><br />"{{ message.author.signature }}"</i>
          </div>
        </td>
      </tr>
      <tr v-if="message">
        <td colspan="2"><hr style="margin: 6px" /></td>
      </tr>
      <tr>
        <td><b>Sujet</b></td>
        <td><input type="text" v-model="title" /></td>
      </tr>
      <tr>
        <td>
          <b>Corps du message&nbsp;:</b><br />
          Votre saisie ne doit pas contenir plus de 60000 caractère(s).
        </td>
        <td class="markdown-body" style="vertical-align: middle;">
          <div class="flex hstack">
            <button @click="format('**')"><b>B</b></button
            ><button @click="format('*')"><i>i</i></button
            ><button @click="format('<u>')">
              <u>u</u>
            </button>
            <button @click="format('<s>')">
              <s>s</s>
            </button>
            <button @click="format('<a>')">
              <a href="#" @click.prevent>a</a>
            </button>
            <button @click="format('<u>')">
              <img
                src="@/asset/img/favicon.svg"
                height="22"
                style="background: none"
              />
            </button>
            <select @change="(event) => formatColor(event.target.value)">
              <option
                style="color: black;background-color: #fafafa;"
                value="#444444"
              >
                Couleur
              </option>
              <option
                style="color: #cecece;background-color: #fafafa;"
                value="#CECECE"
              >
                Gris triste
              </option>
              <option
                style="color: #999999;background-color: #fafafa;"
                value="#999999"
              >
                Gris divorce
              </option>
              <option
                style="color: #ff0000;background-color: #fafafa;"
                value="#FF0000"
              >
                Rouge
              </option>
              <option
                style="color: #cc6600;background-color: #fafafa;"
                value="#CC6600"
              >
                Chocolat
              </option>
              <option
                style="color: #fe9e01;background-color: #fafafa;"
                value="#FE9E01"
              >
                Orange
              </option>
              <option
                style="color: #ffff00;background-color: #fafafa;"
                value="#FFFF00"
              >
                Jaune
              </option>
              <option
                style="color: #ade76b;background-color: #fafafa;"
                value="#ADE76B"
              >
                Vert
              </option>
              <option
                style="color: #66cc00;background-color: #fafafa;"
                value="#66CC00"
              >
                Gilvert
              </option>
              <option
                style="color: #018352;background-color: #fafafa;"
                value="#018352"
              >
                Pelouse
              </option>
              <option
                style="color: #9412fe;background-color: #fafafa;"
                value="#9412FE"
              >
                Violet du marié
              </option>
              <option
                style="color: #376da8;background-color: #fafafa;"
                value="#376DA8"
              >
                Bleu
              </option>
              <option
                style="color: #6699cc;background-color: #fafafa;"
                value="#6699CC"
              >
                Bleu Chimbo
              </option>
              <option
                style="color: #fe81c0;background-color: #fafafa;"
                value="#FE81C0"
              >
                Rose Dupatta
              </option>
              <option
                style="color: #ff3399;background-color: #fafafa;"
                value="#FF3399"
              >
                Rose Chimbo
              </option>
              <option
                style="color: #e40173;background-color: #fafafa;"
                value="#E40173"
              >
                Gurujiolet
              </option>
              <option
                style="color: white;background-color: #fafafa;"
                value="#FFFFFF"
              >
                Blanc
              </option>
              <option
                style="color: black;background-color: #fafafa;"
                value="#000000"
              >
                Noir
              </option>
            </select>
            <select @change="(event) => formatMultiline(event.target.value)">
              <option value="##### ">Trop minuscule</option>
              <option value="#### " selected="selected">Taille</option>
              <option value="### ">Grand</option>
              <option value="## ">Fat</option>
              <option value="# ">Trop trop gros</option>
            </select>
            <button @click="formatMultiline('> ')">
              <blockquote style="margin-bottom: 0; color: #fff">
                Quote
              </blockquote>
            </button>
            <button @click="formatMultiline('1. ')">
              1. List
            </button>
            <button @click="formatMultiline('- ')">
              • List
            </button>
            <button @click="format('<kbd>')">
              <kbd>Key</kbd>
            </button>
            <button @click="format('`')">
              <code>Code</code>
            </button>
            <button @click="format('\n```\n')">
              <pre style="padding: 1px; margin: 0">Code block</pre>
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <Emotes />
        </td>
        <td>
          <textarea
            ref="message"
            v-model="message"
            @focus="focusHandler"
            @select="selectionHandler"
          />
        </td>
      </tr>
      <tr>
        <td>
          <b>Options&nbsp;:</b><br />
          Les BBCodes sont activés [img] est activé [url] est activé Les smileys
          sont activés
        </td>
        <td>
          <input type="checkbox" id="bbcode" />
          <label for="bbcode"
            >&#32;Désactiver les BBCodes, smileys et liens</label
          ><br /><input type="checkbox" checked id="signature" />
          <label for="signature"
            >&#32;Attacher ma signature (les signatures peuvent être modifiées
            sur le tchat)</label
          >
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button>Envoyer</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Tiz from "@/component/Tiz.vue";
import Emotes from "@/component/Emotes.vue";
import User from "@/component/link/User.vue";
import Marked from "marked";
import DOMPurify from "dompurify";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { mapState } from "vuex";

export default {
  name: "MarkdownInput",
  components: { Tiz, User, Emotes },
  data() {
    return {
      message: "",
      title: "",
      selectionRange: [0, 0],
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
    formatMessage() {
      Marked.setOptions({
        renderer: new Marked.Renderer(),
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
        xhtml: false,
      });
      return DOMPurify.sanitize(Marked(this.message));
    },
    formatDate() {
      return format(Date.now(), "PPP à pp", {
        locale: fr,
        addSuffix: true,
      });
    },
  },
  methods: {
    scrollTo(anchor) {
      location.href = anchor;
    },
    focusHandler() {
      if (this.selectionRange[1] !== 0) {
        this.select();
      }
    },
    selectionHandler(e) {
      this.selectionRange = [
        e.currentTarget.selectionStart,
        e.currentTarget.selectionEnd,
      ];
    },
    select() {
      this.$refs["message"].setSelectionRange(
        this.selectionRange[0],
        this.selectionRange[1]
      );
    },
    behaviour(fct) {
      return true;
    },
    format(pattern) {
      this.message =
        this.message.substring(0, this.selectionRange[0]) +
        pattern +
        this.message.substring(this.selectionRange[0], this.selectionRange[1]) +
        (/<[a-z0-9]+>/.test(pattern)
          ? pattern.substring(0, 1) + "/" + pattern.substring(1)
          : pattern) +
        this.message.substring(this.selectionRange[1]);
    },
    formatMultiline(pattern) {
      this.message =
        this.message.substring(0, this.selectionRange[0]) +
        (this.message.charAt(this.selectionRange[0] - 1) == "\n" ||
        this.selectionRange[0] == 0
          ? pattern
          : "\n" + pattern) +
        this.message
          .substring(this.selectionRange[0], this.selectionRange[1])
          .split(/\r?\n/)
          .reduce((prev, curr) => `${prev}\n${pattern} ${curr}`) +
        "\n\n" +
        this.message.substring(this.selectionRange[1]);
    },
    formatColor(hex) {
      this.message =
        this.message.substring(0, this.selectionRange[0]) +
        `<span style="color:${hex}">` +
        this.message.substring(this.selectionRange[0], this.selectionRange[1]) +
        "</span>" +
        this.message.substring(this.selectionRange[1]);
    },
  },
};
</script>
<style lang="scss" scoped>
td {
  padding: 6px;
  vertical-align: top;
}
td input:not([type="checkbox"]) {
  width: 100%;
}

textarea {
  width: 100%;
  min-height: 240px;
  resize: vertical;
  font-size: 11px;
}

.title {
  flex: 1;
}

button,
select {
  display: inline-flex;
  border: 4px solid #d5e6f3;
  background-color: #f0009c;
  color: #fff;
  padding: 0 4px;
  height: 30px;
  min-width: 30px;
  border-radius: 12px 8px;
  align-items: center;
  justify-content: center;
}

button:hover,
button:active,
select:hover,
select:active {
  background-color: #ff6600;
}
</style>
