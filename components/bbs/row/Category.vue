<template>
  <thead>
    <tr
      class="category justified pointer"
      :class="{ arrow: hide }"
      @click="hide = !hide"
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
      <td style="text-align: center" valign="middle" height="50">
        <img
          draggable="false"
          :src="
            asset(
              `img/bbs/folder${bbs.new ? '_new' : ''}${
                bbs.locked ? '_lock' : ''
              }.svg`
            )
          "
          alt="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
          title="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
          @contextmenu.prevent
        />
      </td>
      <td style="text-align: left" width="100%">
        <div>
          <NuxtLink :to="'/bbs/' + bbs.id" class="pink">{{
            bbs.name
          }}</NuxtLink>
        </div>
        <div>{{ bbs.desc }}</div>
        <div>
          Modérateurs&nbsp;:
          <LinkGroup
            v-for="(mod, indexBbs) in bbs.mods"
            :key="mod.id"
            :group="mod"
            :separator="indexBbs < bbs.mods.length - 1"
          />
        </div>
      </td>
      <td style="text-align: center" valign="middle">
        {{ bbs.topics }}
      </td>
      <td style="text-align: center" valign="middle">
        {{ bbs.messages }}
      </td>
      <td style="text-align: center" valign="middle">
        <div>{{ distanceToNow(bbs.last_msg.date) }}</div>
        <LinkUser :user="bbs.last_msg.author" />
        &nbsp;»&nbsp;
        <NuxtLink
          :to="`/topic/${bbs.id}/${bbs.last_msg.topicid}/${bbs.last_msg.page}#p${bbs.last_msg.msgid}`"
          ><img
            draggable="false"
            :src="asset(`img/bbs/msg${bbs.new ? '_new' : ''}.svg`)"
            alt="Voir le dernier message"
            title="Voir le dernier message"
            @contextmenu.prevent
        /></NuxtLink>
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
import { asset } from "@/utils";
import { distanceToNow } from "@/utils/date";


const hide = ref(false);
defineProps<{
  category: any;
}>();
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
