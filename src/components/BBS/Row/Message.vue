<template>
  <tr>
    <td class="info" width=100>
      <Tiz /><br /><a :href="'/annuaire/' + message.author.id">{{
        message.author.name
      }}</a
      ><br />{{ format(message.date, "PPP à pp") }}
    </td>
    <td class="msg-body justified">
      <div class="title ellipsis">
        <b
          ><img
            draggable="false"
            alt="Voir le dernier message"
            title="Voir le dernier message"
            :src="
              require(`@/assets/img/bbs/msg${message.new ? '_new' : ''}.svg`)
            "
          />
          {{ message.title }}</b
        >
      </div>
      <hr />
      <div class="content" v-html="formatBBCode(message.content)"></div>
      <div class="signature" v-if="message.signature">
        <i><br />"{{ message.author.signature }}"</i>
      </div>
    </td>
  </tr>
  <tr v-if="separator">
    <td colspan=2 style="background: #fff"><hr /></td>
  </tr>
</template>

<script>
import Tiz from "@/components/Tiz.vue";
import bbob from "@bbob/core";
import { render } from "@bbob/html";
import presetHTML5 from "@bbob/preset-html5";
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
    formatBBCode(code) {
      return bbob(presetHTML5()).process(code, { render }).html;
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
</style>