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
        <div class="demo-info"></div>
        <div class="demo-picture"></div>
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
  align-items: center;
}

.demo-picture {
  width: 457px;
  height: 248px;
  background: url(../asset/img/demo/demo.svg);
}

.demo {
  width: 457px;
}

.demo-info {
  height: 45.25px;
  background: url(../asset/img/demo/info.svg);
}
</style>
