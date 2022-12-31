<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div> </Card
      ><br />
      <Rules bot />
    </template>
    <Card color="yellow" justified
      ><template #subtop>Effaceur</template>
      <template #header
        >SOS pseudo moisi, changez de pseudo pour 200 pepettes !</template
      >
      <img
        src="@/assets/img/shop/effaceur.webp"
        height="91"
        width="444"
        alt="Eraser"
        draggable="false"
        style="width: 100%"
        @contextmenu.prevent
      />

      <br />
      <form @submit.prevent="submit">
        <input
          v-model="pseudo"
          required
          minlength="3"
          maxlength="15"
          pattern="[\w\.\-_@]{3,15}"
          name="username"
          type="text"
          class="btn-md"
          aria-label="Username"
          autocomplete="username"
          :placeholder="$t('placeholder.username')"
        />
        <br /><br />
        <div class="flex">
          <Button
            type="button"
            aria-label="Generate nickname"
            @click="generatePseudo()"
            >Générer un pseudo</Button
          >
          <Button color="green" type="submit" aria-label="Save"
            ><template #prepend
              ><img
                draggable="false"
                alt="Arrow icon"
                class="arrow green jitter"
                width="40"
                height="33"
                src="@/assets/img/arrow.svg"
                @contextmenu.prevent /></template
            >Sauver</Button
          >
        </div>
        <br />
        <b>Attention</b>, tu ne peux avoir qu'un seul pseudo à la fois. Si tu
        possèdes déjà un pseudo et que tu en rachètes un, le nouveau remplacera
        l'ancien.
      </form>
    </Card>
    <template #right-column><Bank /></template>
  </Container>
</template>
<script setup lang="ts">

import api from "@/plugins/api";
import { randomInt } from "@/utils";
import { ref } from "vue";
import { useHead } from "@vueuse/head";

const pseudo = ref("");

function submit() {
  useFetch("account/name", {body:{ pseudo: pseudo.value }});
}
async function generatePseudo() {
  pseudo.value = (
    await useFetch(`generator/${randomInt(3, 15)}/${randomInt(1, 2)}`)
  ).data.pseudo;
}

useHead({ title: "section.eraser" });
</script>

<style lang="scss" scoped>
.letter {
  text-align: center;
  font-size: 24px;
  width: 24px;
  font-family: "Pixelated Verdana 10";
  border-bottom: 2px solid black;
  margin: 2px;
}
</style>
