<template>
  <table class="bbs preview" :class="{ display: this.preview }">
    <colgroup>
      <col width="100" class="info" />
      <col width="100%" />
    </colgroup>
    <thead>
      <tr>
        <th valign="top" colspan="2" nowrap="nowrap">
          Prévisualisation
        </th>
      </tr>
    </thead>
    <tbody>
      <Message
        :message="{
          author: this.user,
          content: this.preview,
          date: Date.now(),
          id: 'reply',
          new: true,
          signature: this.signature,
          title: this.title,
        }"
        :separator="false"
      />
    </tbody>
  </table>
  <br v-if="this.preview" />
  <form @submit.prevent="submit">
    <table class="bbs input">
      <colgroup>
        <col width="100" />
        <col width="100%" />
      </colgroup>
      <thead>
        <tr>
          <th valign="top" colspan="2" nowrap="nowrap">
            {{ isTopic ? "Créer un sujet" : "Répondre au sujet" }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Sujet</b></td>
          <td>
            <input
              :required="isTopic"
              :minlength="isTopic ? '3' : '0'"
              maxlength="100"
              name="title"
              class="btn-md"
              type="text"
              v-model="title"
              placeholder="Titre"
            />
          </td>
        </tr>
        <tr>
          <td><b>Mise en forme</b></td>
          <td class="markdown-body" style="vertical-align: middle">
            <div class="flex hstack">
              <button type="button" class="btn-md" @click="format('**')">
                <b>B</b></button
              ><button type="button" class="btn-md" @click="format('*')">
                <i>i</i></button
              ><button type="button" class="btn-md" @click="format('<u>')">
                <u>u</u>
              </button>
              <button type="button" class="btn-md" @click="format('<s>')">
                <s>s</s>
              </button>
              <button type="button" class="btn-md" @click="formatLink(false)">
                <a href="#" @click.prevent>a</a>
              </button>
              <button
                type="button"
                class="btn-md"
                style="padding: 2px"
                @click="formatLink(true)"
              >
                <img
                  draggable="false"
                  @contextmenu.prevent
                  alt="Image embed"
                  src="@/assets/img/favicon.svg"
                  height="22"
                  style="height: 100%"
                />
              </button>
              <select
                class="btn-md"
                style="padding: 0"
                @change="(event) => formatColor(event.target.value)"
              >
                <option style="color: #444444" value="#444444">Couleur</option>
                <option style="color: #cecece" value="#CECECE">
                  Gris triste
                </option>
                <option style="color: #999999" value="#999999">
                  Gris divorce
                </option>
                <option style="color: #ff0000" value="#FF0000">Rouge</option>
                <option style="color: #cc6600" value="#CC6600">Chocolat</option>
                <option style="color: #fe9e01" value="#FE9E01">Orange</option>
                <option style="color: var(--light) f00" value="var(--light)F00">
                  Jaune
                </option>
                <option style="color: #ade76b" value="#ADE76B">Vert</option>
                <option style="color: #66cc00" value="#66CC00">Gilvert</option>
                <option style="color: #018352" value="#018352">Pelouse</option>
                <option style="color: #9412fe" value="#9412FE">
                  Violet du marié
                </option>
                <option style="color: #376da8" value="#376DA8">Bleu</option>
                <option style="color: #6699cc" value="#6699CC">
                  Bleu Chimbo
                </option>
                <option style="color: #fe81c0" value="#FE81C0">
                  Rose Dupatta
                </option>
                <option style="color: #ff3399" value="#FF3399">
                  Rose Chimbo
                </option>
                <option style="color: #e40173" value="#E40173">
                  Gurujiolet
                </option>
                <option style="color: #ffffff" value="#FFFFFF">Blanc</option>
                <option style="color: #000" value="#000000">Noir</option>
              </select>
              <select
                class="btn-md"
                style="padding: 0"
                @change="(event) => formatMultiline(event.target.value)"
              >
                <option value="##### ">Trop minuscule</option>
                <option value="#### " selected="selected">Taille</option>
                <option value="### ">Grand</option>
                <option value="## ">Fat</option>
                <option value="# ">Trop trop gros</option>
              </select>
              <button
                type="button"
                class="btn-md"
                @click="formatMultiline('> ')"
              >
                <blockquote style="margin-bottom: 0">Quote</blockquote>
              </button>
              <button
                type="button"
                class="btn-md"
                @click="formatMultiline('1. ')"
              >
                1. List
              </button>
              <button
                type="button"
                class="btn-md"
                @click="formatMultiline('- ')"
              >
                • List
              </button>
              <button type="button" class="btn-md" @click="format('<kbd>')">
                <kbd>Key</kbd>
              </button>
              <button type="button" class="btn-md" @click="format('`')">
                <code>Code</code>
              </button>
              <button type="button" class="btn-md" @click="formatCode()">
                <code>Code block</code>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <Emotes @emote="(emote) => (message += `:${emote}:`)" />
          </td>
          <td>
            <textarea
              placeholder="Message"
              required
              minlength="3"
              autocorrect="on"
              spellcheck="true"
              maxlength="60000"
              class="btn-md"
              ref="message"
              style="font-family: monospace; padding: var(--gap)"
              v-model="message"
              @focus="focusHandler"
              @select="selectionHandler"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div class="flex">
              <GlobalButton
                type="button"
                @click.prevent="this.preview = this.message"
                aria-label="Preview"
                >Prévisualiser</GlobalButton
              >
              <GlobalButton type="submit" color="green" v-if="mode == 'post'"
                ><template #prepend
                  ><img
                    draggable="false"
                    @contextmenu.prevent
                    alt="Arrow icon"
                    class="arrow jitter green"
                    aria-label="Send"
                    src="@/assets/img/arrow.svg" /></template
                >Envoyer</GlobalButton
              >
              <GlobalButton
                type="button"
                color="red"
                v-if="mode == 'edit'"
                @click="mode = 'post'"
                aria-label="Cancel"
              >
                Annuler</GlobalButton
              >
              <GlobalButton type="submit" color="green" v-if="mode == 'edit'"
                ><template #prepend
                  ><img
                    draggable="false"
                    @contextmenu.prevent
                    alt="Arrow icon"
                    class="arrow jitter green"
                    aria-label="Edit"
                    src="@/assets/img/arrow.svg" /></template
                >Editer</GlobalButton
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
<script setup lang="ts">
import Emotes from "@/components/core/Emotes.vue";
import Message from "@/components/bbs/row/Message.vue";
import { useAuthStore } from "@/stores/auth";
const auth = useAuthStore();
const user = auth.user;

// @vuese
// @group BBS


  mounted() {
    this.eventBus.on("quote", (message) => {
      this.message += message;
      if (this.$refs.message) this.$refs.message.focus();
    });
    this.eventBus.on("edit", (message) => {
      this.message = message;
      this.mode = "edit";
      if (this.$refs.message) this.$refs.message.focus();
    });
  },
  data() {
    return {
      message: "",
      title: "",
      preview: "",
      signature: true,
      markdown: false,
      selectionRange: [0, 0],
      mode: "post",
    };
  },
  const props = defineProps<{
    isTopic: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    submit() {
      if (this.mode == "post") {
        console.log("Envoyé!");
      } else console.log("Edité!");
      this.message = "";
    },
    scrollTo(anchor) {
      location.href = anchor;
    },
    focusHandler() {
      this.$refs.message.focus();
      this.select();
    },
    selectionHandler(e) {
      this.selectionRange = [
        e.currentTarget.selectionStart,
        e.currentTarget.selectionEnd,
      ];
    },
    select() {
      this.$refs.message.setSelectionRange(
        this.selectionRange[0],
        this.selectionRange[1]
      );
    },
    format(pattern) {
      this.message =
        this.message.substring(0, this.selectionRange[0]) +
        pattern +
        this.message.substring(this.selectionRange[0], this.selectionRange[1]) +
        (/<[a-z0-9]+>/.test(pattern)
          ? pattern.substring(0, 1) + "/" + pattern.substring(1)
          : pattern) +
        this.message.substring(this.selectionRange[1]);
      this.focusHandler();
    },
    formatLink(image) {
      this.message =
        this.message.substring(0, this.selectionRange[0]) +
        `${image ? "!" : ""}[${this.message.substring(
          this.selectionRange[0],
          this.selectionRange[1]
        )}](${this.message.substring(
          this.selectionRange[0],
          this.selectionRange[1]
        )})` +
        this.message.substring(this.selectionRange[1]);
      this.focusHandler();
    },
    formatCode() {
      this.message =
        this.message.substring(0, this.selectionRange[0]) +
        "\n```" +
        this.$t("format.language") +
        "\n" +
        this.message.substring(this.selectionRange[0], this.selectionRange[1]) +
        "\n```\n" +
        this.message.substring(this.selectionRange[1]);
      this.selectionRange = [
        this.selectionRange[0] + 4,
        this.selectionRange[0] + 4 + this.$t("format.language").length,
      ];
      this.focusHandler();
    },
    formatMultiline(pattern) {
      this.message =
        this.message.substring(0, this.selectionRange[0]) +
        (this.message.charAt(this.selectionRange[0] - 1) == "\n" ||
        this.selectionRange[0] == 0
          ? pattern
          : "\n" + pattern) +
        this.message
          .substring(this.selectionRange[0], this.selectionRange[1])
          .split("\n")
          .reduce((prev, curr) => `${prev}\n${pattern}${curr}`) +
        "\n" +
        this.message.substring(this.selectionRange[1]);
      this.focusHandler();
    },
    formatColor(hex) {
      this.message =
        this.message.substring(0, this.selectionRange[0]) +
        `<i style="color:${hex}">` +
        this.message.substring(this.selectionRange[0], this.selectionRange[1]) +
        "</i>" +
        this.message.substring(this.selectionRange[1]);
      this.focusHandler();
    },
  },
};
</script>
<style lang="scss" scoped>
td {
  padding: var(--sm-gap);
  vertical-align: top;
}

textarea {
  min-height: 240px;
  resize: vertical;
}

.btn-md {
  height: 28px;
}

.title {
  flex: 1;
}

.preview {
  display: none;
}

.preview.display {
  display: table;
}

.input td {
  vertical-align: middle;
}

.info {
  display: none !important;
}

@media (min-width: 800px) {
  .info {
    display: table-column !important;
  }
}
</style>
