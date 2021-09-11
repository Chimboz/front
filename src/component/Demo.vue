<template>
  <div class="background">
    <div class="foreground">
      <div class="demo">
        <div class="demo-btn hstack">
          <button>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/home.svg"
            />
          </button>
          <button>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/mode.svg"
            />
          </button>
          <button>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/tchat.svg"
            />
          </button>
          <button>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/wedding.svg"
            />
          </button>
          <button>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/group.svg"
            />
          </button>
          <button>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/bacteria.svg"
            />
          </button>
          <button>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/empty.svg"
            />
          </button>
          <button>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/empty.svg"
            />
          </button>
          <button>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/empty.svg"
            />
          </button>
          <button>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/empty.svg"
            />
          </button>
          <button>
            <img
              draggable="false"
              @contextmenu.prevent
              src="@/asset/img/demo/empty.svg"
            />
          </button>
        </div>
        <div class="demo-picture">
          <div class="demo-info"></div>
          <img src="@/asset/img/demo/demo.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Message",
  components: {},
};
</script>
<style lang="scss" scoped>
.background {
  background: #fff;
  border-radius: 12px;
  height: 380px;
  width: 100%;
  border-bottom: 2px solid #b6c6cd;
  box-shadow: 0 2px #3e6d7f;
}

.foreground {
  width: 100%;
  height: 345px;
  background: linear-gradient(to bottom, transparent, transparent 50%, #ffe6e6);
  border-radius: 12px;
  border-bottom: 2px solid #fff7f7;
  box-shadow: 0 2px #f3cac2, 0 4px #dfe7ea;
  display: flex;
  justify-content: center;
  padding: 6px;
}

.demo {
  overflow: hidden;
}

.demo-btn {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}


.demo-picture {
  background: url(../asset/img/demo/demo.svg);
  background-size: cover;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
}

.demo:hover .demo-info {
  transform: translateY(0);
}

.demo-info {
  position: absolute;
  transform: translateY(-100%);
  transition: 1s;
  width: 100%;
  height: 45.25px;
  background: url(../asset/img/demo/info.svg);
  background-size: cover;
}

.demo-picture img {
  width: 100%;
  max-width: 457px;
}
</style>
