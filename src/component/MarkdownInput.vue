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
        <td class="msg-body justified">
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
          <div class="content" v-html="formatMessage"></div>
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
          <button @click="format('**')"><b>B</b></button
          ><button @click="format('*')"><i>i</i></button
          ><button @click="format('<u>')">
            <u>u</u>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <Emotes />
        </td>
        <td>
          <textarea v-model="message" @select="selected" />
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
      selectionStart: 0,
      selectionEnd: 0,
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
    selected(e) {
      this.selectionStart = e.target.selectionStart;
      this.selectionEnd = e.target.selectionEnd;
    },
    format(pattern) {
      this.message =
        this.message.substring(0, this.selectionStart) +
        pattern +
        this.message.substring(this.selectionStart, this.selectionEnd) +
        (/<[a-z0-9]+>/.test(pattern)
          ? pattern.substring(0, 1) + "/" + pattern.substring(1)
          : pattern) +
        this.message.substring(this.selectionEnd);
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

button {
  display: inline-flex;
  border: 2px solid black;
  padding: 5px;
  height: 24px;
  border-radius: 99px;
  align-items: center;
}
</style>
