<template>
  <div id="body">
    <main id="main">
      <Loader />
      <Navbar :time="time" />
      <Container>
        <template #left-column />
        <Card color="red">
          <img
            draggable="false"
            alt="Error icon"
            width="39"
            height="32"
            src="@/assets/img/icon/warning.svg"
            @contextmenu.prevent
          ><b>&nbsp;{{ error ? error.statusMessage : $t('error.unknown') }}</b>
        </Card>
        <template #right-column />
      </Container>
      <Footer />
      <Modal />
    </main>
  </div>
</template>
<script setup lang="ts">
import useAuthStore from '@/stores/auth';
import favicon from '@/constants/favicon.json';
import faviconNew from '@/constants/favicon_new.json';

const notifications = computed(() => useAuthStore().notifications);
const i18n = useI18n();

defineProps<{
  error: any;
}>();

const time = `-${(new Date().getTime() - new Date().setHours(0, 0, 0, 0)) / 1000}s`;
useHead({
  htmlAttrs: {
    lang: i18n.locale.value,
  },
  titleTemplate: (title) =>
    `${
      notifications.value
        ? notifications.value
            .toString()
            .replace(/[0-9]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.charAt(+c))
        : ''
    }Chimboz ${title}`,
  title: computed(() => i18n.t('error')),
  link: notifications.value ? faviconNew : favicon,
  meta: [
    {
      name: 'description',
      content:
        "Chimboz est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !",
    },
    {
      property: 'og:description',
      content:
        "Chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !",
    },
    {
      property: 'og:title',
      content: 'Chimboz',
    },
    {
      name: 'color-scheme',
      content: 'dark light',
    },
  ],
});

watchEffect(() => {
  useHead({ link: notifications.value ? faviconNew : favicon });
});
</script>
<style lang="css" scoped>
@keyframes cycleBackground {
  0% {
    background-image: url(@/assets/img/navbar/background/0.png);
  }
  4.17% {
    background-image: url(@/assets/img/navbar/background/1.png);
  }
  8.33% {
    background-image: url(@/assets/img/navbar/background/2.png);
  }
  12.5% {
    background-image: url(@/assets/img/navbar/background/3.png);
  }
  16.67% {
    background-image: url(@/assets/img/navbar/background/4.png);
  }
  20.83% {
    background-image: url(@/assets/img/navbar/background/5.png);
  }
  25% {
    background-image: url(@/assets/img/navbar/background/6.png);
  }
  29.17% {
    background-image: url(@/assets/img/navbar/background/7.png);
  }
  33.33% {
    background-image: url(@/assets/img/navbar/background/8.png);
  }
  37.5% {
    background-image: url(@/assets/img/navbar/background/9.png);
  }
  41.67% {
    background-image: url(@/assets/img/navbar/background/10.png);
  }
  45.83% {
    background-image: url(@/assets/img/navbar/background/11.png);
  }
  50% {
    background-image: url(@/assets/img/navbar/background/12.png);
  }
  54.17% {
    background-image: url(@/assets/img/navbar/background/13.png);
  }
  58.33% {
    background-image: url(@/assets/img/navbar/background/14.png);
  }
  62.5% {
    background-image: url(@/assets/img/navbar/background/15.png);
  }
  66.67% {
    background-image: url(@/assets/img/navbar/background/16.png);
  }
  70.83% {
    background-image: url(@/assets/img/navbar/background/17.png);
  }
  75% {
    background-image: url(@/assets/img/navbar/background/18.png);
  }
  79.17% {
    background-image: url(@/assets/img/navbar/background/18.png);
  }
  83.33% {
    background-image: url(@/assets/img/navbar/background/20.png);
  }
  87.5% {
    background-image: url(@/assets/img/navbar/background/21.png);
  }
  91.67% {
    background-image: url(@/assets/img/navbar/background/22.png);
  }
  95.83% {
    background-image: url(@/assets/img/navbar/background/23.png);
  }
}

#body {
  animation: cycleBackground 86400s step-end infinite;
  animation-delay: v-bind(time);
}
</style>
