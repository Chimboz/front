<template>
  <GlobalCard justified v-if="data">
    <template #subtop>{{ data.name }}</template>
    <div class="header fullwidth">
      <img
        src="@/assets/img/puce.svg"
        alt="Puce"
        draggable="false"
        @contextmenu.prevent
        height="17"
        width="17"
      /><b> Registre personnel</b>
    </div>
    <table class="fullwidth">
      <colgroup>
        <col width="100" />
        <col width="100%" />
        <col width="100" />
        <col width="150" />
      </colgroup>
      <thead>
        <tr>
          <th>Type</th>
          <th>Raison</th>
          <th>Modérateur</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(log, index) in data.logs" :key="index">
          <td>
            <b>{{ log.type }}</b>
          </td>
          <td>
            {{ log.reason }}
          </td>
          <td><UserLink :user="log.moderator" /></td>
          <td>
            {{ formatDate(log.date) }}
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <div class="header fullwidth">
      <img
        src="@/assets/img/puce.svg"
        alt="Puce"
        draggable="false"
        @contextmenu.prevent
        height="17"
        width="17"
      /><b> Actions</b>
    </div>
    <form class="flex">
      <input
        required
        name="duration"
        type="number"
        class="btn-md"
        min="0"
        :placeholder="$t('placeholder.duration')"
      />&nbsp;<input
        required
        name="reason"
        type="text"
        class="btn-md"
        :placeholder="$t('placeholder.reason')"
      />&nbsp;<button class="btn-action btn-danger" @click="action('ban')">
        Bannir
      </button>
    </form>
    <button class="btn-action btn-danger" @click="action('eradicate')">
      Supprimer tous ses messages
    </button>
    <button class="btn-action btn-danger" @click="action('resetinfo')">
      Réinitialiser ses informations
    </button>
    <div v-if="user.role == 100">
      <button class="btn-action btn-danger" @click="action('resetitem')">
        Réinitialiser ses items
      </button>
      <br />
      <br />
      <div class="header fullwidth">
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        /><b> Comptes partageant la même IP</b>
      </div>
      <router-link
        v-for="user in data.shared"
        :key="user.id"
        :to="user.id.toString()"
        >{{ user.name }}<br /></router-link
      ><br />
      <div class="header fullwidth">
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        /><b> Adresses IP</b>
      </div>
      <div v-for="ip in data.ip" :key="ip">
        <pre class="inline">{{ ip }}</pre>
        &nbsp;<button class="btn-action btn-danger">Bannir cette IP</button>
      </div>
      <button class="btn-action btn-danger" @click="action('banip')">
        Bannir toutes les IP
      </button>
      <br /><br />
      <div class="header fullwidth">
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        /><b> Groupes</b>
      </div>
      <div v-for="group in data.groups" :key="group.id">
        <GroupLink :group="group" />&nbsp;<button class="btn-action btn-danger">
          Retirer du groupe</button
        >&nbsp;<button class="btn-action btn-danger">
          Supprimer le groupe
        </button>
      </div>
      <br />
      <div class="flex">
        <select class="btn-md" style="padding: var(--md-gap) var(--md-gap)">
          <option value="bacteria">Les Créateurs</option>
          <option value="patojdur">Patojdur</option>
          <option value="mazo">Mazo</option></select
        >&nbsp;
        <button class="btn-action btn-success inline">Ajouter au groupe</button>
      </div>
      <br />
      <div class="header fullwidth">
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        /><b> Jeux</b>
      </div>
      <div class="flex">
        <select class="btn-md">
          <option value="bacteria">Bacteria</option>
          <option value="patojdur">Patojdur</option>
          <option value="mazo">Mazo</option></select
        >&nbsp;<button class="btn-action btn-danger">
          Réinitialiser les statistiques du jeu
        </button>
      </div>
      <br />
    </div>
    <div class="header fullwidth">
      <img
        src="@/assets/img/puce.svg"
        alt="Puce"
        draggable="false"
        @contextmenu.prevent
        height="17"
        width="17"
      /><b> Inventaire</b>
    </div>
    <div v-if="user.role == 100">
      <form class="flex">
        <input
          required
          name="item"
          type="number"
          class="btn-md"
          min="1"
          :placeholder="$t('placeholder.item')"
        />&nbsp;<button class="btn-action btn-success">Donner un item</button>
      </form>
    </div>
    <form class="flex">
      <input
        required
        name="item"
        type="number"
        class="btn-md"
        min="0"
        :placeholder="$t('placeholder.balance')"
      />&nbsp;<button class="btn-action btn-success">
        Donner des pépettes
      </button>
    </form>
  </GlobalCard>
</template>
<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const auth = useAuthStore();
const user = auth.user;
const locales = { fr, enGB };

// @vuese
// @group Default

  
  data() {
    return {
      data: null,
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), "PPp", {
        locale: locales[navigator.language.split("-")[0]],
      });
    },
    action(type, params) {
      this.eventBus.emit("confirmation", {
        message: `admin.modal.${type}`,
        callback: `/api/${type}.json`,
        params: params,
      });
    },
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get(`/api/admin/${vm.$route.params.id}.json`).then((res) => {
        vm.data = res.data;
      })
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get(`/api/admin/${to.params.id}.json`);
    this.data = req.data;
    next();
  },
};
</script>
<style lang="scss" scoped>
.pseudo {
  font-size: var(--lg-font-size);
  fill: var(--text-button);
  stroke: #f39;
  stroke-width: 3;
  text-shadow: -1px 3px #f39;
  height: var(--lg-font-size);
  overflow: visible;
  font-family: "Chimboz Heavy";
}

.btn + .btn {
  margin-left: 0;
}

.header {
  background: var(--selected-dark-card);
  padding: 0 var(--gap);
  color: var(--light);
  text-shadow: 1px 0 0 var(--selected-title-card),
    -1px 0 0 var(--selected-title-card), 0 1px 0 var(--selected-title-card),
    0 -1px 0 var(--selected-title-card), 0.7px 0.7px var(--selected-title-card),
    -0.7px -0.7px 0 var(--selected-title-card),
    0.7px -0.7px 0 var(--selected-title-card),
    -0.7px 0.7px 0 var(--selected-title-card);
}
</style>
