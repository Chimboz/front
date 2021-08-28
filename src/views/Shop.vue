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
      <img class="fullwidth pack-preview" src="@/assets/img/shop/cabin.svg" />
      <h3>Les dernières fringues</h3>
      <div class="menu flex hstack">
        <img class="pack flex animated" src="@/assets/img/packs/1.jpg" /><img
          class="pack flex animated"
          src="@/assets/img/packs/1.jpg"
        /><img class="pack flex animated" src="@/assets/img/packs/1.jpg" /><img
          class="pack flex animated"
          src="@/assets/img/packs/1.jpg"
        /><img class="pack flex animated" src="@/assets/img/packs/1.jpg" /><img
          class="pack flex animated"
          src="@/assets/img/packs/1.jpg"
        /><img class="pack flex animated" src="@/assets/img/packs/1.jpg" /><img
          class="pack flex animated"
          src="@/assets/img/packs/1.jpg"
        /><img class="pack flex animated" src="@/assets/img/packs/1.jpg" /><img class="pack flex animated" src="@/assets/img/packs/1.jpg" />
      </div>
    </Card>
    <template #right-column
      ><Bank :credits="data.credits"/></template
    >
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Container from "@/components/Container.vue";
import Bank from "@/components/Bank.vue"

export default {
  name: "Shop",
  components: {
    Container,
    Card,
    Bank
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
<style lang="scss">
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
}

.menu {
  flex-wrap: wrap;
  margin: 6px 0;
  max-height: 390px;
  overflow-y: auto;
}

.pack {
  max-width: calc(25% - var(--gap));
  flex: 1 0 0%;
}

.pack:hover {
  animation: pack-hover 1s forwards;
}

@keyframes pack-hover {
  5% {
    transform: translateY(-10px);
  }
}
</style>