<template>
  <div>
    <img
      v-if="filename"
      :src="require(`@/assets/img/${filename}`)"
    />
    <div class="card">
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
  name: "Navbar",
  props: {
    filename: {
      type: String,
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
  width: 100%
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
</style>