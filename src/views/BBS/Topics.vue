<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <div class="menu fullwidth">
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
    <TopicList :topics="data"> </TopicList>
    <br />
    <Card
      ><img
        src="@/assets/img/bbs/folder_new.svg"
        alt="Nouveaux messages"
        title="Nouveaux messages"
      />
      Nouveaux messages<br />
      <img
        src="@/assets/img/bbs/folder_new_hot.svg"
        alt="Nouveaux messages [ Populaire ]"
        title="Nouveaux messages [ Populaire ]"
      />
      Nouveaux messages [ Populaire ]<br />
      <img
        src="@/assets/img/bbs/folder_new_lock.svg"
        alt="Nouveaux messages [ Verrouillé ]"
        title="Nouveaux messages [ Verrouillé ]"
      />
      Nouveaux messages [ Verrouillé ]<br />
      <img
        src="@/assets/img/bbs/folder.svg"
        alt="Pas de nouveaux messages"
        title="Pas de nouveaux messages"
      />
      Pas de nouveaux messages<br />
      <img
        src="@/assets/img/bbs/folder_hot.svg"
        alt="Pas de nouveaux messages [ Populaire ]"
        title="Pas de nouveaux messages [ Populaire ]"
      />
      Pas de nouveaux messages [ Populaire ]<br />
      <img
        src="@/assets/img/bbs/folder_lock.svg"
        alt="Pas de nouveaux messages [ Verrouillé ]"
        title="Pas de nouveaux messages [ Verrouillé ]"
      />
      Pas de nouveaux messages [ Verrouillé ]<br />
      <img
        src="@/assets/img/bbs/folder_announce.svg"
        alt="Annonce"
        title="Annonce"
      />
      Annonce<br />
      <img
        src="@/assets/img/bbs/folder_sticky.svg"
        alt="Post-it"
        title="Post-it"
      />
      Post-it</Card
    >
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import TopicList from "@/components/BBS/TopicList.vue";
import Container from "@/views/Container.vue";

export default {
  name: "BBS",
  components: {
    TopicList,
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
    //const url = "/api/bbs_agora.json";
    const url = "/api/bbs_agora.json";
    next((vm) => {
      vm.axios
        .get(url)
        .then((res) => {
          if (res) {
            vm.data = res.data;
            vm.loading = false;
          } else {
            next("/bbs");
          }
        })
        .catch((error) => {
          vm.error = error.toString();
        });
    });
  },
  async beforeRouteUpdate() {
    try {
      this.data = await this.axios.get("/api/bbs_agora.json");
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
