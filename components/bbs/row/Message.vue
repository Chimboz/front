<template>
  <tr :id="`p${message.id}`">
    <td class="info" valign="top">
      <Avatar
        :avatar="message.author.look.avatar"
        :emote="message.author.look.emote"
        :hat="message.author.look.hat"
        :body="message.author.look.body"
        :shoe="message.author.look.shoe"
        :item0="message.author.look.item0"
        :item1="message.author.look.item1"
        :item2="message.author.look.item2"
      /><UserLink :user="message.author" ellipsis /><span class="date">{{
        format(message.date, "PPpp")
      }}</span>
    </td>
    <td class="justified" valign="top">
      <h2 class="head flex info-sm ellipsis">
        <Avatar
          :avatar="message.author.look.avatar"
          :emote="message.author.look.emote"
          :hat="message.author.look.hat"
          :body="message.author.look.body"
          :shoe="message.author.look.shoe"
          :item0="message.author.look.item0"
          :item1="message.author.look.item1"
          :item2="message.author.look.item2"
        />&nbsp;&nbsp;
        <div class="ellipsis">
          <UserLink :user="message.author" />&nbsp;le
          <span class="date">{{ format(message.date, "PPpp") }}</span>
        </div>
      </h2>
      <div class="head flex">
        <a :href="`#p${message.id}`">
          <img
            draggable="false"
            alt="Lien du message"
            title="Lien du message"
            :src="asset(`img/bbs/msg${message.new ? '_new' : ''}.svg`)"
          /> </a
        >&nbsp;
        <b class="ellipsis justified title">{{ message.title }}</b>
        &nbsp;
        <div v-if="user">
          <button
            type="button"
            class="btn-action"
            @click.prevent="
              eventBus.emit(
                'quote',
                `**[🗩](#p${message.id}) [<i style='color:${message.author.color}'>${message.author.name}</i>](/book/${message.author.id}) a écrit :**\n${message.content}`.replace(
                  /^/gm,
                  '> '
                ) + '\n\n'
              )
            "
          >
            <img
              src="@/assets/img/bbs/icon/bubble.svg"
              width="14"
              height="12"
              draggable="false"
              alt="Bubble"
              @contextmenu.prevent
            />&nbsp;Citer</button
          >&nbsp;
          <button
            v-if="
              (message.author.id === user.id &&
                Date.now() - message.date < 600) ||
              +user.user_level > 3
            "
            type="button"
            class="btn-action"
            @click.prevent="
              eventBus.emit('edit', {
                id: message.id,
                content: message.content,
              })
            "
          >
            <img
              src="@/assets/img/bbs/icon/pen.svg"
              width="12"
              height="12"
              draggable="false"
              alt="Pen"
              @contextmenu.prevent
            />&nbsp;Éditer</button
          >&nbsp;
          <button
            v-if="message.author.id === user.id || +user.user_level > 3"
            type="button"
            class="btn-action"
            @click.prevent="deleteMessage"
          >
            x
          </button>
        </div>
      </div>
      <hr style="margin: 2px 0" />
      <div class="markdown-body" v-html="messageRender(message.content)"></div>
      <div v-if="message.signature">
        <i><br />"{{ message.author.signature }}"</i>
      </div>
    </td>
  </tr>
  <tr v-if="separator">
    <td colspan="2" style="background: var(--light)"><hr /></td>
  </tr>
</template>
<script setup lang="ts">
import { asset } from "@/utils";
import { format } from "@/utils/date";
import messageRender from "@/plugins/messageRender";
import useAuthStore from "@/stores/auth";
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import eventBus from "@/plugins/eventBus";
import api from "@/plugins/api";

const auth = useAuthStore();
const user = computed(() => auth.user);
const route = useRoute();

const props = withDefaults(
  defineProps<{
    message: any;
    separator: boolean;
  }>(),
  { separator: true }
);

onMounted(() => {
  if (route.hash)
    setTimeout(() => {
      useNuxtApp().ssrContext.event.node.req.headers.href = route.hash;
    }, 0);
});

function deleteMessage() {
  useFetch("bbs/delete", {body:{ post: props.message.id, topic: route.params.topic }});
}
</script>
<style lang="scss">
.info-sm .tiz {
  margin-bottom: -25px;
}
</style>
<style lang="scss" scoped>
td {
  padding: 6px;
}

.head {
  flex-wrap: wrap;
}

.info-sm {
  flex-wrap: nowrap;
}

.info {
  display: none !important;
  overflow: hidden;
}

@media (min-width: 800px) {
  .info {
    display: table-cell !important;
  }

  .info-sm {
    display: none;
  }
}

.title {
  flex: 1;
}
</style>
