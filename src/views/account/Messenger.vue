<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="account" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <GlobalCard color="yellow" v-if="data" justified header="mi.svg">
      <div class="flex">
        <input
          required
          minlength="3"
          maxlength="15"
          pattern="[\w\.\-_@]{3,15}"
          name="username"
          type="text"
          class="btn-md"
          autocomplete="username"
          :placeholder="$t('placeholder.username')"
        /><button type="button" class="btn-action">go</button>
      </div>
      <ScrollableContainer
        class="fullwidth"
        route="messages"
        :maxHeight="450"
        @scroll-data="(data) => (data = [...data, ...data])"
      >
        <router-link
          class="message flex"
          v-for="message of data"
          :key="message.user.id"
          :to="'/messenger/' + message.user.id"
          :class="{ active: message.new }"
        >
          <div
            class="tiz-portrait"
            :style="{ background: hashColor(message.user.name) }"
          >
            <GlobalAvatar
              :avatar="message.user.look.avatar"
              :emote="message.user.look.emote"
              :hat="message.user.look.hat"
              :body="message.user.look.body"
              :shoe="message.user.look.shoe"
              :item0="message.user.look.item0"
              :item1="message.user.look.item1"
              :item2="message.user.look.item2"
            />
          </div>
          <div
            class="flex col"
            style="
              justify-content: space-evenly;
              padding: 6px;
              width: calc(100% - 50px);
            "
          >
            <div>
              <h3>
                <UserLink :user="message.user" /><span
                  style="
                    float: right;
                    font-weight: normal;
                    font-size: var(--font-size);
                  "
                  >{{ formatDate(message.date) }}</span
                >
              </h3>
            </div>
            <span>{{ message.content.slice(0, 64) }}</span>
          </div>
        </router-link>
      </ScrollableContainer>
    </GlobalCard>
    <template #right-column></template>
  </GlobalContainer>
</template>
<script setup lang="ts">
import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import ScrollableContainer from "../../components/core/ScrollableContainer.vue";
const locales = { fr, enGB };

// @vuese
// @group View/Account
// Messenger page
const data = ref<any>(null);

function formatDate(date) {
      return formatDistanceToNowStrict(new Date(date), {
        locale: locales[navigator.language.split("-")[0]],
        addSuffix: true,
      });
    },
function hashColor(str) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      var colour = "#";
      for (i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xff;
        colour += ("00" + value.toString(16)).substr(-2);
      }
      return colour;
    },
  },
// /api/messenger.json
// meta title section.messenger
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.message {
  text-decoration: none;
  color: var(--text);
  font-weight: normal;
  overflow: hidden;
}

.tiz-portrait {
  margin: 6px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  float: left;
  box-shadow: 0 1px 1px 1px #0005;
}

.message::after,
.message .tiz::after {
  content: "";
  clear: both;
  display: table;
}

.message:hover {
  background: var(--selected-dark-card);
}

.active {
  background: var(--selected-dark-card);
}
</style>
