<template>
  <Card class="rules" color="blue" :bot="bot" :top="top">
    <div class="rules-container fullwidth">
      <div>
        <img
          draggable="false"
          alt="Rules icon"
          width="36"
          height="22"
          src="@/assets/img/icon/rules.svg"
          @contextmenu.prevent
        />
        <div class="rule-number">
          <b>{{ rule + 1 }}</b>
        </div>
      </div>
      <div class="rule">
        <b>{{ $t(`rules.rule${rule}`) }}</b>
      </div>
    </div>
    <div class="fullwidth btn-rules">
      <Button icon="rules.svg" type="button"> Règles </Button>
    </div>
  </Card>
</template>
<script setup lang="ts">
const rule = ref(0);
defineProps<{
  bot?: boolean;
  top?: boolean;
}>();
setInterval(() => {
  rule.value = ++rule.value % 6;
}, 3000);
</script>
<style lang="scss">
.rules .card-bg {
  padding-top: 0;
}
</style>
<style lang="scss" scoped>
.rules {
  .rules-container {
    background: #1fabff linear-gradient(180deg, #99dbfa, #1fabff 20%);
    border-radius: 12px 12px 0 0;
    box-shadow: inset 0 0 1px 4px #1fabff;
    height: 120px;
    overflow: hidden;
    padding: var(--gap);
  }

  .btn-rules {
    background: linear-gradient(
      to bottom,
      #1fabff,
      #1fabff 50%,
      var(--selected-main-card) 50%
    ) !important;
  }

  .rule {
    animation: opacity 3s infinite;
    color: var(--light);
  }

  .rule-number {
    transform: translateY(-18px);
  }
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
