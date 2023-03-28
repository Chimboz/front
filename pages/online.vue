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
    <Card>
      <template #subtop> {{ $t('online.chat') }} </template
      ><span
        v-for="user in data.tchat"
        :key="user.id"
        style="display: inline-block"
        ><UserLink :user="user" />&nbsp;({{ user.room }})&nbsp;
      </span>
    </Card>
    <Card>
      <template #subtop> {{ $t('online.site') }} </template
      ><span v-for="(user, index) in data.site" :key="user.id"
        ><UserLink :user="user" :separator="index < data.tchat.length - 1"
      /></span>
    </Card>
    <template #right-column>
      <Card
        header="ensavoirplus.webp"
        :width="154"
        :height="34"
        top
        color="blue"
        left
      >
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        />{{ $t('online.record') }} <b>{{ data.record.online }}</b>
        {{ $t('date.on') }} <b>{{ $format(data.record.date, 'PPp') }}</b
        >.
      </Card>
    </template>
  </Container>
</template>
<script setup lang="ts">
const { data } = await useFetch<any>('https://chimboz.fr/api/online');

const { t } = useI18n();
useHead({ title: computed(() => t('online')) });
</script>

<style lang="scss" scoped></style>
