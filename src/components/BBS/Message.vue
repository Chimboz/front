<template>
  <tr>
    <td class="message">
      <div class="flex">
        <div>
          <Tiz /><br /><a :href="'/annuaire/' + message.author.id">{{
            message.author.name
          }}</a
          ><br />{{ format(message.date, "PPP à pp") }}
        </div>
        <div class="msg-body">
          <div class="title">
            <b
              ><img
                :src="
                  require(`@/assets/img/bbs/msg${
                    message.new ? '_new' : ''
                  }.svg`)
                "
              />
              {{ message.title }}</b
            ><br />
            <hr />
          </div>
          <div class="content" v-html="formatBBCode(message.content)"></div>
          <div class="signature" v-if="message.signature"><i><br>"{{message.author.signature}}"</i></div>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td style="background: #fff"><hr /></td>
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
<style lang="scss" scoped>
.flex {
  display: flex;
}
.message {
  background: #fff;
  padding: 6px;
}

.title img {
  vertical-align: middle;
}

.msg-body {
  width: 100%;
  text-align: left;
}
</style>