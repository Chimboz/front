<template>
  <div>
    <img v-if="filename" :src="require(`@/assets/img/${filename}`)" />
    <div class="card" :class="{ yellow: yellow }">
      <h2>
        <slot name="header"></slot>
      </h2>
      <em>"<slot name="subtitle"></slot>"</em>
      <br />
      <br />
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    filename: {
      type: String,
    },
    yellow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 12px;
  width: 100%;
  padding: 17px 5px;
  height: auto;
  text-align: center;
  background-color: #d5e6f3;
  background-image: linear-gradient(
    to bottom,
    #f2f8fc 0px,
    #d5e6f3 12px,
    #d5e6f3 calc(100% - 12px),
    #a5cbe9 100%
  );
}

img {
  display: block;
  width: 100%;
}

img + .card {
  border-radius: 0 0 12px 12px;
  display: inline-block;
  background-image: linear-gradient(
    to bottom,
    #d5e6f3 0px,
    #d5e6f3 calc(100% - 12px),
    #a5cbe9 100%
  );
}

.yellow {
  background-color: #fff4d5 !important;
  background-image: linear-gradient(
    to bottom,
    #fff 0px,
    #fff4d5 12px,
    #fff4d5 calc(100% - 12px),
    #ddcb9b 100%
  ) !important;
  box-shadow: 0px 1px #5c341f;
}
</style>