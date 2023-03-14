<template>
  <div>
    <Card color="yellow">
      <template #header>
        {{ name }}
      </template>
      <a
        target="_blank"
        rel="noopener noreferrer"
        :href="'/gallery/' + $route.params.name"
      >
        <img
          draggable="false"
          :src="'/gallery/' + $route.params.name"
          style="width: 100%"
          :alt="name"
          @contextmenu.prevent
        >
      </a>
    </Card>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const name = (useRoute().params.name as string).split('.')[0];
</script>
