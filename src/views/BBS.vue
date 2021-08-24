<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <div class="flex col fullwidth">
          <router-link to="/bite" class="list"
            ><img alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.link")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.internalMessagingLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.myGroupsLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.myFriendsLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img
              alt="Puce"
              src="@/assets/img/puce.svg"
            />&nbsp;Forum</router-link
          >
          <router-link to="/bite" class="list"
            ><img alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.notSmartLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img
              alt="Puce"
              src="@/assets/img/puce.svg"
            />&nbsp;MajMin</router-link
          >
          <router-link to="/bite" class="list"
            ><img alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.shoppingLink")
            }}</router-link
          >
        </div>
      </Card></template
    >
    <BoardList :boards="data"> </BoardList>
    <br />
    <Card
      ><div class="symbol-info">
        <img
          alt="BBS Verrouillé (nouveaux messages)"
          title="BBS Verrouillé (nouveaux messages)"
          src="@/assets/img/bbs/folder_new_lock.svg"
        />&nbsp;Verrouillé nouveaux messages&nbsp;<br />
        <img
          alt="BBS Verrouillé"
          title="BBS Verrouillé"
          src="@/assets/img/bbs/folder_lock.svg"
        />&nbsp;Verrouillé&nbsp;<br />
        <img
          alt="Nouveaux messages"
          title="Nouveaux messages"
          src="@/assets/img/bbs/folder_new.svg"
        />&nbsp;Nouveaux messages&nbsp;<br />
        <img
          alt="Pas de nouveaux messages"
          title="Pas de nouveaux messages"
          src="@/assets/img/bbs/folder.svg"
        />&nbsp;Pas de nouveaux messages&nbsp;<br /></div
    ></Card>
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
      data: [],
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
.symbol-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>