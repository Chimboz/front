<template>
  <GlobalCard class="rules" color="blue" :bot="bot" :top="top">
    <div class="rule-container fullwidth">
      <div
        ><img
          draggable="false"
          @contextmenu.prevent
          alt="Rules icon"
          width="36"
          height="22"
          src="@/asset/img/icon/rules.svg"
        /><div class="rule-number"><b>{{ rule + 1 }}</b></div></div
      >
      <div class="rule"
        ><b>{{ $t("rules.rule" + rule) }}</b></div
      >
    </div>
    <div class="fullwidth"
      ><GlobalButton icon="rules.svg">Règles</GlobalButton></div
    >
  </GlobalCard>
</template>
<script>
// @vuese
// @group Core/Global
export default {
  name: "GlobalRules",
  data() {
    return {
      rule: 0
    };
  },
  props: {
    bot: {
      required: false,
      type: Boolean,
      default: false
    },
    top: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  mounted() {
    setInterval(() => {
      this.rule = (this.rule + 1) % 6;
    }, 3000);
  }
};
</script>
<style lang="scss">
.rules .card-bg {
  padding-top: 0;
}
</style>
<style lang="scss" scoped>
.rule-container {
  height: 120px;
  overflow: hidden;
  padding: var(--gap);
}
.rule {
  animation: opacity 3s infinite;
  color: var(--light);
}

.rule-number {
  transform: translateY(-18px);
}

@keyframes opacity {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  10% {
    opacity: 1;
    transform: translateX(0);
  }
  90% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>
