<template>
  <router-link
    :to="'/topic/' + $route.params.id + '/' + $route.params.topic + '/1'"
    class="pink"
    >Page 1</router-link
  >
  <router-link
    :to="'/topic/' + $route.params.id + '/' + $route.params.topic + '/2'"
    class="pink"
    >Page 2</router-link
  >
</template>
<script>
export default {};
</script>
<style lang="scss" scoped></style>
