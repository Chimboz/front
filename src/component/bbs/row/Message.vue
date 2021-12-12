<template>
  <tr :id="message.id">
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
      /><User :user="message.author" ellipsis /><span class="date">{{
        formatDate
      }}</span>
    </td>
    <td class="justified" valign="top">
      <h2 class="head flex centered info-sm ellipsis">
        <Avatar
          :avatar="message.author.look.avatar"
          :emote="message.author.look.emote"
          :hat="message.author.look.hat"
          :body="message.author.look.body"
          :shoe="message.author.look.shoe"
          :item0="message.author.look.item0"
          :item1="message.author.look.item1"
          :item2="message.author.look.item2"
        />
        <div class="ellipsis">
          <User :user="message.author" />&nbsp;le
          <span class="date">{{ formatDate }}</span>
        </div>
      </h2>
      <div class="head flex centered">
        <router-link :to="'#' + message.id">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Voir le dernier message"
            title="Voir le dernier message"
            :src="
              require(`@/asset/img/bbs/msg${message.new ? '_new' : ''}.svg`)
            "
          /> </router-link
        >&nbsp;
        <h4 class="ellipsis justified title">{{ message.title }}</h4>
        &nbsp;
        <div v-if="authenticated">
          <button
            class="btn-action"
            @click.prevent="
              eventBus.emit(
                'quote',
                `**${this.message.author.name}** a écrit :\n${this.message.content}`.replace(
                  /^/gm,
                  '> '
                )
              )
            "
            ><img
              src="@/asset/img/bbs/icon/bubble.svg"
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
            @click.prevent="eventBus.emit('edit', this.message.content)"
            ><img
              src="@/asset/img/bbs/icon/pen.svg"
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
            @click.prevent="this.delete"
            >&times;</button
          >
        </div>
      </div>
      <hr style="margin: 2px 0" />
      <div class="markdown-body" v-html="formatMessage"></div>
      <div class="signature" v-if="message.signature">
        <i><br />"{{ message.author.signature }}"</i>
      </div>
    </td>
  </tr>
  <tr v-if="separator">
    <td colspan="2" style="background: #fff"><hr /></td>
  </tr>
</template>

<script>
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };
import messageRender from "@/module/messageRender.js";
import { mapGetters, mapState } from "vuex";

// @vuese
// @group BBS/Row
export default {
  name: "MessageRow",
  props: {
    message: {
      required: true,
      type: Object
    },
    separator: {
      required: false,
      default: true,
      type: Boolean
    }
  },
  mounted() {
    if (this.$route.hash) {
      this.scrollTo(this.$route.hash);
    }
  },
  computed: {
    ...mapGetters("auth", ["authenticated"]),
    ...mapState("auth", ["user"]),
    formatMessage() {
      return messageRender(this.message.content);
    },
    formatDate() {
      return format(new Date(this.message.date), "PPpp", {
        locale: locales[navigator.language.split("-")[0]]
      });
    }
  },
  methods: {
    scrollTo(anchor) {
      location.href = anchor;
    },
    edit() {
      console.log("edit " + this.message.id);
    },
    delete() {
      console.log("delete " + this.message.id);
    },
    quote() {
      console.log();
    }
  }
};
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
