<template>
  <tbody>
    <tr class="category">
      <th valign="middle" colspan="5" height="28">
        <a>▼ {{ category.category }}</a>
      </th>
    </tr>
  </tbody>
  <tbody v-for="(bbs, index) in category.bbs" :key="bbs.id">
    <tr>
      <td class="row1" align="center" valign="middle" height="50">
        <img
          src="@/assets/img/bbs/folder_lock.svg"
          alt="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
          title="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
        />
      </td>
      <td class="row1" width="100%" height="50">
        <span class="forumlink">
          <router-link :to="'/bbs/'+bbs.id" class="forumlink" style="color: #ff3399">{{
            bbs.name
          }}</router-link
          ><br />
        </span>
        <span class="genmed">{{ bbs.desc }}<br /> </span
        ><span class="gensmall"
          >Modérateur
          <a href="/groups/3" v-for="mod in bbs.mods" :key="mod.id">{{
            mod.name
          }}</a></span
        >
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <span class="gensmall">{{ bbs.topics }}</span>
      </td>
      <td class="row2" align="center" valign="middle" height="50">
        <span class="gensmall">{{ bbs.messages }}</span>
      </td>
      <td
        class="row2"
        align="center"
        valign="middle"
        height="50"
        nowrap="nowrap"
      >
        {{ formatDate(bbs.last_msg.date) }}<br />
        <a href="/annuaire/5">{{ bbs.last_msg.author.name }}</a>
        &nbsp;»&nbsp;
        <a href="/topic/938277"
          ><img
            src="@/assets/img/bbs/msg.svg"
            style="vertical-align: bottom"
            alt="Voir le dernier message"
            title="Voir le dernier message"
        /></a>
      </td>
    </tr>
    <tr v-if="index != category.bbs.length - 1">
      <td valign="middle" colspan="5">
        <hr />
      </td>
    </tr>
  </tbody>
</template>

<script>
import { formatDistance } from "date-fns";
import { fr } from "date-fns/locale";

export default {
  name: "Board",
  props: {
    category: {
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
</style>