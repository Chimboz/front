<template>
  <div>
    <img
      v-if="top"
      src="@/assets/img/menul_top_blu.gif"
    />
    <div class="card" v-bind:class="{ bot: bot }">
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
    <img
      v-if="bot"
      src="@/assets/img/footg_blu_ext.gif"
    />
    
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    bot: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 12px;
  width: 154px;
  padding: 17px 5px;
  height: auto;
  text-align: center;
  background-color: #d5e6f3;
  background-image: linear-gradient(
    to bottom,
    #aadcfc 0px,
    #6ebef0 12px,
    #6ebef0 calc(100% - 12px),
    #5aa1cd 100%
  );
}

img {
  display: block;
}

img + .card {
  border-radius: 0 0 12px 12px;
  display: inline-block;
  background-image: linear-gradient(
    to bottom,
    #6ebef0 0px,
    #6ebef0 calc(100% - 12px),
    #5aa1cd 100%
  );
}

.bot {
  border-radius: 12px 12px 0 0;
  display: block;
  background-image: linear-gradient(
    to bottom,
    #aadcfc 0px,
    #6ebef0 12px,
    #6ebef0 100%
  );
}
</style>