<template>
  <tbody>
    <tr class="topic">
      <td class="row1" align="center" valign="middle" height="50">
        <img
          draggable="false"
          @contextmenu.prevent
          class="icon"
          :src="
            require(`@/asset/img/bbs/folder${
              topic.sticky ? '_sticky' : ''}${
              topic.announce && !topic.sticky ? '_announce' : ''}${
              topic.new && !topic.announce && !topic.sticky ? '_new' : ''}${
              topic.reply > 10 && !topic.announce && !topic.sticky && !topic.locked ? '_hot' : ''}${
              topic.locked && !topic.announce && !topic.sticky ? '_lock' : ''}.svg`)
          "
          alt="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
          title="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
        />
      </td>
      <td class="row1" width="100%" height="50" align="left">
        <span class="forumlink">
          <router-link :to="'/topic/' + topic.id" class="forumlink">{{
            topic.title
          }}</router-link>
        </span>
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <span class="gensmall">{{ topic.reply }}</span>
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <span class="gensmall"><UserLink :user="topic.author" /></span>
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <span class="gensmall">{{ topic.view }}</span>
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        {{ formatDate }}<br />
        <UserLink :user="topic.last_msg.author" />
        &nbsp;»&nbsp;
        <router-link :to="'/topic/' + topic.id + '#' + topic.last_msg.msgid"
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
import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group BBS/Row
export default {
  name: "TopicRow",
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
  computed: {
    formatDate() {
      return formatDistanceToNowStrict(new Date(this.topic.last_msg.date), {
        locale: locales[navigator.language.split("-")[0]],
        addSuffix: true,
      });
    },
  },
};
</script>
