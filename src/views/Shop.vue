<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <div class="flex col fullwidth">
          <router-link to="/bite" class="list"
            ><img
              draggable="false"
              oncontextmenu="return false"
              alt="Puce"
              src="@/assets/img/puce.svg"
            />&nbsp;{{ $t("myAccount.link") }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img
              draggable="false"
              oncontextmenu="return false"
              alt="Puce"
              src="@/assets/img/puce.svg"
            />&nbsp;{{ $t("myAccount.internalMessagingLink") }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img
              draggable="false"
              oncontextmenu="return false"
              alt="Puce"
              src="@/assets/img/puce.svg"
            />&nbsp;{{ $t("myAccount.myGroupsLink") }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img
              draggable="false"
              oncontextmenu="return false"
              alt="Puce"
              src="@/assets/img/puce.svg"
            />&nbsp;{{ $t("myAccount.myFriendsLink") }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img
              draggable="false"
              oncontextmenu="return false"
              alt="Puce"
              src="@/assets/img/puce.svg"
            />&nbsp;Forum</router-link
          >
          <router-link to="/bite" class="list"
            ><img
              draggable="false"
              oncontextmenu="return false"
              alt="Puce"
              src="@/assets/img/puce.svg"
            />&nbsp;{{ $t("myAccount.notSmartLink") }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img
              draggable="false"
              oncontextmenu="return false"
              alt="Puce"
              src="@/assets/img/puce.svg"
            />&nbsp;MajMin</router-link
          >
          <router-link to="/bite" class="list"
            ><img
              draggable="false"
              oncontextmenu="return false"
              alt="Puce"
              src="@/assets/img/puce.svg"
            />&nbsp;{{ $t("myAccount.shoppingLink") }}</router-link
          >
        </div>
      </Card></template
    >
    <Card yellow filename="shop.svg">
      <template #header></template>
      <img
        draggable="false"
        oncontextmenu="return false"
        class="fullwidth pack-preview"
        src="@/assets/img/shop/cabin.svg"
      />
      <h3>Les dernières fringues</h3>
      <div class="menu flex">
        <div class="flex hstack">
          <Pack header="summer.png" footer="summer.png" /><Pack
            header="summer.png"
            footer="summer.png"
          /><Pack header="summer.png" footer="summer.png" /><Pack
            header="summer.png"
            footer="summer.png"
          /><Pack header="summer.png" footer="summer.png" /><Pack
            header="summer.png"
            footer="summer.png"
          /><Pack header="summer.png" footer="summer.png" /><Pack
            header="summer.png"
            footer="summer.png"
          /><Pack header="summer.png" footer="summer.png" /><Pack
            header="summer.png"
            footer="summer.png"
          />
        </div>
      </div>
    </Card>
    <template #right-column><Bank :credits="data.credits" /></template>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Container from "@/components/Container.vue";
import Bank from "@/components/Bank.vue";
import Pack from "@/components/Pack.vue";

export default {
  name: "Shop",
  components: {
    Container,
    Card,
    Bank,
    Pack,
  },
  data() {
    return {
      data: [],
      error: null,
      loading: true,
    };
  },
  beforeRouteEnter(to, from, next) {
    const url = "/api/shop.json";
    next((vm) => {
      vm.axios
        .get(url)
        .then((res) => {
          if (res) {
            vm.data = res.data;
            vm.loading = false;
          } else {
            // Didn't like the result, redirect
            next("/");
          }
        })
        .catch((error) => {
          vm.error = error.toString();
        });
    });
  },
  async beforeRouteUpdate() {
    try {
      this.data = await this.axios
        .get("/api/shop.json")
        .then((res) => res.data);
    } catch (error) {
      this.error = error.toString();
    }
  },
};
</script>
<style lang="scss" scoped>
.pack-preview {
  margin-top: -50px;
}

h3 {
  border-bottom: 2px solid;
  font-family: "Chimboz Heavy";
  font-weight: normal;
  color: #ff2fac;
  font-size: 18px;
  line-height: 14px;
  text-align: left;
  margin-bottom: 6px;
}

.menu {
  position: relative;
}

.menu > div {
  position: relative;
  flex-wrap: wrap;
  max-height: 404px;
  overflow-y: auto;
  padding: 6px 0;
}

.menu:before {
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    #fff4d5,
    transparent 12px,
    transparent calc(100% - 12px),
    #fff4d5
  );
  position: absolute;
  z-index: 1;
  content: "";
  width: 100%;
  height: 404px;
}
</style>