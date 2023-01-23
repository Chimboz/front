<template>
  <tr>
    <td style="text-align: center" valign="middle" height="50">
      <img
        draggable="false"
        :src="
          asset(
            `img/bbs/folder${topic.sticky ? '_sticky' : ''}${
              topic.announce && !topic.sticky ? '_announce' : ''
            }${topic.new && !topic.announce && !topic.sticky ? '_new' : ''}${
              topic.locked && !topic.announce && !topic.sticky ? '_lock' : ''
            }${
              topic.reply > 9 &&
              !topic.announce &&
              !topic.sticky &&
              !topic.locked
                ? '_hot'
                : ''
            }.svg`
          )
        "
        alt="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
        title="Ce BBS est verrouillé, tu ne peux pas poster, ni répondre, ni éditer les sujets."
        @contextmenu.prevent
      >
    </td>
    <td width="100%" height="50" style="text-align: left">
      <NuxtLink :to="`/bbs/${$route.params.forum}-${topic.id}-1`">
        {{
          topic.title
        }}
      </NuxtLink>
      <br>
      <Pagination
        v-if="topic.reply > 9"
        :total="Math.floor(topic.reply / 10 + 1)"
        :callback="(page: number) => `/bbs/${$route.params.forum}-${topic.id}-${page}`"
      />
    </td>
    <td class="row2" style="text-align: center" valign="middle" height="50">
      {{ topic.reply }}
    </td>
    <td class="row2" style="text-align: center" valign="middle" height="50">
      <LinkUser :user="topic.author" ellipsis />
    </td>
    <td class="row2" style="text-align: center" valign="middle" height="50">
      {{ topic.view }}
    </td>
    <td class="row2" style="text-align: center" valign="middle" height="50">
      <div>{{ $distanceToNow(topic.last_msg.date) }}</div>
      <LinkUser :user="topic.last_msg.author" />
      &nbsp;»&nbsp;
      <NuxtLink
        :to="`/bbs/${$route.params.forum}-${topic.id}-${Math.floor(
          topic.reply / 10 + 1
        )}#p${topic.last_msg.msgid}`"
      >
        <img
          draggable="false"
          :src="asset(`img/bbs/msg${topic.new ? '_new' : ''}.svg`)"
          alt="Voir le dernier message"
          title="Voir le dernier message"
          @contextmenu.prevent
        >
      </NuxtLink>
    </td>
  </tr>
  <tr v-if="separator">
    <td colspan="6">
      <hr>
    </td>
  </tr>
</template>
<script setup lang="ts">




withDefaults(
  defineProps<{
    topic: any;
    separator: boolean;
  }>(),
  { separator: true }
)
</script>
