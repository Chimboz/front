<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
      <img
        v-if="type == 'error'"
        draggable="false"
        width="46"
        height="35"
        src="@/assets/img/icon/warning2.svg"
        alt="Error"
        @contextmenu.prevent
      />
      <img
        v-if="type == 'success'"
        draggable="false"
        width="46"
        height="46"
        src="@/assets/img/icon/success.svg"
        alt="Success"
        @contextmenu.prevent
      />
      <img
        v-if="type == 'failure'"
        draggable="false"
        width="46"
        height="46"
        src="@/assets/img/icon/failure.svg"
        alt="Failure"
        @contextmenu.prevent
      />
      <img
        v-if="type == 'confirmation'"
        draggable="false"
        width="46"
        height="42"
        alt="Confirmation"
        src="@/assets/img/icon/confirmation.svg"
        @contextmenu.prevent
      />
      <p>{{ $t(message) }}</p>
      <button
        v-if="type == 'confirmation'"
        type="button"
        class="btn-pink ok"
        style="filter: hue-rotate(180deg)"
        @click="request"
      >
        <img
          draggable="false"
          src="@/assets/img/icon/ok.svg"
          alt="Ok"
          @contextmenu.prevent
        />
      </button>
      <button
        v-else
        type="button"
        class="btn-pink ok"
        @click="isVisible = false"
      >
        <img
          draggable="false"
          src="@/assets/img/icon/ok.svg"
          alt="Ok"
          @contextmenu.prevent
        />
      </button>
      <button
        v-if="type == 'confirmation'"
        type="button"
        class="btn-pink ko"
        @click="isVisible = false"
      >
        <img
          draggable="false"
          alt="Ko"
          src="@/assets/img/icon/ko.svg"
          @contextmenu.prevent
        />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import api from "@/modules/api";
import eventBus from "@/modules/eventBus";
import { ref } from "vue";

const isVisible = ref(false);
const message = ref("error.default");
const type = ref("error");

function notice(modalType: string, modalMessage: string) {
  isVisible.value = true;
  type.value = modalType;
  message.value = modalMessage;
}

async function confirmation(req: any) {
  isVisible.value = true;
  type.value = "confirmation";
  message.value = req.message;
  await api.get(req.callback, req.params);
}

eventBus.on("error", (msg) => notice("error", msg));
eventBus.on("success", (msg) => notice("success", msg));
eventBus.on("failure", (msg) => notice("failure", msg));
eventBus.on("confirmation", (req) => confirmation(req));

async function request() {
  /* const req = await api.post(callback, params);
  if (req.data.success) {
    success({ message: "success.buy" });
  } else {
    failure({ message: "failure.buy" });
  } */
}
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
