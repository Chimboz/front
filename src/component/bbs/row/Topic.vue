<template>
  <tbody>
    <tr class="topic">
      <td class="row1" align="center" valign="middle" height="50">
        <img
          draggable="false"
          @contextmenu.prevent
          class="icon"
          :src="
            require(`@/asset/img/bbs/folder${topic.new ? '_new' : ''}${
              topic.locked ? '_lock' : ''
            }.svg`)
          "
          alt="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
          title="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
        />
      </td>
      <td class="row1" width="100%" height="50" align="left">
        <span class="forumlink">
          <router-link
            :to="'/topic/' + $route.params.id + '/' + topic.id"
            class="forumlink"
            >{{ topic.title }}</router-link
          >
        </span>
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <span class="gensmall">{{ topic.reply }}</span>
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <span class="gensmall"><User :user="topic.author"/></span>
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <span class="gensmall">{{ topic.view }}</span>
      </td>
      <td
        class="row2"
        align="center"
        valign="middle"
        height="50"
        nowrap="nowrap"
      >
        {{ formatDate }}<br />
        <User :user="topic.last_msg.author" />
        &nbsp;»&nbsp;
        <router-link
          :to="
            '/topic/' +
              $route.params.id +
              '/' +
              topic.id +
              '#' +
              topic.last_msg.msgid
          "
          ><img
            draggable="false"
            @contextmenu.prevent
            :src="require(`@/asset/img/bbs/msg${topic.new ? '_new' : ''}.svg`)"
            alt="Voir le dernier message"
            title="Voir le dernier message"
        /></router-link>
      </td>
    </tr>
    <tr v-if="separator">
      <td colspan="6">
        <hr />
      </td>
    </tr>
  </tbody>
</template>

<script>
import User from "@/component/link/User.vue";
import { formatDistance } from "date-fns";
import { fr, enGB } from "date-fns/locale";

export default {
  name: "Topic Row",
  components: {
    User
  },
  props: {
    topic: {
      required: true,
      type: Object
    },
    separator: {
      required: false,
      default: true,
      type: Boolean
    }
  },
  computed: {
    formatDate() {
      return formatDistance(new Date(this.topic.last_msg.date), new Date(), {
        locale: window.__localeId__,
        addSuffix: true
      });
    }
  }
};
</script>
