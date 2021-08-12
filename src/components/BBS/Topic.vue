<template>
  <tbody>
    <tr class="topic">
      <td class="row1" align="center" valign="middle" height="50">
        <img
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
          <router-link :to="'/topic/' + topic.id" class="forumlink">{{
            topic.title
          }}</router-link>
        </span>
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <span class="gensmall">{{ topic.reply }}</span>
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <span class="gensmall">{{ topic.author.name }}</span>
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
        <a href="/annuaire/5">{{ topic.last_msg.author.name }}</a>
        &nbsp;»&nbsp;
        <a href="/topic/938277"
          ><img
            :src="require(`@/assets/img/bbs/msg${topic.new ? '_new' : ''}.svg`)"
            style="vertical-align: bottom"
            alt="Voir le dernier message"
            title="Voir le dernier message"
        /></a>
      </td>
    </tr>
    <tr>
      <td valign="middle" colspan="6">
        <hr />
      </td>
    </tr>
  </tbody>
</template>

<script>
import { formatDistance } from "date-fns";
import { fr } from "date-fns/locale";

export default {
  name: "Topic",
  props: {
    topic: {
      required: true,
      type: Object,
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

<style lang="scss" scoped>
tr {
  background: white;
}

.category th {
  padding: 0 5px;
  color: #6090be;
}
.category {
  text-align: left;
}

.topic .icon {
  padding: 10px;
}
</style>