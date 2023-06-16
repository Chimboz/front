<template>
  <table v-if="preview" class="bbs preview mb-3">
    <colgroup>
      <col width="100" class="info" />
      <col width="100%" />
    </colgroup>
    <thead>
      <tr>
        <th valign="top" colspan="2" nowrap="nowrap">Prévisualisation</th>
      </tr>
    </thead>
    <tbody>
      <Message
        :message="{
          author: user,
          content: preview,
          date: Date.now(),
          id: 'reply',
          new: true,
          signature: true,
          title,
        }"
        :separator="false"
      />
    </tbody>
  </table>
  <form @submit.prevent="submit">
    <table class="bbs input">
      <colgroup>
        <col width="100" />
        <col width="100%" />
      </colgroup>
      <thead>
        <tr>
          <th valign="top" colspan="2" nowrap="nowrap">
            {{ isTopic ? 'Créer un sujet' : 'Répondre au sujet' }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <label for="subject"><b>Sujet</b></label>
          </td>
          <td>
            <input
              id="subject"
              v-model="title"
              aria-label="Subject"
              :required="isTopic"
              :minlength="isTopic ? '3' : '0'"
              maxlength="100"
              name="title"
              class="btn-md"
              type="text"
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
              <button type="button" class="btn-md" @click="format('~')">
                <del>s</del>
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
                  alt="Image embed"
                  src="@/assets/img/favicon.svg"
                  height="22"
                  style="height: 100%"
                  @contextmenu.prevent
                />
              </button>
              <button
                type="button"
                class="btn-md"
                @click="formatAlign('center')"
              >
                <AlignCenter />
              </button>
              <button
                type="button"
                class="btn-md"
                @click="formatAlign('right')"
              >
                <AlignRight />
              </button>
              <select
                class="btn-md"
                aria-label="Color"
                style="padding: 0"
                @change="(event) => formatColor((event.target as SelectHTMLAttributes).value)"
              >
                <option value="">Couleur</option>
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
                aria-label="Size"
                @change="(event) => formatMultiline((event.target as SelectHTMLAttributes).value)"
              >
                <option value="##### ">Trop minuscule</option>
                <option value="#### " selected>Taille</option>
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
              <button
                type="button"
                class="btn-md"
                @click="formatMultiline('- [ ] ')"
              >
                Task
              </button>
              <button type="button" class="btn-md" @click="format('`')">
                <code>Code</code>
              </button>
              <button type="button" class="btn-md" @click="formatCode()">
                <code style="background: #161b22; color: #c9d1d9"
                  >Code block</code
                >
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <Emotes @emote="(emote: string) => (message += `:${emote}:`)" />
          </td>
          <td>
            <textarea
              ref="textarea"
              v-model="message"
              placeholder="Message"
              required
              minlength="3"
              autocorrect="on"
              spellcheck="true"
              maxlength="60000"
              class="btn-md"
              aria-label="Message"
              style="font-family: monospace; padding: var(--gap)"
              @focus="focusHandler"
              @select="selectionHandler"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div class="flex">
              <Button
                type="button"
                aria-label="Preview"
                @click.prevent="preview = message"
              >
                Prévisualiser
              </Button>
              <Button v-if="mode === 'post'" type="submit" color="green">
                <template #prepend>
                  <img
                    draggable="false"
                    alt="Arrow icon"
                    class="arrow jitter green"
                    aria-label="Send"
                    src="@/assets/img/arrow.svg"
                    @contextmenu.prevent
                  /> </template
                >Envoyer
              </Button>
              <Button
                v-if="mode === 'edit'"
                type="button"
                color="red"
                aria-label="Cancel"
                @click="mode = 'post'"
              >
                Annuler
              </Button>
              <Button v-if="mode === 'edit'" type="submit" color="green">
                <template #prepend>
                  <img
                    draggable="false"
                    alt="Arrow icon"
                    class="arrow jitter green"
                    aria-label="Edit"
                    src="@/assets/img/arrow.svg"
                    @contextmenu.prevent
                  /> </template
                >Editer
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
<script setup lang="ts">
import { SelectHTMLAttributes } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { AlignRight, AlignCenter } from 'lucide-vue-next';
import useAuthStore from '@/stores/auth';

const { $eventBus } = useNuxtApp();
const route = useRoute();
const router = useRouter();
const auth = useAuthStore();
const user: any = computed(() => ({
  ...auth.user,
  name: auth.user!.pseudo,
  color: '',
  look: {
    avatar: 0,
    emote: auth.user!.avatar_mood,
    hat: +auth.user!.avatar_design.split(';')[1],
    body: +auth.user!.avatar_design.split(';')[2],
    shoe: +auth.user!.avatar_design.split(';')[3],
    item0: +auth.user!.avatar_design.split(';')[4],
    item1: +auth.user!.avatar_design.split(';')[5],
    item2: +auth.user!.avatar_design.split(';')[6],
  },
}));

const textarea = ref<null | HTMLTextAreaElement>(null);
const message = ref('');
const title = ref('');
const preview = ref('');
const selectionRange = ref([0, 0]);
const mode = ref('post');
const { t } = useI18n();
let id = 0;

const props = defineProps<{
  isTopic?: boolean;
}>();

$eventBus.on('quote', (quotedMessage: string) => {
  if (message.value.slice(-1) === '\n' || message.value.slice(-1) === '') {
    message.value += quotedMessage;
  } else {
    message.value += `\n${quotedMessage}`;
  }
  if (textarea.value!) {
    textarea.value!.focus();
  }
});
$eventBus.on('edit', (editedMessage: any) => {
  message.value = editedMessage.content;
  id = editedMessage.id;
  mode.value = 'edit';
  if (textarea.value!) {
    textarea.value!.focus();
  }
});

async function submit() {
  if (props.isTopic) {
    const { data } = await useFetch<any, Error, string, 'post'>('bbs/topic', {
      method: 'post',
      body: {
        bbcode: false,
        signature: true,
        edit: 0,
        message: message.value,
        param: route.params.id,
        title: title.value,
      },
    });
    if (data.value) {
      router.push(`/bbs/${route.params.forum}-${data.value.id}-1`);
    }
  } else {
    if (mode.value === 'post') {
      const { data } = await useFetch<any, Error, string, 'post'>('bbs/post', {
        method: 'post',
        body: {
          bbcode: false,
          signature: true,
          edit: 0,
          message: message.value,
          param: route.params.topic,
          title: '',
        },
      });
      router.push(
        `/bbs/${route.params.forum}-${route.params.topic}-${route.params.page}#${data.value.add.id}`
      );
    }
    if (mode.value === 'edit') {
      useFetch('bbs/edit', {
        method: 'post',
        body: {
          bbcode: false,
          signature: true,
          edit: id,
          message: message.value,
          param: route.params.topic,
          title: '',
        },
      });
      router.push(
        `/bbs/${route.params.forum}-${route.params.topic}-${route.params.page}#${id}`
      );
    }
  }
  message.value = '';
}

function select() {
  textarea.value!.setSelectionRange(
    selectionRange.value[0],
    selectionRange.value[1]
  );
}

function focusHandler() {
  textarea.value!.focus();
  select();
}
function selectionHandler(e: any) {
  selectionRange.value = [
    e.currentTarget.selectionStart,
    e.currentTarget.selectionEnd,
  ];
}

function format(pattern: string) {
  message.value =
    message.value.substring(0, selectionRange.value[0]) +
    pattern +
    message.value.substring(selectionRange.value[0], selectionRange.value[1]) +
    (/<[a-z0-9]+>/.test(pattern)
      ? `${pattern.substring(0, 1)}/${pattern.substring(1)}`
      : pattern) +
    message.value.substring(selectionRange.value[1]);
  focusHandler();
}
function formatLink(image: boolean) {
  message.value = `${message.value.substring(0, selectionRange.value[0])}${
    image ? '!' : ''
  }[${message.value.substring(
    selectionRange.value[0],
    selectionRange.value[1]
  )}](${message.value.substring(
    selectionRange.value[0],
    selectionRange.value[1]
  )})${message.value.substring(selectionRange.value[1])}`;
  focusHandler();
}
function formatCode() {
  message.value = `${message.value.substring(
    0,
    selectionRange.value[0]
  )}\n\`\`\`${t('format.language')}\n${message.value.substring(
    selectionRange.value[0],
    selectionRange.value[1]
  )}\n\`\`\`\n${message.value.substring(selectionRange.value[1])}`;
  selectionRange.value = [
    selectionRange.value[0] + 4,
    selectionRange.value[0] + 4 + t('format.language').length,
  ];
  focusHandler();
}
function formatMultiline(pattern: string) {
  message.value = `${
    message.value.substring(0, selectionRange.value[0]) +
    (message.value.charAt(selectionRange.value[0] - 1) === '\n' ||
    selectionRange.value[0] === 0
      ? pattern
      : `\n${pattern}`) +
    message.value
      .substring(selectionRange.value[0], selectionRange.value[1])
      .split('\n')
      .reduce((prev, curr) => `${prev}\n${pattern}${curr}`)
  }\n${message.value.substring(selectionRange.value[1])}`;
  focusHandler();
}
function formatColor(hex: string) {
  if (hex) {
    message.value = `${message.value.substring(
      0,
      selectionRange.value[0]
    )}<color ${hex}>${message.value.substring(
      selectionRange.value[0],
      selectionRange.value[1]
    )}</color>${message.value.substring(selectionRange.value[1])}`;
    focusHandler();
  }
}

function formatAlign(align: 'center' | 'right') {
  message.value = `${message.value.substring(
    0,
    selectionRange.value[0]
  )}<${align}>${message.value.substring(
    selectionRange.value[0],
    selectionRange.value[1]
  )}</${align}>${message.value.substring(selectionRange.value[1])}`;
  focusHandler();
}
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
