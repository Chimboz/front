<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Members" />
        </div>
      </Card>
      <Rules bot />
    </template>
    <Card header="wedding.webp" left bg="wedding.gif">
      <div class="flex centered hstack">
        <NuxtLink to="#today" class="btn-sm blue-bg">
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          >&nbsp;{{ $t('wedding.today.link') }}
        </NuxtLink>
        <NuxtLink to="#divorces" class="btn-sm blue-bg">
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          >&nbsp;{{ $t('wedding.divorces.link') }}
        </NuxtLink>
        <NuxtLink to="#holding" class="btn-sm blue-bg">
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          >&nbsp;{{ $t('wedding.holding.link') }}
        </NuxtLink>
        <NuxtLink to="#broken" class="btn-sm blue-bg">
          <img
            draggable="false"
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
            @contextmenu.prevent
          >&nbsp;{{ $t('wedding.broken.link') }}
        </NuxtLink>
      </div>
      <br>
      <span v-html="$t('wedding.description')" />
    </Card>
    <Card id="last">
      <template #header>
        {{ $t('wedding.last') }}
      </template>
      {{ $t('date.on') }} <b>{{ $format(data.last.date, 'PPp') }}</b>, <b>{{ data.last.id }}</b><sup>{{ $t('score.nth') }}</sup> {{ $t('wedding.name') }}. <br><br>
      <div class="wedding">
        <img
          draggable="false"
          alt="Star"
          src="@/assets/img/social/wedding/wedding.svg"
          @contextmenu.prevent
        >
        <Avatar
          class="witness witness1"
          :avatar="data.last.witness1.look.avatar"
          emote="kawai"
          :hat="data.last.witness1.look.hat"
          :body="data.last.witness1.look.body"
          :shoe="data.last.witness1.look.shoe"
          :item0="data.last.witness1.look.item0"
          :item1="data.last.witness1.look.item1"
          :item2="data.last.witness1.look.item2"
        />
        <Avatar
          class="married married1"
          :avatar="data.last.married1.look.avatar"
          emote="luv"
          :hat="data.last.married1.look.hat"
          :body="data.last.married1.look.body"
          :shoe="data.last.married1.look.shoe"
          :item0="data.last.married1.look.item0"
          :item1="data.last.married1.look.item1"
          :item2="data.last.married1.look.item2"
        />
        <Avatar
          class="married married2"
          :avatar="data.last.married2.look.avatar"
          emote="luv"
          :hat="data.last.married2.look.hat"
          :body="data.last.married2.look.body"
          :shoe="data.last.married2.look.shoe"
          :item0="data.last.married2.look.item0"
          :item1="data.last.married2.look.item1"
          :item2="data.last.married2.look.item2"
        />
        <Avatar
          class="witness witness2"
          :avatar="data.last.witness2.look.avatar"
          emote="kawai"
          :hat="data.last.witness2.look.hat"
          :body="data.last.witness2.look.body"
          :shoe="data.last.witness2.look.shoe"
          :item0="data.last.witness2.look.item0"
          :item1="data.last.witness2.look.item1"
          :item2="data.last.witness2.look.item2"
        />
      </div>
      <br>
      {{ $t('wedding.wishes') }}<br>
      <LinkUser :user="data.last.married1" /> &amp;
      <LinkUser :user="data.last.married2" /><br>
      <span v-html="$t('wedding.marriedByGuruji')" /><br>
      <LinkUser :user="data.last.witness1" /> &amp;
      <LinkUser :user="data.last.witness2" />.
    </Card>
    <Card id="today">
      <template #header>
        <img
          src="@/assets/img/social/wedding/mariage2.webp"
          alt="Marriage icon"
          width="143"
          height="64"
        ><br>{{ $t('wedding.today.title') }}
      </template>
      {{ $t('date.Today') }}, <b>{{ $format(Date.now(), 'PP') }}</b>, <b>{{ data.today.length }}</b> {{ $t('wedding.today.celebrated') }}.
      <br><br>
      <div v-for="wedding of data.today" :key="wedding.id" class="fullwidth">
        {{ $t('date.On') }} <b>{{ $format(wedding.date, 'PPp') }}</b>,<br>
        <LinkUser :user="wedding.married1" /> &amp;
        <LinkUser :user="wedding.married2" /> {{ $t('wedding.gotMarried')
        }}<br>
        {{ $t('wedding.gotWitnessed') }} <LinkUser :user="wedding.witness1" />
        {{ $t('wedding.andOf') }} <LinkUser :user="wedding.witness2" /><br>
        <i><NuxtLink :to="'/weddings/' + wedding.id">{{ wedding.id }}</NuxtLink><sup>{{ $t('score.nth') }}</sup> {{ $t('wedding.name') }}</i>
      </div>
    </Card>
    <Card id="holding">
      <template #header>
        <img
          src="@/assets/img/social/wedding/mariage2.webp"
          alt="Marriage icon"
          width="143"
          height="64"
        ><br>
        {{ $t('wedding.holding.title') }}
      </template>
      <template #subtitle>
        {{ $t('wedding.holding.subtitle') }}
      </template>
      <table class="fullwidth">
        <colgroup>
          <col width="30">
          <col width="100%">
          <col width="50">
          <col width="50">
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>{{ $t('wedding.table.couple') }}</th>
            <th>{{ $t('wedding.table.marriage') }}</th>
            <th>{{ $t('wedding.table.days') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(wedding, index) in data.best" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <LinkUser :user="wedding.married1" /> et
              <LinkUser :user="wedding.married2" />
            </td>
            <td>
              <i>{{ $t('no')
              }}<NuxtLink :to="'/weddings/' + wedding.id">{{
                wedding.id
              }}</NuxtLink></i>
            </td>
            <td>
              <b>{{ $distance(Date.now(), wedding.date) }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <Card id="divorces">
      <template #header>
        <img
          src="@/assets/img/social/wedding/divorce2.webp"
          alt="Divorce icon"
          width="143"
          height="64"
        ><br>
        {{ $t('wedding.divorces.title') }}
      </template>
      <template #subtitle>
        {{ $t('wedding.divorces.subtitle') }}
      </template>
      <b>{{ data.divorce.length }}</b> {{ $t('wedding.divorces.broken')
      }}<br><br>
      <table class="fullwidth">
        <colgroup>
          <col width="100">
          <col width="100%">
          <col width="50">
          <col width="50">
        </colgroup>
        <thead>
          <tr>
            <th>{{ $t('wedding.table.hour') }}</th>
            <th>{{ $t('wedding.table.brokenCouple') }}</th>
            <th>{{ $t('wedding.table.marriage') }}</th>
            <th>{{ $t('wedding.table.days') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(wedding, index) in data.divorce" :key="index">
            <td>{{ $format(wedding.dateend, 'p') }}</td>
            <td>
              <LinkUser :user="wedding.married1" />
              {{ $t('wedding.divorces.brokeWith') }}
              <LinkUser :user="wedding.married2" />
            </td>
            <td>
              <i>{{ $t('no')
              }}<NuxtLink :to="'/weddings/' + wedding.id">{{
                wedding.id
              }}</NuxtLink></i>
            </td>
            <td>
              <b>{{ $distance(wedding.datebegin, wedding.dateend) }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <Card id="broken">
      <template #header>
        <img
          src="@/assets/img/social/wedding/mariage2.webp"
          alt="Marriage icon"
          width="143"
          height="64"
        ><br>{{ $t('wedding.broken.title') }}
      </template>
      <template #subtitle>
        {{ $t('wedding.broken.subtitle') }}
      </template>
      <table class="fullwidth">
        <colgroup>
          <col width="30">
          <col width="100%">
          <col width="50">
          <col width="50">
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>{{ $t('wedding.table.couple') }}</th>
            <th>{{ $t('wedding.table.marriage') }}</th>
            <th>{{ $t('wedding.table.days') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(wedding, index) in data.broken" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <LinkUser :user="wedding.married1" /> et
              <LinkUser :user="wedding.married2" />
            </td>
            <td>
              <i>{{ $t('no')
              }}<NuxtLink :to="'/weddings/' + wedding.id">{{
                wedding.id
              }}</NuxtLink></i>
            </td>
            <td>
              <b>{{ $distance(wedding.datebegin, wedding.dateend) }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <template #right-column>
      <Card
        header="ensavoirplus.webp"
        :width="154"
        :height="34"
        top
        color="blue"
      >
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >
        <i18n-t keypath="wedding.rightColumn.gurujiCelebrated">
          <template #Guruji>
            <b>Guruji</b>
          </template>
          <template #total>
            <b>{{ data.stats.total }}</b>
          </template>
        </i18n-t>
        <br><br>
        <img
          src="@/assets/img/social/wedding/divorce.webp"
          alt="Divorce"
          draggable="false"
          width="56"
          height="39"
          @contextmenu.prevent
        ><br>
        <i18n-t keypath="wedding.rightColumn.divorced">
          <template #total>
            <b>{{ data.stats.divorce }}</b>
          </template>
        </i18n-t><br><br>
        <img
          src="@/assets/img/social/wedding/mariage.webp"
          alt="Wedding"
          draggable="false"
          width="56"
          height="39"
          @contextmenu.prevent
        ><br>
        <i18n-t keypath="wedding.rightColumn.all">
          <template #couples>
            <b>{{ data.stats.divorce }}</b>
          </template>
          <template #singles>
            <b>{{
              data.stats.members - (data.stats.total - data.stats.divorce) * 2
            }}</b>
          </template>
        </i18n-t>
        <br><img
          src="@/assets/img/social/wedding/mariage2.webp"
          alt="Wedding"
          draggable="false"
          width="130"
          height="58"
          style="width: 100%"
          @contextmenu.prevent
        ><br>
        <h3>{{ $t('wedding.rightColumn.archives') }}</h3>
        <br>
        <form class="flex fullwidth" @submit.prevent="search()">
          <input
            v-model="idSearch"
            required
            min="1"
            :max="data.last.id"
            name="id"
            type="number"
            class="btn-md"
            aria-label="Wedding number"
            :placeholder="$t('placeholder.weddingNumber')"
          ><button type="submit" class="btn-action">
            {{ $t('button.go') }}
          </button>
        </form>
        <br>
        <form class="flex fullwidth" @submit.prevent="search()">
          <input
            v-model="userSearch"
            required
            minlength="3"
            maxlength="15"
            pattern="[\w\.\-_@]{3,15}"
            name="username"
            type="text"
            class="btn-md"
            autocomplete="username"
            aria-label="Username"
            :placeholder="$t('placeholder.username')"
          ><button type="submit" class="btn-action">
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
const { data } = await useFetch<any>('https://chimboz.fr/api/weddings');
const idSearch = ref<undefined | number>(undefined);
const userSearch = ref('');

function search () {
  router.push(`/weddings/${idSearch.value}`);
}

const { t } = useI18n();
useHead({ title: t('wedding') });
</script>

<style lang="scss" scoped>
.fullwidth.light {
  background: #eef5fa;
  padding: 2px 0;
}

tr td:first-child {
  font-weight: bold;
}

.hstack {
  justify-content: center;
}

.wedding {
  position: relative;
  width: 400px;
  margin: auto;
}

@media (max-width: 464px) {
  .wedding {
    display: none;
  }
}

.witness,
.married {
  position: absolute;
}

.witness {
  top: 165px;
}

.married {
  top: 175px;
}

.witness1 {
  left: 70px;
}

.witness2 {
  left: 275px;
}

.married1 {
  left: 130px;
}

.married2 {
  left: 215px;
}

#today .fullwidth {
  padding: var(--md-gap);
}

#today .fullwidth:nth-child(odd) {
  background: var(--light);
}
</style>
