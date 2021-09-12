<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <img
        style="float: left"
        draggable="false"
        @contextmenu.prevent
        src="@/asset/img/icon/warning_modal.svg"
      />
      <p>Some text in the Modal..</p>
      <button class="pink-icon">
        ok
      </button>
    </div>
  </div>
</template>
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
  margin: 15% auto;
  padding: 20px;
  color: #fff;
  border: 2px solid;
  border-color: #7fbcff #184672 #184672 #7fbcff;
  border-radius: 6px;
  width: 362px;
  height: 103px;
}
</style>
