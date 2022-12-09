<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <img
        draggable="false"
        @contextmenu.prevent
        v-if="type == 'error'"
        width="46"
        height="35"
        src="@/assets/img/icon/warning2.svg"
      />
      <img
        draggable="false"
        @contextmenu.prevent
        v-if="type == 'success'"
        width="46"
        height="46"
        src="@/assets/img/icon/success.svg"
      />
      <img
        draggable="false"
        @contextmenu.prevent
        v-if="type == 'failure'"
        width="46"
        height="46"
        src="@/assets/img/icon/failure.svg"
      />
      <img
        draggable="false"
        @contextmenu.prevent
        v-if="type == 'confirmation'"
        width="46"
        height="42"
        src="@/assets/img/icon/confirmation.svg"
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
          src="@/assets/img/icon/ok.svg"
        />
      </button>
      <button class="btn-pink ok" @click="isVisible = false" v-else>
        <img
          draggable="false"
          @contextmenu.prevent
          src="@/assets/img/icon/ok.svg"
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
          src="@/assets/img/icon/ko.svg"
        />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
// @vuese
// @group Core

  

      isVisible: false,
      message: "error.default",
      type: "error",
      callback: "",
      params: {},
    };
  },
function mounted() {
    eventBus.on("error", (req) => error(req));
    eventBus.on("success", (req) => success(req));
    eventBus.on("failure", (req) => failure(req));
    eventBus.on("confirmation", (req) => confirmation(req));
  },

function error(req) {
      isVisible = true;
      type = "error";
      message = req.message;
    },
function success(req) {
      isVisible = true;
      type = "success";
      message = req.message;
    },
function failure(req) {
      isVisible = true;
      type = "failure";
      message = req.message;
    },
function confirmation(req) {
      isVisible = true;
      type = "confirmation";
      message = req.message;
      callback = req.callback;
      params = req.params;
    },
    async request() {
      const req = await api.post(callback, params);
      if (req.data.success) {
        success({ message: "success.buy" });
      } else {
        failure({ message: "failure.buy" });
      }
    },
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
  background-color: var(--dark);
}

.modal-content {
  background-color: #69c;
  position: relative;
  margin: 15% auto;
  padding: 20px;
  color: var(--light);
  border: 2px solid;
  border-color: #7fbcff #184672 #184672 #7fbcff;
  border-radius: calc(var(--border-radius) / 2);
  width: 362px;
  height: 103px;
}

.modal-content > img {
  margin-right: var(--gap);
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
