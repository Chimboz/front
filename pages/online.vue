<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Members" />
        </div>
      </Card>
      <br>
      <Rules bot />
    </template>
    <Card>
      <template #subtop>
        Sur le tchat
      </template><span
        v-for="user in data.tchat"
        :key="user.id"
        style="display: inline-block"
      ><LinkUser :user="user" />&nbsp;({{ user.room }})&nbsp;
      </span>
    </Card><br>
    <Card>
      <template #subtop>
        Sur le site
      </template><span
        v-for="(user, index) in data.site"
        :key="user.id"
      ><LinkUser
        :user="user"
        :separator="index < data.tchat.length - 1"
      /></span>
    </Card>
    <template #right-column>
      <Card

        header="ensavoirplus.webp"
        :width="154"
        :height="34"
        top
        color="blue"
        justified
      >
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          height="17"
          width="17"
          @contextmenu.prevent
        >Le record de connectés est de <b>{{ data.record.online }}</b> le
        <b>{{ format(data.record.date, "PPp") }}</b>.
      </Card>
    </template>
  </Container>
</template>
<script setup lang="ts">


const { data } = await useFetch<any>('https://chimboz.fr/api/online')

useHead({ title: 'section.online' })
</script>

<style lang="scss" scoped></style>
