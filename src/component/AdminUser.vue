<template>
  <GlobalCard justified v-if="data">
    <template #subtop>{{ data.name }}</template>
    <img
      src="@/asset/img/puce.svg"
      alt="Puce"
      draggable="false"
      @contextmenu.prevent
      height="17"
      width="17"
    /><b> Registre personnel</b>
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
    <form class="flex">
      <input
        required
        name="item"
        type="number"
        class="btn-md"
        min="0"
        :placeholder="$t('placeholder.duration')"
      />&nbsp;<GlobalButton color="red" @click="ban"
        >Bannir ce membre</GlobalButton
      >
    </form>
    <GlobalButton color="red">Supprimer tous ses messages</GlobalButton>
    <GlobalButton color="red">Réinitialiser ses informations</GlobalButton>
    <div v-if="user.role == 100">
      <GlobalButton color="red">Réinitialiser ses items</GlobalButton>
      <br />
      <img
        src="@/asset/img/puce.svg"
        alt="Puce"
        draggable="false"
        @contextmenu.prevent
        height="17"
        width="17"
      /><b> Comptes partageant la même IP</b>
      <br />
      <router-link
        v-for="user in data.shared"
        :key="user.id"
        :to="user.id.toString()"
        >{{ user.name }}<br /></router-link
      ><br />
      <img
        src="@/asset/img/puce.svg"
        alt="Puce"
        draggable="false"
        @contextmenu.prevent
        height="17"
        width="17"
      /><b> Adresses IP</b><br />
      <div v-for="ip in data.ip" :key="ip">
        <pre class="inline">{{ ip }}</pre>
        &nbsp;<button class="btn-action">Bannir cette IP</button>
      </div>
      <GlobalButton color="red">Bannir toutes les IP</GlobalButton>
      <br />
      <img
        src="@/asset/img/puce.svg"
        alt="Puce"
        draggable="false"
        @contextmenu.prevent
        height="17"
        width="17"
      /><b> Groupes</b><br />
      <div v-for="group in data.groups" :key="group.id">
        <GroupLink :group="group" />&nbsp;<button class="btn-action">
          Retirer du groupe</button
        >&nbsp;<button class="btn-action">Supprimer le groupe</button>
      </div>
      <br />
      <div class="flex">
        <select class="btn-md" style="padding: 0">
          <option value="bacteria">Les Créateurs</option>
          <option value="patojdur">Patojdur</option>
          <option value="mazo">Mazo</option></select
        >&nbsp;
        <GlobalButton color="green" class="inline"
          >Ajouter au groupe</GlobalButton
        >
      </div>
      <br />
      <div class="flex">
        <select class="btn-md" style="padding: 0">
          <option value="bacteria">Bacteria</option>
          <option value="patojdur">Patojdur</option>
          <option value="mazo">Mazo</option></select
        >&nbsp;<GlobalButton color="red"
          >Réinitialiser les statistiques du jeu</GlobalButton
        >
      </div>
      <br />
      <form class="flex">
        <input
          required
          name="item"
          type="number"
          class="btn-md"
          min="1"
          :placeholder="$t('placeholder.item')"
        />&nbsp;<GlobalButton color="green">Donner un item</GlobalButton>
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
      />&nbsp;<GlobalButton color="green">Donner des pépettes</GlobalButton>
    </form>
  </GlobalCard>
</template>
<script>
import StrokeText from "@/component/core/StrokeText.vue";
import { mapState } from "vuex";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group Default
export default {
  name: "AdminUser",
  components: {
    StrokeText,
  },
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
    ban() {
      this.eventBus.emit("confirmation", {
        message: "admin.modal.ban",
        callback: "/api/success.json",
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
</style>
