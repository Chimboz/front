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
          <Tiz /><br /><User :user="{ id: 1, name: 'Tigriz' }" /><br />{{
            format(Date.now(), "PPP à pp")
          }}
        </td>
        <td class="msg-body justified">
          <div class="head flex centered">
            <router-link to="#reply">
              <img
                draggable="false"
                oncontextmenu="return false"
                alt="Voir le dernier message"
                title="Voir le dernier message"
                src="@/assets/img/bbs/msg_new.svg"
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
          <div class="content" v-html="formatMd(message)"></div>
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
        <td>
          <button><b>B</b></button><button><i>i</i></button
          ><button><u>u</u></button>
        </td>
      </tr>
      <tr>
        <td>
          <Emotes />
        </td>
        <td><textarea class="message-input" v-model="message" /></td>
      </tr>
      <tr>
        <td>
          <b>Options&nbsp;:</b><br />
          Les BBCodes sont activés [img] est activé [url] est activé Les smileys
          sont activés
        </td>
        <td>
          <input type="checkbox" /> Désactiver les BBCodes, smileys et liens<br /><input
            type="checkbox"
            checked
          />
          Attacher ma signature (les signatures peuvent être modifiées sur le
          tchat)
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
import Tiz from "@/components/Tiz.vue";
import Emotes from "@/components/Emotes.vue";
import User from "@/components/links/User.vue";
import Marked from "marked";
import DOMPurify from "dompurify";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default {
  name: "MarkdownInput",
  components: { Tiz, User, Emotes },
  data() {
    return {
      message: "",
      title: "",
    };
  },
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
  methods: {
    scrollTo(anchor) {
      location.href = anchor;
    },
    formatMd(message) {
      Marked.setOptions({
        renderer: new Marked.Renderer(),
        highlight: function (code, lang) {
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
      return DOMPurify.sanitize(Marked(message));
    },
    format(date, pattern) {
      return format(new Date(date), pattern, {
        locale: fr,
        addSuffix: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
td {
  padding: 6px;
  vertical-align: top;
}
td input {
  width: 100%;
}

.message-input {
  width: 100%;
  min-height: 240px;
  resize: vertical;
  font-size: 11px;
}
</style>