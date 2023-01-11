<template>
  <Card justified>
    <template #subtop>{{ data.name }}</template>
    <div class="header fullwidth">
      <img
        src="@/assets/img/puce.svg"
        alt="Puce"
        draggable="false"
        height="17"
        width="17"
        @contextmenu.prevent
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
          <td><LinkUser :user="log.moderator" /></td>
          <td>
            {{ format(log.date, "PPp") }}
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
        height="17"
        width="17"
        @contextmenu.prevent
      /><b> Actions</b>
    </div>
    <form class="flex" @submit="action('ban')">
      <input
        required
        name="duration"
        type="number"
        class="btn-md"
        min="0"
        :aria-label="$t('placeholder.duration')"
        :placeholder="$t('placeholder.duration')"
      />&nbsp;<input
        required
        name="reason"
        type="text"
        class="btn-md"
        :placeholder="$t('placeholder.reason')"
        :aria-label="$t('placeholder.reason')"
      />&nbsp;<button type="submit" class="btn-action btn-danger">
        Bannir
      </button>
    </form>
    <button
      type="button"
      class="btn-action btn-danger"
      @click="action('eradicate')"
    >
      Supprimer tous ses messages
    </button>
    <button
      type="button"
      class="btn-action btn-danger"
      @click="action('resetinfo')"
    >
      Réinitialiser ses informations
    </button>
    <div v-if="+user.admin">
      <button
        class="btn-action btn-danger"
        type="button"
        @click="action('resetitem')"
      >
        Réinitialiser ses items
      </button>
      <br />
      <br />
      <div class="header fullwidth">
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        /><b> Comptes partageant la même IP</b>
      </div>
      <NuxtLink
        v-for="account in data.shared"
        :key="account.id"
        :to="`/admin/${account.id}`"
        >{{ account.name }}<br /></NuxtLink
      ><br />
      <div class="header fullwidth">
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        /><b> Adresses IP</b>
      </div>
      <div v-for="ip in data.ip" :key="ip">
        <pre class="inline">{{ ip }}</pre>
        &nbsp;<button class="btn-action btn-danger" type="button">
          Bannir cette IP
        </button>
      </div>
      <button
        class="btn-action btn-danger"
        type="button"
        @click="action('banip')"
      >
        Bannir toutes les IP
      </button>
      <br /><br />
      <div class="header fullwidth">
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        /><b> Groupes</b>
      </div>
      <div v-for="group in data.groups" :key="group.id">
        <LinkGroup :group="group" />&nbsp;<button
          class="btn-action btn-danger"
          type="button"
        >
          Retirer du groupe</button
        >&nbsp;<button class="btn-action btn-danger" type="button">
          Supprimer le groupe
        </button>
      </div>
      <br />
      <div class="flex">
        <select
          aria-label="Groups"
          class="btn-md"
          style="padding: var(--md-gap) var(--md-gap)"
        >
          <option value="bacteria">Les Créateurs</option>
          <option value="patojdur">Patojdur</option>
          <option value="mazo">Mazo</option></select
        >&nbsp;
        <button class="btn-action btn-success inline" type="button">
          Ajouter au groupe
        </button>
      </div>
      <br />
      <div class="header fullwidth">
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        /><b> Jeux</b>
      </div>
      <div class="flex">
        <select class="btn-md" aria-label="Games">
          <option value="bacteria">Bacteria</option>
          <option value="patojdur">Patojdur</option>
          <option value="mazo">Mazo</option></select
        >&nbsp;<button class="btn-action btn-danger" type="button">
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
        height="17"
        width="17"
        @contextmenu.prevent
      /><b> Inventaire</b>
    </div>
    <div v-if="+user.admin">
      <form class="flex">
        <input
          required
          name="item"
          type="number"
          class="btn-md"
          min="1"
          aria-label="Item"
          :placeholder="$t('placeholder.item')"
        />&nbsp;<button class="btn-action btn-success" type="button">
          Donner un item
        </button>
      </form>
    </div>
    <form class="flex">
      <input
        required
        name="item"
        type="number"
        class="btn-md"
        min="0"
        aria-label="Credits"
        :placeholder="$t('placeholder.balance')"
      />&nbsp;<button class="btn-action btn-success" type="button">
        Donner des pépettes
      </button>
    </form>
  </Card>
</template>
<script setup lang="ts">
import useAuthStore from "@/stores/auth";
import { format } from "@/utils/date";

const { $eventBus } = useNuxtApp();
const auth = useAuthStore();
const user = computed(() => auth.user!);

const { data } = await useFetch("/api/admin_user");

function action(type: string, payload?: object) {
  $eventBus.emit("confirmation", {
    message: `admin.modal.${type}`,
    api: `/api/${type}.json`,
    payload,
  });
}

useHead({ title: "section.admin" });
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
