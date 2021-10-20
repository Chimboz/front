<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <img
        style="float: left"
        draggable="false"
        @contextmenu.prevent
        src="@/asset/img/icon/warning_modal.svg"
      />
      <p>{{ $t(message) }}</p>
      <button class="pink-icon ok" @click="isVisible = false">
        <img
          draggable="false"
          @contextmenu.prevent
          src="@/asset/img/icon/ok.svg"
        />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      isVisible: false,
      message: "error.default"
    };
  },
  mounted() {
    this.eventBus.on("error", (err) => this.error(err));
  },
  methods: {
    error(err) {
      this.isVisible = true;
      this.message = err.message;
    }
  }
};
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #0007;
}

.modal-content {
  background-color: #69c;
  position: relative;
  margin: 15% auto;
  padding: 20px;
  color: #fff;
  border: 2px solid;
  border-color: #7fbcff #184672 #184672 #7fbcff;
  border-radius: 6px;
  width: 362px;
  height: 103px;
}

.ok {
  position: absolute;
  bottom: 4px;
  right: 4px;
}
</style>
