<template>
  <thead>
    <tr
      class="category justified pointer"
      @click="hide = !hide"
      :class="{ arrow: hide }"
    >
      <th valign="middle" colspan="5" height="28">
        <span class="link">{{ category.category }}</span>
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
            require(`@/assets/img/bbs/folder${bbs.new ? '_new' : ''}${
              bbs.locked ? '_lock' : ''
            }.svg`)
          "
          alt="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
          title="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
        />
      </td>
      <td align="left" width="100%">
        <div>
          <router-link :to="'/bbs/' + bbs.id" class="pink">{{
            bbs.name
          }}</router-link>
        </div>
        <div>{{ bbs.desc }}</div>
        <div>
          Modérateurs&nbsp;:
          <GroupLink
            v-for="(mod, index) in bbs.mods"
            :key="mod.id"
            :group="mod"
            :separator="index < bbs.mods.length - 1"
          />
        </div>
      </td>
      <td align="center" valign="middle">
        {{ bbs.topics }}
      </td>
      <td align="center" valign="middle">
        {{ bbs.messages }}
      </td>
      <td align="center" valign="middle">
        <div>{{ formatDate(bbs.last_msg.date) }}</div>
        <UserLink :user="bbs.last_msg.author" />
        &nbsp;»&nbsp;
        <router-link
          :to="'/topic/' + bbs.last_msg.topicid + '#' + bbs.last_msg.msgid"
          ><img
            draggable="false"
            @contextmenu.prevent
            :src="require(`@/assets/img/bbs/msg${bbs.new ? '_new' : ''}.svg`)"
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

<script setup lang="ts">
import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group BBS/Row

  

      hide: false,
    };
  },
  const props = defineProps<{
    category: {
      required: true,
      type: Object,
    },
  },

function formatDate(date: number) {
      return formatDistanceToNowStrict(new Date(date), {
        locale: locales[navigator.language.split("-")[0]],
        addSuffix: true,
      });
    },
  };
</script>

<style lang="scss" scoped>
.category th {
  padding: 0 5px;
  color: var(--main-bg);
}

.category .link::before {
  content: "▼ ";
  display: inline-block;
  will-change: transform;
  transition: 0.2s;
}

.category.arrow .link::before {
  transform: rotate(-90deg);
}

.hide {
  display: none;
}
</style>
