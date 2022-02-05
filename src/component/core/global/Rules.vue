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
        /><div class="rule-number">{{ rule + 1 }}</div></div
      >
      <div class="rule"
        ><b>{{ $t("rules.rule" + rule) }}</b></div
      >
    </div>
    <div class="btn-rules fullwidth"
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
.btn-rules {
  background: linear-gradient(
    to bottom,
    #1fabff,
    #1fabff 50%,
    var(--main-card-color) 50%
  ) !important;
}

.rules .card-bg {
  padding-top: 0;
}
</style>
<style lang="scss" scoped>
.rule-container {
  background: #1fabff linear-gradient(to bottom, #99dbfa, #1fabff 20%);
  box-shadow: inset 0 0 1px 4px #1fabff;
  border-radius: var(--gap) var(--gap) 0 0;
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
  font-weight: bold;
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
