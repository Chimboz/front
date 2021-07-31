<template>
    <div class="message" :html="content"></div>
</template>

<script>
import bbob from '@bbob/core'
import { render } from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

export default {
  name: "Mesage",
  props: {
    content: {
      required: true,
      type: String,
    },
  },
  methods: {
    formatBBCode(code) {
      return bbob(presetHTML5()).process(code, { render }).html
    },
  },
};
</script>
