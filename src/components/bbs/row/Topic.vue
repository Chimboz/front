<template>
  <tbody>
    <tr>
      <td align="center" valign="middle" height="50">
        <img
          draggable="false"
          @contextmenu.prevent
          :src="
            require(`@/assets/img/bbs/folder${
              topic.sticky ? '_sticky' : ''}${
              topic.announce && !topic.sticky ? '_announce' : ''}${
              topic.new && !topic.announce && !topic.sticky ? '_new' : ''}${
              topic.locked && !topic.announce && !topic.sticky ? '_lock' : ''}${
              topic.reply > 10 && !topic.announce && !topic.sticky && !topic.locked ? '_hot' : ''}.svg`)
          "
          alt="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
          title="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
        />
      </td>
      <td width="100%" height="50" align="left">
          <router-link :to="'/topic/' + topic.id">{{
            topic.title
          }}</router-link>
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        {{ topic.reply }}
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <UserLink :user="topic.author" />
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        {{ topic.view }}
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <div>{{ formatDate }}</div>
        <UserLink :user="topic.last_msg.author" />
        &nbsp;»&nbsp;
        <router-link :to="'/topic/' + topic.id + '#' + topic.last_msg.msgid"
          ><img
            draggable="false"
            @contextmenu.prevent
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

<script setup lang="ts">
import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group BBS/Row

  
  const props = defineProps<{
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
      return formatDistanceToNowStrict(new Date(topic.last_msg.date), {
        locale: locales[navigator.language.split("-")[0]],
        addSuffix: true,
      });
    },
  },
</script>
