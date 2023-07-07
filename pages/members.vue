<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries category="members" />
        </div>
      </Card>
      <Rules bot />
    </template>
    <Card header="new.webp" bg="new.png" :height="70" color="blue">
      <div class="flex" style="justify-content: space-evenly">
        <div v-for="user of data.new" :key="user.id" class="flex col">
          <img
            src="@/assets/img/member/spotlight.svg"
            alt="Spotlight"
            draggable="false"
            height="93"
            width="100"
            @contextmenu.prevent
          /><Avatar
            :avatar="user.look.avatar"
            :emote="user.look.emote"
            :hat="user.look.hat"
            :body="user.look.body"
            :shoe="user.look.shoe"
            :item0="user.look.item0"
            :item1="user.look.item1"
            :item2="user.look.item2"
          />
          <UserLink :user="user" />
          <span
            >{{ $t('members.memberNumber') }}<b>{{ user.id }}</b></span
          >
        </div>
      </div>
      <br />
      {{ $t('members.lastMembers') }}
      <br />
      <NuxtLink to="/book">
        {{ $t('members.showList') }}
      </NuxtLink>
    </Card>
    <Card
      header="popularity_blue.webp"
      bg="popularity_blue.png"
      :height="75"
      color="blue"
    >
      <div class="flex" style="justify-content: space-evenly">
        <div v-for="user of data.popularity" :key="user.id" class="flex col">
          <img
            src="@/assets/img/member/spotlight.svg"
            alt="Spotlight"
            draggable="false"
            height="93"
            width="100"
            @contextmenu.prevent
          /><Avatar
            :avatar="user.look.avatar"
            :emote="user.look.emote"
            :hat="user.look.hat"
            :body="user.look.body"
            :shoe="user.look.shoe"
            :item0="user.look.item0"
            :item1="user.look.item1"
            :item2="user.look.item2"
          />
          <UserLink :user="user" />
          <i18n-t scope="global" keypath="members.popularity.withPoints">
            <template #score>
              <b>{{ user.score }}</b>
            </template>
          </i18n-t>
        </div>
      </div>
      <br />
      {{ $t('members.popularity.sub') }}
      <br />
      <NuxtLink to="/popularity">
        {{ $t('members.popularity.link') }}
      </NuxtLink>
    </Card>
    <Card header="wedding_blue.webp" bg="wedding_blue.png" color="blue">
      <div class="flex" style="justify-content: space-evenly">
        <div
          v-for="couple of data.wedding"
          :key="couple.user1.id"
          class="flex col"
          style="align-items: center"
        >
          <img
            src="@/assets/img/member/spotlight.svg"
            alt="Spotlight"
            draggable="false"
            height="93"
            width="100"
            @contextmenu.prevent
          />
          <div class="flex" style="justify-content: center">
            <Avatar
              :avatar="couple.user1.look.avatar"
              emote="luv"
              :hat="couple.user1.look.hat"
              :body="couple.user1.look.body"
              :shoe="couple.user1.look.shoe"
              :item0="couple.user1.look.item0"
              :item1="couple.user1.look.item1"
              :item2="couple.user1.look.item2"
            /><Avatar
              :avatar="couple.user2.look.avatar"
              emote="luv"
              :hat="couple.user2.look.hat"
              :body="couple.user2.look.body"
              :shoe="couple.user2.look.shoe"
              :item0="couple.user2.look.item0"
              :item1="couple.user2.look.item1"
              :item2="couple.user2.look.item2"
            />
          </div>
          <span>
            <UserLink :user="couple.user1" /> &amp;
            <UserLink :user="couple.user2"
          /></span>
        </div>
      </div>
      <br />
      {{ $t('members.weddings.sub') }}
      <br />
      <NuxtLink to="/weddings">
        {{ $t('members.weddings.link') }}
      </NuxtLink>
    </Card>
    <template #right-column>
      <Card color="blue">
        <template #button>
          <Button type="button" icon="search.svg"> Chercher </Button>
        </template>
        <form class="flex fullwidth" @submit.prevent="searchUser()">
          <input
            v-model="userSearch"
            required
            minlength="3"
            maxlength="15"
            pattern="^[\w._@\-]{3,15}$"
            name="username"
            type="text"
            class="btn-md"
            autocomplete="username"
            aria-label="Username"
            :placeholder="$t('placeholder.username')"
          /><button type="submit" class="btn-action">
            {{ $t('button.go') }}
          </button>
        </form>
        <br />
        <form class="flex fullwidth" @submit.prevent="searchGroup()">
          <input
            v-model="groupSearch"
            required
            minlength="3"
            maxlength="15"
            name="group"
            type="text"
            class="btn-md"
            autocomplete="group"
            aria-label="Group"
            :placeholder="$t('placeholder.group')"
          /><button type="submit" class="btn-action">
            {{ $t('button.go') }}
          </button>
        </form>
      </Card>
    </template>
  </Container>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const { data } = await useFetch<any>('https://chimboz.fr/api/members');
const userSearch = ref('');
const groupSearch = ref('');

async function searchUser() {
  router.push(
    `/book/${
      (await useFetch<any>(`book/search/${userSearch.value}/search`)).data
        .value!.mid
    }`
  );
}

async function searchGroup() {
  router.push(
    `/groups/${
      (await useFetch<any>(`groups/search/${groupSearch.value}`)).data.value!
        .mid
    }`
  );
}

definePageMeta({
  category: 'members',
  section: 'members',
});
const { t } = useI18n();
useHead({ title: computed(() => t('members')) });
</script>
<style lang="scss" scoped>
img[src*='spotlight'] {
  margin-bottom: -70px;
  pointer-events: none;
}
</style>
