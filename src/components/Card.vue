<template>
  <div :class="{ yellow: yellow, 'justified': justified }">
    <img v-if="filename" :src="require(`@/assets/img/${filename}`)" />
    <div v-else-if="$slots['subtop']" class="subtop">
      <slot name="subtop"></slot>
    </div>
    <div class="card">
      <h2>
        <slot name="header"></slot>
      </h2>
      <em v-if="$slots['subtitle']">"<slot name="subtitle"></slot>"</em>
      <br v-if="$slots['subtitle'] && $slots.default" />
      <br v-if="$slots['header'] && $slots.default" />
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
    justified: {
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
  padding: 17px;
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
  box-shadow: 0 1px #293d47;
}

img {
  display: block;
  width: 100%;
}

img + .card,
.subtop + .card {
  border-radius: 0 0 12px 12px;
  display: inline-block;
  background-image: linear-gradient(
    to bottom,
    #d5e6f3 0px,
    #d5e6f3 calc(100% - 12px),
    #a5cbe9 100%
  );
}

.subtop {
  color: #fff;
  border-top: 1px solid;
  padding-left: 25px;
  font-family: "Chimboz Heavy";
  font-size: 18px;
  line-height: 12px;
  text-align: left;
  height: 25px;
  box-shadow: 0 -1px #18486a;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
}

.justified .card {
  text-align: justify;
}

.yellow .subtop {
  border-color: #a38c47;
  background-image: linear-gradient(
    to bottom,
    #a38c47 0px,
    #ffe5a3 3px,
    #ffe5a3 calc(100% - 3px),
    #a38c47 100%
  );
  text-shadow: 2px 0 0 #963d00, -2px 0 0 #963d00, 0 2px 0 #963d00,
    0 -2px 0 #963d00, 1px 1px #963d00, -1px -1px 0 #963d00, 1px -1px 0 #963d00,
    -1px 1px 0 #963d00;
}

.yellow .card {
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

.yellow .subtop + .card {
  background-image: linear-gradient(
    to bottom,
    #fff4d5 0px,
    #fff4d5 calc(100% - 12px),
    #ddcb9b 100%
  ) !important;
}

.yellow h2 {
  color: #726338;
}
</style>