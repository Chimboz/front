<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <div class="menu fullwidth">
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.link")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.internalMessagingLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.myGroupsLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.myFriendsLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;Forum</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.notSmartLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;MajMin</router-link
          >
          <router-link to="/bite" class="list"
            ><img src="@/assets/img/arrow_sm.svg" />&nbsp;{{
              $t("myAccount.shoppingLink")
            }}</router-link
          >
        </div>
      </Card></template
    >
    <BoardList :boards="data"> </BoardList>
    <br />
    <Card
      ><img src="@/assets/img/bbs/folder_lock.gif" /> Verrouillé<br />
      <img src="@/assets/img/bbs/folder_new.gif" /> Nouveaux messages<br />
      <img src="@/assets/img/bbs/folder.gif" /> Pas de nouveaux messages<br
    /></Card>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import BoardList from "@/components/BBS/BoardList.vue";
import Container from "@/views/Container.vue";

export default {
  name: "BBS",
  components: {
    BoardList,
    Container,
    Card,
  },
  data() {
    return {
      data: null,
      error: null,
      loading: true,
    };
  },
  beforeRouteEnter(to, from, next) {
    const url = "/api/bbs.json";
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
      this.data = await this.axios.get("/api/bbs.json");
    } catch (error) {
      this.error = error.toString();
    }
  },
};
</script>
<style lang="scss">
.main-column {
  width: 100% !important;
}
</style>
