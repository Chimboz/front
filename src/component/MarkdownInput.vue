<template>
  <table class="bbs preview" :class="{ display: this.message }">
    <colgroup>
      <col width="100" class="info" />
      <col width="100%" />
    </colgroup>
    <thead>
      <tr>
        <th valign="top" colspan="2" height="25" nowrap="nowrap">
          Prévisualisation
        </th>
      </tr>
    </thead>
    <tbody>
      <Message
        :message="{
          author: this.user,
          content: this.message,
          date: Date.now(),
          id: 'reply',
          new: true,
          signature: this.signature,
          title: this.title
        }"
        :separator="false"
      />
    </tbody>
  </table>
  <br v-if="this.message" />
  <form @submit.prevent="submit">
    <table class="bbs input">
      <colgroup>
        <col width="100" />
        <col width="100%" />
      </colgroup>
      <thead>
        <tr>
          <th valign="top" colspan="2" height="25" nowrap="nowrap">
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
          <td>
            <b>Corps du message&nbsp;:</b><br />
            Votre saisie ne doit pas contenir plus de 60000 caractère(s).
          </td>
          <td class="markdown-body" style="vertical-align: middle;">
            <div class="flex hstack">
              <button class="btn-md" @click="format('**')"><b>B</b></button
              ><button class="btn-md" @click="format('*')"><i>i</i></button
              ><button class="btn-md" @click="format('<u>')">
                <u>u</u>
              </button>
              <button class="btn-md" @click="format('<s>')">
                <s>s</s>
              </button>
              <button class="btn-md" @click="formatLink(false)">
                <a href="#" @click.prevent>a</a>
              </button>
              <button class="btn-md" @click="formatLink(true)">
                <img
                  draggable="false"
                  @contextmenu.prevent
                  alt="Image embed"
                  src="@/asset/img/favicon.svg"
                  height="22"
                  style="height: 100%"
                />
              </button>
              <select
                class="btn-md"
                @change="(event) => formatColor(event.target.value)"
              >
                <option
                  style="color: black;background-color: #fafafa;"
                  value="#444444"
                >
                  Couleur
                </option>
                <option
                  style="color: #cecece;background-color: #fafafa;"
                  value="#CECECE"
                >
                  Gris triste
                </option>
                <option
                  style="color: #999999;background-color: #fafafa;"
                  value="#999999"
                >
                  Gris divorce
                </option>
                <option
                  style="color: #ff0000;background-color: #fafafa;"
                  value="#FF0000"
                >
                  Rouge
                </option>
                <option
                  style="color: #cc6600;background-color: #fafafa;"
                  value="#CC6600"
                >
                  Chocolat
                </option>
                <option
                  style="color: #fe9e01;background-color: #fafafa;"
                  value="#FE9E01"
                >
                  Orange
                </option>
                <option
                  style="color: #ffff00;background-color: #fafafa;"
                  value="#FFFF00"
                >
                  Jaune
                </option>
                <option
                  style="color: #ade76b;background-color: #fafafa;"
                  value="#ADE76B"
                >
                  Vert
                </option>
                <option
                  style="color: #66cc00;background-color: #fafafa;"
                  value="#66CC00"
                >
                  Gilvert
                </option>
                <option
                  style="color: #018352;background-color: #fafafa;"
                  value="#018352"
                >
                  Pelouse
                </option>
                <option
                  style="color: #9412fe;background-color: #fafafa;"
                  value="#9412FE"
                >
                  Violet du marié
                </option>
                <option
                  style="color: #376da8;background-color: #fafafa;"
                  value="#376DA8"
                >
                  Bleu
                </option>
                <option
                  style="color: #6699cc;background-color: #fafafa;"
                  value="#6699CC"
                >
                  Bleu Chimbo
                </option>
                <option
                  style="color: #fe81c0;background-color: #fafafa;"
                  value="#FE81C0"
                >
                  Rose Dupatta
                </option>
                <option
                  style="color: #ff3399;background-color: #fafafa;"
                  value="#FF3399"
                >
                  Rose Chimbo
                </option>
                <option
                  style="color: #e40173;background-color: #fafafa;"
                  value="#E40173"
                >
                  Gurujiolet
                </option>
                <option
                  style="color: white;background-color: #fafafa;"
                  value="#FFFFFF"
                >
                  Blanc
                </option>
                <option
                  style="color: black;background-color: #fafafa;"
                  value="#000000"
                >
                  Noir
                </option>
              </select>
              <select
                class="btn-md"
                @change="(event) => formatMultiline(event.target.value)"
              >
                <option value="##### ">Trop minuscule</option>
                <option value="#### " selected="selected">Taille</option>
                <option value="### ">Grand</option>
                <option value="## ">Fat</option>
                <option value="# ">Trop trop gros</option>
              </select>
              <button class="btn-md" @click="formatMultiline('> ')">
                <blockquote style="margin-bottom: 0">
                  Quote
                </blockquote>
              </button>
              <button class="btn-md" @click="formatMultiline('1. ')">
                1. List
              </button>
              <button class="btn-md" @click="formatMultiline('- ')">
                • List
              </button>
              <button class="btn-md" @click="format('<kbd>')">
                <kbd>Key</kbd>
              </button>
              <button class="btn-md" @click="format('`')">
                <code>Code</code>
              </button>
              <button class="btn-md" @click="formatCode()">
                <pre style="padding: 2px;margin: 0;color: #fff">Code block</pre>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <Emotes />
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
              v-model="message"
              @focus="focusHandler"
              @select="selectionHandler"
            />
          </td>
        </tr>
        <tr>
          <td>
            <b>Options&nbsp;:</b><br />
            Les BBCodes sont activés [img] est activé [url] est activé Les
            smileys sont activés
          </td>
          <td>
            <input
              type="checkbox"
              id="markdown"
              name="markdown"
              v-model="markdown"
            />
            <label for="markdown"
              >&#32;Désactiver le Markdown et les smileys</label
            ><br /><input
              type="checkbox"
              id="signature"
              name="signature"
              v-model="signature"
            />
            <label for="signature"
              >&#32;Attacher ma signature (les signatures peuvent être modifiées
              sur le tchat)</label
            >
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <Button type="submit" color="green"
              ><template #prepend
                ><img
                  draggable="false"
                  @contextmenu.prevent
                  alt="Arrow icon"
                  class="arrow jitter green"
                  src="@/asset/img/arrow.svg"/></template
              >Envoyer</Button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
<script>
import Emotes from "@/component/Emotes.vue";
import Message from "@/component/bbs/row/Message.vue";
import { mapState } from "vuex";

export default {
  name: "MarkdownInput",
  components: { Emotes, Message },
  data() {
    return {
      message: "",
      title: "",
      signature: true,
      markdown: false,
      selectionRange: [0, 0]
    };
  },
  props: {
    isTopic: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  computed: {
    ...mapState("auth", ["user"])
  },
  methods: {
    submit() {
      console.log("Envoyé!");
    },
    scrollTo(anchor) {
      location.href = anchor;
    },
    resetSelection(length) {
      this.selectionRange = [
        this.selectionRange[1] + length,
        this.selectionRange[1] + length
      ];
      this.$refs.message.focus();
    },
    focusHandler() {
      this.$refs.message.focus();
      this.$refs.message.setSelectionRange(
        this.selectionRange[0],
        this.selectionRange[1]
      );
    },
    selectionHandler(e) {
      this.selectionRange = [
        e.currentTarget.selectionStart,
        e.currentTarget.selectionEnd
      ];
    },
    select() {
      this.$refs.message.setSelectionRange(
        this.selectionRange[0],
        this.selectionRange[1]
      );
    },
    format(pattern) {
      this.$refs.message.setRangeText(
        pattern +
          this.message.substring(
            this.selectionRange[0],
            this.selectionRange[1]
          ) +
          (/<[a-z0-9]+>/.test(pattern)
            ? pattern.substring(0, 1) + "/" + pattern.substring(1)
            : pattern)
      );
      this.resetSelection(
        pattern.length * 2 + (/<[a-z0-9]+>/.test(pattern) ? 1 : 0)
      );
    },
    formatLink(image) {
      this.$refs.message.setRangeText(
        `${image ? "!" : ""}[${this.message.substring(
          this.selectionRange[0],
          this.selectionRange[1]
        )}](${this.message.substring(
          this.selectionRange[0],
          this.selectionRange[1]
        )})`
      );
      this.selectionRange = [
        this.selectionRange[0] + 1 + +image,
        this.selectionRange[1] + 1 + +image
      ];
      this.focusHandler();
    },
    formatCode() {
      this.$refs.message.setRangeText(
        "\n```" +
          this.$t("format.language") +
          "\n" +
          this.message.substring(
            this.selectionRange[0],
            this.selectionRange[1]
          ) +
          "\n```\n"
      );
      this.selectionRange = [
        this.selectionRange[0] + 4,
        this.selectionRange[0] + 4 + this.$t("format.language").length
      ];
      this.focusHandler();
    },
    formatMultiline(pattern) {
      this.$refs.message.setRangeText(
        (this.message.charAt(this.selectionRange[0] - 1) == "\n" ||
        this.selectionRange[0] == 0
          ? pattern
          : "\n" + pattern) +
          this.message
            .substring(this.selectionRange[0], this.selectionRange[1])
            .split("\n")
            .reduce((prev, curr) => `${prev}\n${pattern}${curr}`) +
          "\n"
      );
      this.resetSelection(
        pattern.length *
          this.message
            .substring(this.selectionRange[0], this.selectionRange[1])
            .split("\n").length
      );
    },
    formatColor(hex) {
      this.$refs.message.setRangeText(
        `<span style="color:${hex}">` +
          this.message.substring(
            this.selectionRange[0],
            this.selectionRange[1]
          ) +
          "</span>"
      );
      this.resetSelection(35);
    }
  }
};
</script>
<style lang="scss" scoped>
td {
  padding: 6px;
  vertical-align: top;
}

textarea {
  width: 100%;
  min-height: 240px;
  resize: vertical;
  font-size: 11px;
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
