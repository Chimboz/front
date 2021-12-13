<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <img
        draggable="false"
        @contextmenu.prevent
        v-if="type == 'error'"
        width="46"
        height="35"
        src="@/asset/img/icon/warning2.svg"
      />
      <img
        draggable="false"
        @contextmenu.prevent
        v-if="type == 'success'"
        width="46"
        height="46"
        src="@/asset/img/icon/success.svg"
      />
      <img
        draggable="false"
        @contextmenu.prevent
        v-if="type == 'failure'"
        width="46"
        height="46"
        src="@/asset/img/icon/failure.svg"
      />
      <img
        draggable="false"
        @contextmenu.prevent
        v-if="type == 'confirmation'"
        width="46"
        height="42"
        src="@/asset/img/icon/confirmation.svg"
      />
      <p>{{ $t(message) }}</p>
      <button
        class="btn-pink ok"
        @click="request"
        style="filter: hue-rotate(180deg)"
        v-if="type == 'confirmation'"
      >
        <img
          draggable="false"
          @contextmenu.prevent
          src="@/asset/img/icon/ok.svg"
        />
      </button>
      <button class="btn-pink ok" @click="isVisible = false" v-else>
        <img
          draggable="false"
          @contextmenu.prevent
          src="@/asset/img/icon/ok.svg"
        />
      </button>
      <button
        class="btn-pink ko"
        @click="isVisible = false"
        v-if="type == 'confirmation'"
      >
        <img
          draggable="false"
          @contextmenu.prevent
          src="@/asset/img/icon/ko.svg"
        />
      </button>
    </div>
  </div>
</template>
<script>
// @vuese
// @group Core
export default {
  name: "TheModal",
  data() {
    return {
      isVisible: false,
      message: "error.default",
      type: "error",
      callback: ""
    };
  },
  mounted() {
    this.eventBus.on("error", (req) => this.error(req));
    this.eventBus.on("success", (req) => this.success(req));
    this.eventBus.on("failure", (req) => this.failure(req));
    this.eventBus.on("confirmation", (req) => this.confirmation(req));
  },
  methods: {
    error(req) {
      this.isVisible = true;
      this.type = "error";
      this.message = req.message;
    },
    success(req) {
      this.isVisible = true;
      this.type = "success";
      this.message = req.message;
    },
    failure(req) {
      this.isVisible = true;
      this.type = "failure";
      this.message = req.message;
    },
    confirmation(req) {
      this.isVisible = true;
      this.type = "confirmation";
      this.message = req.message;
      this.callback = req.callback;
    },
    async request() {
      const req = await this.api.get(this.callback);
      if (req.data.success) {
        this.success({ message: "success.buy" });
      } else {
        this.failure({ message: "failure.buy" });
      }
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

.modal-content > img {
  margin-right: 12px;
  float: left;
}

.ok {
  position: absolute;
  bottom: 4px;
  right: 4px;
}

.ko {
  position: absolute;
  bottom: 4px;
  right: 30px;
  filter: hue-rotate(45deg);
}
</style>
