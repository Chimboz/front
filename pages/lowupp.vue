<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div>
      </Card>
      <Rules bot />
    </template>
    <Card color="yellow" left>
      <template #subtop>
        {{ $t('capitalization') }}
      </template>
      <template #header>
        {{ $t('capitalization.header') }}
      </template>
      <template #subtitle>
        {{ $t('capitalization.subtitle') }}
      </template>
      <span v-html="$t('capitalization.description')" />
      <form @submit.prevent="submit">
        <div class="centered my-3">
          <button
            v-for="(letter, index) of pseudo"
            :key="index"
            class="letter"
            type="button"
            @click="changeCase(index)"
          >
            {{ letter }}
          </button>
        </div>
        <Button color="green" type="submit" aria-label="Save">
          <template #prepend>
            <img
              draggable="false"
              alt="Arrow icon"
              class="arrow green jitter"
              width="40"
              height="33"
              src="@/assets/img/arrow.svg"
              @contextmenu.prevent
            >
          </template>{{ $t('button.save') }}
        </Button>
      </form>
    </Card>
    <template #right-column />
  </Container>
</template>
<script setup lang="ts">
import useAuthStore from '@/stores/auth';

const auth = useAuthStore();
const user = computed(() => auth.user);

const pseudo = ref(user.value!.pseudo.slice());

function changeCase (index: number) {
  let letter;
  if (pseudo.value[index].toUpperCase() === pseudo.value[index]) {
    letter = pseudo.value[index].toLowerCase();
  } else {
    letter = pseudo.value[index].toUpperCase();
  }
  pseudo.value =
    pseudo.value.slice(0, index) + letter + pseudo.value.slice(index + 1);
}
function submit () {
  useFetch('account/majmin', {
    method: 'post',
    body: { pseudo: pseudo.value },
  });
}

const { t } = useI18n();
useHead({ title: t('capitalization') });
</script>

<style lang="scss" scoped>
.letter {
  text-align: center;
  font-size: 24px;
  width: 24px;
  font-family: 'Pixelated Verdana 10';
  border-bottom: 2px solid black;
  margin: 2px;
}
</style>
