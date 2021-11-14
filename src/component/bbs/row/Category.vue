<template>
  <thead>
    <tr
      class="category justified pointer"
      @click="hide = !hide"
      :class="{ arrow: hide }"
    >
      <th valign="middle" colspan="5" height="28">
        <a>{{ category.category }}</a>
      </th>
    </tr>
  </thead>
  <tbody
    v-for="(bbs, index) in category.bbs"
    :key="bbs.id"
    :class="{ hide: hide }"
  >
    <tr class="bbs">
      <td align="center" valign="middle" height="50">
        <img
          draggable="false"
          @contextmenu.prevent
          :src="
            require(`@/asset/img/bbs/folder${bbs.new ? '_new' : ''}${
              bbs.locked ? '_lock' : ''
            }.svg`)
          "
          alt="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
          title="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
        />
      </td>
      <td align="left" width="100%">
        <span class="forumlink">
          <router-link :to="'/bbs/' + bbs.id" class="forumlink pink">{{
            bbs.name
          }}</router-link
          ><br />
        </span>
        <span class="genmed">{{ bbs.desc }}<br /> </span
        ><span class="gensmall"
          >Modérateurs&nbsp;:
          <Group
            v-for="(mod, index) in bbs.mods"
            :key="mod.id"
            :group="mod"
            :separator="index != bbs.mods.length - 1"
            style="display: inline"
          />
        </span>
      </td>
      <td align="center" valign="middle">
        <span class="gensmall">{{ bbs.topics }}</span>
      </td>
      <td align="center" valign="middle">
        <span class="gensmall">{{ bbs.messages }}</span>
      </td>
      <td align="center" valign="middle">
        {{ formatDate(bbs.last_msg.date) }}<br />
        <User :user="bbs.last_msg.author" />
        &nbsp;»&nbsp;
        <router-link
          :to="'/topic/' + bbs.last_msg.topicid + '#' + bbs.last_msg.msgid"
          ><img
            draggable="false"
            @contextmenu.prevent
            :src="require(`@/asset/img/bbs/msg${bbs.new ? '_new' : ''}.svg`)"
            alt="Voir le dernier message"
            title="Voir le dernier message"
        /></router-link>
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
import Group from "@/component/link/Group.vue";
import User from "@/component/link/User.vue";
import { formatDistanceToNow } from "date-fns";
import { fr, enGB } from "date-fns/locale";

export default {
  name: "Category",
  components: {
    Group,
    User
  },
  data() {
    return {
      hide: false
    };
  },
  props: {
    category: {
      required: true,
      type: Object
    }
  },
  methods: {
    formatDate(date) {
      return formatDistanceToNow(new Date(date), {
        locale: window.__localeId__,
        addSuffix: true
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.category th {
  padding: 0 5px;
  color: #6090be;
}

.category a::before {
  content: "▼ ";
  display: inline-block;
  will-change: transform;
  transition: 0.2s;
}

.category.arrow a::before {
  transform: rotate(-90deg);
}

.hide {
  display: none;
}
</style>
