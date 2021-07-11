<template>
  <div>
    <img
      v-if="top"
      src="@/assets/img/menul_top_blu.gif"
    />
    <div class="column-card" v-bind:class="{ bot: bot }">
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
.column-card {
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
  box-shadow: 0px 1px #355668;
}

img {
  display: block;
}

img + .column-card {
  border-radius: 0 0 12px 12px;
  padding-top: 5px;
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
  padding-bottom: 5px;
  background-image: linear-gradient(
    to bottom,
    #aadcfc 0px,
    #6ebef0 12px,
    #6ebef0 100%
  );
}
</style>