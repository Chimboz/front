<template>
  <tr :id="message.id">
    <td class="info" width="100" valign="top">
      <Tiz /><br /><a :href="'/annuaire/' + message.author.id">{{
        message.author.name
      }}</a
      ><br />{{ format(message.date, "PPP à pp") }}
    </td>
    <td class="msg-body justified">
      <div class="head flex centered">·
        <router-link :to="'#'+message.id">
          <img
            draggable="false"
            alt="Voir le dernier message"
            title="Voir le dernier message"
            :src="
              require(`@/assets/img/bbs/msg${message.new ? '_new' : ''}.svg`)
            "
          />
        </router-link>
        <h4 class="ellipsis justified title">{{ message.title }}</h4>
        <img
          alt="Quote button"
          src="https://chapatizretro.com/data/content/images/bbs/icon_quote.png"
        />
      </div>
      <hr style="margin: 2px 0" />
      <div class="content" v-html="formatMd(message.content)"></div>
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
import Tiz from "@/components/Tiz.vue";
import Marked from "marked";
import DOMPurify from "dompurify";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default {
  name: "Message",
  components: {
    Tiz,
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
  methods: {
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
<style lang="scss">
.content img {
  max-width: 100%;
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