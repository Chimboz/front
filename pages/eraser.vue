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
        {{ $t('eraser') }}
      </template>
      <template #header>
        {{ $t('eraser.header') }}
      </template>
      <img
        src="@/assets/img/shop/effaceur.webp"
        height="91"
        width="444"
        alt="Eraser"
        class="my-3"
        draggable="false"
        style="width: 100%"
        @contextmenu.prevent
      >
      <form @submit.prevent="submit">
        <input
          v-model="pseudo"
          required
          minlength="3"
          maxlength="15"
          pattern="[\w\.\-_@]{3,15}"
          name="username"
          type="text"
          class="btn-md mb-3"
          aria-label="Username"
          autocomplete="username"
          :placeholder="$t('placeholder.username')"
        >
        <div class="flex mb-3">
          <Button
            type="button"
            aria-label="Generate nickname"
            @click="generatePseudo()"
          >
            {{ $t('eraser.button') }}
          </Button>
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
            </template>Sauver
          </Button>
        </div>
        <span v-html="$t('eraser.description')" />
      </form>
    </Card>
    <template #right-column>
      <Bank />
    </template>
  </Container>
</template>
<script setup lang="ts">
const pseudo = ref('');

function submit () {
  useFetch('account/name', { method: 'post', body: { pseudo: pseudo.value } });
}

async function generatePseudo () {
  const { data } = await useFetch<any>(
    `https://chimboz.fr/api/generator/${randomInt(3, 15)}/${randomInt(1, 2)}`
  );
  pseudo.value = JSON.parse(data.value).pseudo;
}

const { t } = useI18n();
useHead({ title: t('eraser') });
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
