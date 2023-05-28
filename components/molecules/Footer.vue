<template>
  <footer>
    <hr class="mb-2" />
    <div style="line-height: 24px">
      <a
        href="https://twitter.com/ChimbozOfficial"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          draggable="false"
          alt="Twitter follow"
          title="Twitter follow"
          width="77"
          height="20"
          src="https://img.shields.io/twitter/follow/ChimbozOfficial?color=blue&amp;label=Twitter&amp;logo=twitter&amp;style=flat"
          @contextmenu.prevent /></a
      >&nbsp;
      <a
        href="https://discord.gg/aYph9u8"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          draggable="false"
          alt="Discord server"
          title="Discord server"
          height="20"
          src="https://img.shields.io/discord/765491519536496660?label=discord&amp;logo=discord&amp;logoColor=fff"
          @contextmenu.prevent /></a
      >&nbsp;
      <a
        href="http://www.cecill.info/licences/Licence_CeCILL_V2.1-en.html"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          loading="lazy"
          draggable="false"
          alt="License CeCILL v2.1"
          title="License CeCILL v2.1"
          width="124"
          height="20"
          src="https://img.shields.io/badge/license-CeCILL%20v2.1-informational"
          @contextmenu.prevent /></a
      >&nbsp;
      <a
        href="https://github.com/Chimboz"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          draggable="false"
          alt="Front version"
          title="Front version"
          height="20"
          :src="`https://img.shields.io/badge/version-v${runtimeConfig.public.clientVersion.replaceAll(
            '-',
            '--'
          )}-${color}`"
          @contextmenu.prevent
      /></a>
    </div>
  </footer>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const releaseType =
  runtimeConfig.public.clientVersion.match(/^\d+.\d+.\d+-([a-z]+)\d+$/)?.[1] ??
  'stable';
const color = computed(() => {
  switch (releaseType) {
    case 'stable':
      return 'blue';
    case 'alpha':
      return 'orange';
    case 'beta':
      return 'yellow';
    case 'rc':
      return 'green';
    default:
      return 'lightgrey';
  }
});
</script>
<style lang="scss" scoped>
footer {
  margin-bottom: var(--gap);
  padding: 0 10px;
  text-align: center;
}
</style>
