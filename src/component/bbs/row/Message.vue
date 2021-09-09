<template>
  <tr :id="message.id">
    <td class="info" width="100" valign="top">
      <Tiz
        :avatar="message.author.look.avatar"
        :emote="message.author.look.emote"
        :hat="message.author.look.hat"
        :body="message.author.look.body"
        :shoe="message.author.look.shoe"
        :item0="message.author.look.item0"
        :item1="message.author.look.item1"
        :item2="message.author.look.item2"
      /><br /><User :user="message.author" /><br />{{ formatDate }}
    </td>
    <td class="justified">
      <div class="head flex centered">
        <router-link :to="'#' + message.id">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Voir le dernier message"
            title="Voir le dernier message"
            :src="
              require(`@/asset/img/bbs/msg${message.new ? '_new' : ''}.svg`)
            "
          /> </router-link
        >&nbsp;
        <h4 class="ellipsis justified title">{{ message.title }}</h4>
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
  <tr v-if="separator">
    <td colspan="2" style="background: #fff"><hr /></td>
  </tr>
</template>

<script>
import Tiz from "@/component/Tiz.vue";
import User from "@/component/link/User.vue";
import Marked from "marked";
import DOMPurify from "dompurify";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default {
  name: "Message",
  components: {
    Tiz,
    User,
  },
  props: {
    message: {
      required: true,
      type: Object,
    },
    separator: {
      required: false,
      default: true,
      type: Boolean,
    },
  },
  mounted() {
    if (this.$route.hash) {
      this.scrollTo(this.$route.hash);
    }
  },
  computed: {
    formatMessage() {
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
      return DOMPurify.sanitize(Marked(this.message.content));
    },
    formatDate() {
      return format(new Date(this.message.date), "PPP à pp", {
        locale: fr,
        addSuffix: true,
      });
    },
  },
  methods: {
    scrollTo(anchor) {
      location.href = anchor;
    },
  },
};
</script>
<style lang="scss">
// Custom checkboxes
.markdown-body [type="checkbox"]:disabled {
  filter: none !important;
}

.markdown-body [type="checkbox"]:not(:checked):before,
.markdown-body [type="checkbox"]:checked:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 1em;
  height: 1em;
  border: 1px solid #0005;
  background: #FFF;
  border-radius: .2em;
}

.markdown-body [type="checkbox"]:checked:before {
background:#0366d6
}

// Markdown lists and checkboxes
.markdown-body li input[type="checkbox"] {
  margin-left: -16px;
  position: absolute;
}
</style>
<style lang="scss" scoped>
td {
  padding: 6px;
}

.head {
  flex-wrap: wrap;
}

.title {
  flex: 1;
}
</style>