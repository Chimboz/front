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
    <NuxtLink to="/book" class="pink mb-2">
      » Retour à l'annuaire
    </NuxtLink>
    <Card
      class="member"
      :class="[
        data.gender,
        { gradient: color.gradient, rainbow: color.rainbow },
      ]"
      left
      :style="{
        '--h': color.h,
        '--s': color.s,
        '--l': color.l,
        color: 'hsl(var(--h),var(--s),calc(100% - var(--l)))',
      }"
    >
      <div class="member-header">
        <Avatar
          :avatar="data.look.avatar"
          :emote="data.look.emote"
          :hat="data.look.hat"
          :body="data.look.body"
          :shoe="data.look.shoe"
          :item0="data.look.item0"
          :item1="data.look.item1"
          :item2="data.look.item2"
        />
        <div class="flex col" style="z-index: 1; position: relative">
          <StrokeText class="pseudo" left>
            {{ data.name }}
          </StrokeText>
          <div class="motto">
            "{{ data.motto }}"
          </div>
        </div>
      </div>
      <div class="member-body">
        <div class="member-portrait centered">
          <div class="portrait flex">
            <Avatar
              :avatar="data.look.avatar"
              :emote="data.look.emote"
              :hat="data.look.hat"
              :body="data.look.body"
              :shoe="data.look.shoe"
              :item0="data.look.item0"
              :item1="data.look.item1"
              :item2="data.look.item2"
            />
          </div>
          <div v-if="!data.status.connected">
            Dernière visite le <b>{{ $format(data.status.date, 'PPp') }}</b>
          </div>
          <div v-else>
            <div
              class="online flex centered"
              :class="{ tchat: data.status.room }"
            >
              <img
                draggable="false"
                alt="Online"
                src="@/assets/img/tiz/tiz_shape.svg"
                @contextmenu.prevent
              >&nbsp;<b>En ligne</b>
            </div>
            <b>{{ data.status.room }}</b>
          </div>
        </div>
        <div class="member-text">
          <p>
            <img
              src="@/assets/img/member/wedding.svg"
              height="20"
              width="20"
              alt="Wedding icon"
              draggable="false"
              @contextmenu.prevent
            >&nbsp;
            <template v-if="data.wedding">
              <NuxtLink :to="'/weddings/' + data.wedding.id">
                Marié
              </NuxtLink>
              avec
              <LinkUser :user="data.wedding.user" /> depuis
              {{ $distance(Date.now(), data.wedding.time) }} jours
            </template>
            <b v-else>Célibataire</b>
          </p>
          <p>
            Intérêts :
            <b
              v-for="(interest, index) of data.centres"
              :key="index"
            >{{ interest
            }}<span v-if="index < data.centres.length - 1">, </span></b>
          </p>
          <p>
            Page perso :
            <a
              v-if="data.website"
              target="_blank"
              rel="noreferrer noopener nofollow"
              :href="data.website"
            >{{ data.website }}</a>
          </p>
          <p>
            Inscrit aux groupes :
            <LinkGroup
              v-for="(group, index) of data.groups"
              :key="group.id"
              :group="group"
              :separator="index < data.groups.length - 1"
            />
          </p>
          <br>
          <div class="icon flex centered col">
            <div v-if="data.gender === 'male'">
              Chimbo
            </div>
            <div v-else-if="data.gender === 'female'">
              Chimbette
            </div>
            <div v-else>
              Chimbi
            </div>
            <!--TODO svg pas bien size-->
            <img
              draggable="false"
              :alt="
                data.gender.charAt(0).toUpperCase() +
                  data.gender.slice(1) +
                  ' gender'
              "
              height="20"
              width="18"
              :src="asset(`img/member/icons/gender/${data.gender}.svg`)"
              @contextmenu.prevent
            >
          </div>
          &nbsp;
          <div class="icon flex centered col">
            <div>Niveau</div>
            <div>
              <Number :number="data.level" />
            </div>
          </div>
          <br><br>
          <p>
            Vérification du nom :
            <b>{{ data.name.toLowerCase() }}, {{ data.name.toUpperCase() }}</b>
          </p>
          <p>
            Signe astrologik : <b>{{ data.astro }}</b>
          </p>
        </div>
      </div>
      <br>
      <div v-if="data.bac" class="member-section">
        <svg width="59" height="58.45" class="mr-2" @contextmenu.prevent>
          <use
            :href="`${asset(`img/member/icons/games/bacteria.svg`)}#root`"
            color="hsl(var(--h), 100%, calc(var(--l) - 40%)"
          />
        </svg>
        <span>Classement : <b>{{ data.bac.rank }}</b><sup v-if="data.bac.rank === 1">er</sup><sup v-else>ème</sup><br><b>{{ data.bac.win + data.bac.lost + data.bac.draw }}</b>
          parties, <b>{{ data.bac.win }}</b> gagnées,
          <b>{{ data.bac.lost }}</b> perdues,
          <b>{{ data.bac.draw }}</b> nulles<br><b>{{ data.bac.score }}</b>
          points</span>
      </div>
      <br v-if="data.bac">
      <div v-if="data.patoj" class="member-section">
        <svg width="59" height="58.45" class="mr-2" @contextmenu.prevent>
          <use
            :href="`${asset(`img/member/icons/games/patojdur.svg`)}#root`"
            color="hsl(var(--h), 100%, calc(var(--l) - 40%)"
          />
        </svg>
        <span>Classement : <b>{{ data.patoj.rank }}</b><sup v-if="data.patoj.rank === 1">er</sup><sup v-else>ème</sup> avec
          <b>{{ data.patoj.score }}</b> points<br>Aujourd'hui
          <b>{{ data.patoj.today.rank }}</b><sup v-if="data.patoj.today.rank === 1">er</sup><sup v-else>ème</sup> avec <b>{{ data.patoj.today.score }}</b>
          <br>Hier <b>{{ data.patoj.yesterday.rank }}</b><sup v-if="data.patoj.yesterday.rank === 1">er</sup><sup v-else>ème</sup> avec
          <b>{{ data.patoj.yesterday.score }}</b></span>
      </div>
      <br v-if="data.patoj">
      <div v-if="data.mazo" class="member-section">
        <svg width="59" height="58.45" class="mr-2" @contextmenu.prevent>
          <use
            :href="`${asset(`img/member/icons/games/mazo.svg`)}#root`"
            color="hsl(var(--h), 100%, calc(var(--l) - 40%)"
          />
        </svg>
        <span>Classement : <b>{{ data.mazo.rank }}</b><sup v-if="data.mazo.rank === 1">er</sup><sup v-else>ème</sup> avec
          <b>{{ data.mazo.score }}</b> points</span>
      </div>
      <br v-if="data.mazo">
      <div v-if="data.popularity" class="member-section">
        <svg width="59" height="58.45" class="mr-2" @contextmenu.prevent>
          <use
            :href="`${asset(`img/member/icons/games/popularity.svg`)}#root`"
            color="hsl(var(--h), 100%, calc(var(--l) - 40%)"
          />
        </svg>
        <span>Classement : <b>{{ data.popularity.rank }}</b><sup v-if="data.popularity.rank === 1">er</sup><sup v-else>ème</sup> avec
          <b>{{ data.popularity.score }}</b> points<br>Aujourd'hui
          <b>{{ data.popularity.today.rank }}</b><sup v-if="data.popularity.today.rank === 1">er</sup><sup v-else>ème</sup> avec
          <b>{{ data.popularity.today.score }}</b> points<br>Hier
          <b>{{ data.popularity.yesterday.rank }}</b><sup v-if="data.popularity.yesterday.rank === 1">er</sup><sup v-else>ème</sup> avec
          <b>{{ data.popularity.yesterday.score }}</b> points</span>
      </div>
      <br v-if="data.popularity">
      <div class="member-section registration">
        <span>Membre n°<b>{{ data.id }}</b><br>
          Dans la communauté depuis le
          <b>{{ $format(data.register, 'PPp') }}</b> (<b>{{
            $distance(Date.now(), data.register)
          }}</b>
          jours)</span>
      </div>
      <br>
      Messages sur le forum :
      <NuxtLink :to="'/bbs/author/' + data.id">
        {{ data.posts }}
      </NuxtLink>
    </Card>
    <template #right-column>
      <NuxtLink v-if="+user!.user_level > 2" :to="'/admin/' + data.id">
        <Button type="button" icon="rules.svg" class="mb-2">
          Modérer
        </Button>
      </NuxtLink>
      <Card left>
        <template #button>
          <Button type="button" icon="item.svg">
            {{ $t('button.customize') }}
          </Button>
        </template>
        <div class="flex">
          <HuePicker v-model="color.h" class="mr-2" /> Teinte<br>
        </div>
        <label class="flex pointer my-2" style="position: relative">
          <input v-model="color.gradient" type="checkbox" class="mr-4"> Mode dégradé
        </label>
        <label class="flex pointer" style="position: relative"><input v-model="color.rainbow" type="checkbox" class="mr-4"> Mode arc-en-ciel</label>
      </Card>
    </template>
  </Container>
</template>

<script setup lang="ts">
import useAuthStore from '@/stores/auth';

const auth = useAuthStore();
const user = computed(() => auth.user);

const { data } = await useFetch<any>(
  `https://chimboz.fr/api/book/${useRoute().params.id}`
);

data.value.gender = 'male';
const color = ref({
  h: data.value.gender === 'female' ? 320 : 207,
  s: data.value.gender === 'female' ? '80%' : '50%',
  l: '75%',
  gradient: false,
  rainbow: false,
});

const { t } = useI18n();
useHead({ title: computed(() => t('member')) });
</script>
<style lang="scss">
.card {
  background-size: contain;
  background-repeat: repeat-x;
  background-blend-mode: color-burn;
  background-color: hsl(var(--h), var(--s), calc(var(--l) + 10%));
}

.member.rainbow {
  animation: rainbow 5s infinite linear;
  * {
    animation: rainbow 5s infinite linear;
  }
}
.male .card,
.unknown .card {
  background-image: url(@/assets/img/member/header/male.svg);
}

.female .card {
  background-image: url(@/assets/img/member/header/female.svg);
}

@property --h {
  syntax: '<number>';
  initial-value: 0;
  inherits: true;
}

@keyframes rainbow {
  from {
    --h: 0;
  }
  to {
    --h: 360;
  }
}
</style>
<style lang="scss" scoped>
.member {
  --blue: hsl(var(--h), calc(var(--s) + 40%), calc(var(--l) - 40%));
  .rainbow {
    animation: rainbow 5s infinite linear;
  }
  overflow: hidden;
}

.motto {
  margin-left: 33%;
  text-align: left;
}

.member-body {
  background: hsl(var(--h), var(--s), calc(var(--l) + 20%));
  clear: both;
}

.member-header {
  font-family: 'Chimboz Heavy';
  color: #fff;
  font-size: 20px;
  text-shadow: 2px 1px #0008;
  min-height: 90px;
}

.member-header .tiz {
  float: left;
  margin: 40px auto -100% 12%;
  transform: rotate(-5deg) scale(3);
}

.pseudo {
  margin-left: 33%;
  width: 67%;
  font-size: 35px;
  fill: var(--text-button);
  stroke: #f39;
  stroke-width: 3;
  text-shadow: -1px 3px #f39;
  height: 35px;
  overflow: visible;
}

.portrait {
  justify-content: center;
  align-items: center;
  background-image: url(@/assets/img/member/portrait.svg);
  background-size: cover;
  background-color: hsl(var(--h), var(--s), calc(var(--l) + 10%));
  border-radius: 12px;
  height: 112px;
  width: 104px;
  margin-bottom: var(--md-gap);
  overflow: hidden;
}

.member-section,
.member-body {
  z-index: 1;
  position: relative;
  border-radius: var(--md-gap);
}

.member-section,
.member-text {
  padding: var(--md-gap);
}

.member-portrait {
  float: right;
  background: var(--light);
  border-radius: var(--md-gap);
  padding: var(--md-gap);
  width: 116px;
}

.member-section {
  background: hsl(var(--h), var(--s), var(--l));
  display: flex;
  align-items: center;
}
.female .member-section {
  background: #f481cc;
}

.icon {
  display: inline-flex;
  font-family: 'Pixelade';
  font-size: 13px;
  justify-content: space-evenly;
  width: 50px;
  height: 50px;
  border: 1px solid hsl(var(--h), var(--s), calc(var(--l) - 20%));
  background: linear-gradient(
    to bottom,
    hsl(var(--h), var(--s), calc(var(--l) + 20%)),
    hsl(var(--h), var(--s), var(--l))
  );
  border-radius: 4px;
}

.member-img {
  padding-right: var(--md-gap);
}

.online {
  font-family: 'Pixelated Verdana 10';
  font-size: 10px;
  color: var(--light);
  justify-content: center;
  width: 100%;
  height: 26px;
  background: linear-gradient(to bottom, #0193ca, #2d4a97);
  border-radius: 10px;
}

.online.tchat {
  background: linear-gradient(to bottom, #81cb00, #40972d);
}

.online img {
  height: 20px;
}

.registration {
  padding: var(--gap);
}

.gradient {
  .member-section {
    background: linear-gradient(
      45deg,
      hsl(var(--h), 0%, var(--l)),
      hsl(var(--h), 100%, var(--l))
    );
  }

  .pseudo {
    stroke: hsl(var(--h), 100%, calc(var(--l) - 40%));
    text-shadow: -1px 3px hsl(var(--h), 100%, calc(var(--l) - 40%));
  }
}
</style>
