<template>
  <tr :id="message.id">
    <td class="info" valign="top">
      <GlobalAvatar
        :avatar="message.author.look.avatar"
        :emote="message.author.look.emote"
        :hat="message.author.look.hat"
        :body="message.author.look.body"
        :shoe="message.author.look.shoe"
        :item0="message.author.look.item0"
        :item1="message.author.look.item1"
        :item2="message.author.look.item2"
      /><UserLink :user="message.author" ellipsis /><span class="date">{{
        formatDate()
      }}</span>
    </td>
    <td class="justified" valign="top">
      <h2 class="head flex info-sm ellipsis">
        <GlobalAvatar
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
          <span class="date">{{ formatDate() }}</span>
        </div>
      </h2>
      <div class="head flex">
        <a :href="`#${message.id}`">
          <img
            draggable="false"
            alt="Lien du message"
            title="Lien du message"
            :src="
              asset(`img/bbs/msg${message.new ? '_new' : ''}.svg`)
            "
          /> </a
        >&nbsp;
        <b class="ellipsis justified title">{{ message.title }}</b>
        &nbsp;
        <div v-if="authenticated">
          <button
            class="btn-action"
            @click.prevent="
              eventBus.emit(
                'quote',
                `**${message.author.name}** a écrit :\n${message.content}`.replace(
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
            class="btn-action"
            v-if="
              (message.author.id === user.id &&
                Date.now() - message.date < 600) ||
              user.role > 50
            "
            @click.prevent="eventBus.emit('edit', message.content)"
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
            class="btn-action"
            v-if="message.author.id === user.id || user.role > 50"
            @click.prevent="delete"
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
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import messageRender from "@/modules/messageRender";
import { useAuthStore } from "@/stores/auth";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import eventBus from "@/modules/eventBus";
const locales = { fr, enGB };
const auth = useAuthStore();
const authenticated = true;
const user = auth.user!;
const route = useRoute();

// @vuese
// @group BBS/Row

const props = withDefaults(
  defineProps<{
    message: any;
    separator: boolean;
  }>(),
  { separator: true }
);
onMounted(() => {
  if (route.hash) scrollTo(route.hash);
});

function formatDate() {
  return format(new Date(props.message.date), "PPpp", {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
  });
}

function scrollTo(anchor: string) {
  location.href = anchor;
}
function edit() {
  console.log("edit " + props.message.id);
}
function deleteMessage() {
  console.log("delete " + props.message.id);
}
function quote() {
  console.log();
}
</script>
<style src="@/assets/css/bbs/markdown.css"></style>
<style src="katex/dist/katex.min.css"></style>
<style src="@/assets/css/bbs/code.css"></style>
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
