<template>
  <tbody>
    <tr class="topic">
      <td class="row1" align="center" valign="middle" height="50">
        <img draggable="false" 
          class="icon"
          :src="
            require(`@/assets/img/bbs/folder${topic.new ? '_new' : ''}${
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
            :to="$route.params.id + '/' + topic.id"
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
        {{ formatDate(topic.last_msg.date) }}<br />
        <User :user="topic.last_msg.author"/>
        &nbsp;»&nbsp;
        <router-link :to="$route.params.id+'/'+topic.id+'#'+topic.last_msg.msgid"
          ><img draggable="false" 
            :src="require(`@/assets/img/bbs/msg${topic.new ? '_new' : ''}.svg`)"
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
import User from "@/components/links/User.vue";
import { formatDistance } from "date-fns";
import { fr } from "date-fns/locale";

export default {
  name: "Topic",
  components: {
    User
  },
  props: {
    topic: {
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
    formatDate(date) {
      return formatDistance(new Date(date), new Date(), {
        locale: fr,
        addSuffix: true,
      });
    },
  },
};
</script>