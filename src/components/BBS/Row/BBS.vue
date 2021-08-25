<template>
  <tbody>
    <tr class="category">
      <th valign="middle" colspan="5" height="28">
        <a>▼ {{ category.category }}</a>
      </th>
    </tr>
  </tbody>
  <tbody v-for="(bbs, index) in category.bbs" :key="bbs.id">
    <tr class="bbs">
      <td class="row1" align="center" valign="middle" height="50">
        <img draggable="false" 
          class="icon"
          :src="require(`@/assets/img/bbs/folder${bbs.new?'_new':''}${bbs.locked?'_lock':''}.svg`)"
          alt="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
          title="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
        />
      </td>
      <td class="row1" width="100%" height="50" align="left">
        <span class="forumlink">
          <router-link
            :to="'/bbs/' + bbs.id"
            class="forumlink pink"
            
            >{{ bbs.name }}</router-link
          ><br />
        </span>
        <span class="genmed">{{ bbs.desc }}<br /> </span
        ><span class="gensmall"
          >Modérateur
          <div v-for="mod in bbs.mods" :key="mod.id"  style="display: inline">
            <router-link :to="'/groups/' + mod.id">{{
              mod.name
            }}</router-link>
            <div v-if="bbs.mods.indexOf(mod) != bbs.mods.length-1" style="display: inline">,&nbsp;</div>
          </div></span
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
          ><img draggable="false" 
            :src="require(`@/assets/img/bbs/msg${bbs.new?'_new':''}.svg`)"
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
  name: "BBS Row",
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
.category th {
  padding: 0 5px;
  color: #6090be;
}
.category{
  text-align: left;
}
</style>