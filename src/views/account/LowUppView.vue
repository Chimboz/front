<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <GlobalCard color="yellow" justified
      ><template #subtop>MajMin</template>
      <template #header>Changer de MajMiN</template>
      <template #subtitle
        >Un bon MajMiN, c'est un plus pour ta reconnaissance dans la
        communauté...</template
      >
      <b>Un MajMiN c'est quoi ?</b><br />
      Le MajMiN ( <b>Maj</b>uscules <b>Min</b>uscules ) c'est l'apparence de ton
      pseudo.<br />
      Par exemple, Andre et AnDRe c'est le même pseudo, c'est juste le MajMiN
      qui change.<br />
      <br />
      <b>Tu peux changer de MajMiN quand tu le souhaites.</b><br />
      Tu peux changer uniquement le MajMiN des lettres, tu ne peux pas en
      rajouter, tu ne peux pas en enlever, tu ne peux pas échanger une lettre
      par une autre.
      <form @submit.prevent="submit">
        <div class="centered">
          <button
            class="letter"
            @click="changeCase(index)"
            type="button"
            v-for="(letter, index) of pseudo"
            :key="index"
          >
            {{ letter }}
          </button>
        </div>
        <br />
        <GlobalButton color="green" type="submit" aria-label="Save"
          ><template #prepend
            ><img
              draggable="false"
              @contextmenu.prevent
              alt="Arrow icon"
              class="arrow green jitter"
              width="40"
              height="33"
              src="@/assets/img/arrow.svg" /></template
          >Sauver</GlobalButton
        >
      </form>
    </GlobalCard>
    <template #right-column> </template>
  </GlobalContainer>
</template>
<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { ref, computed } from "vue";
const auth = useAuthStore();
const user = computed(() => auth.user);

// @vuese
// @group View/Account
// Capitalization page

const pseudo = ref(user.value!.pseudo.slice());

function changeCase(index: number) {
  let letter;
  if (pseudo.value[index].toUpperCase() == pseudo.value[index])
    letter = pseudo.value[index].toLowerCase();
  else letter = pseudo.value[index].toUpperCase();
  pseudo.value =
    pseudo.value.slice(0, index) + letter + pseudo.value.slice(index + 1);
}
function submit() {
  console.log(`Envoyé ${pseudo.value}!`);
}

// meta title section.capitalization
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
