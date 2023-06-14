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
          :src="`https://img.shields.io/badge/version-v${version.replaceAll(
            '-',
            '--'
          )}-${versionColor}`"
          @contextmenu.prevent /></a
      >&nbsp;
      <img
        draggable="false"
        alt="Front version"
        title="Front version"
        height="20"
        :src="`https://img.shields.io/badge/loadtime-${formatDuration(
          $timeMetric.pageEnd - $timeMetric.pageStart
        )}-${timeColor}`"
        @contextmenu.prevent
      />
    </div>
  </footer>
</template>
<script setup lang="ts">
import { version } from '../../package.json';
import { formatDuration } from '~~/utils';

const releaseType = version.match(/^\d+.\d+.\d+-([a-z]+)\d+$/)?.[1] ?? 'stable';
const versionColor = computed(() => {
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

const { $timeMetric } = useNuxtApp();
const timeColor = computed(() => {
  const loadtime = $timeMetric.pageEnd - $timeMetric.pageStart;
  if (loadtime < 0) return 'lightgrey';
  else if (loadtime < 500) return 'green';
  else if (loadtime < 1000) return 'yellow';
  else if (loadtime < 2000) return 'orange';
  else return 'red';
});
</script>
<style lang="scss" scoped>
footer {
  margin-bottom: var(--gap);
  padding: 0 10px;
  text-align: center;
}
</style>
