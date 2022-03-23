<template>
  <div class="scrollable" @scroll.passive="onScroll">
    <slot></slot>
    <div v-if="isLoading" class="spinner-loading">
      <img
        src="@/asset/img/loading.svg" alt="Loading spinner" 
        draggable="false"
        width="200"
        height="200"
        @contextmenu.prevent
      />
    </div>
  </div>
</template>

<script>
// @vuese
// @group View/Community
// Encyclopedia page
export default {
  name: "ScrollableContainer",
  data() {
    return {
      page: 0,
      isLoading: false,
      hasEnded: false,
    };
  },
  props: {
    route: {
      type: String,
      required: true,
    },
  },
  methods: {
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight - 5 && !this.hasEnded) {
        this.isLoading = true;
        this.api.get(`/api/${this.route}/${++this.page}.json`).then(
          (res) => {
            this.$emit("scrollData", res.data);
            this.isLoading = false;
          },
          () => {
            this.isLoading = false;
            this.hasEnded = true;
          }
        );
      }
    },
  },
};
</script>
<style style="scss" scoped>
.scrollable {
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.3s;
}

.spinner-loading {
  background: var(--dark);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  border-radius: var(--border-radius);
}
</style>
