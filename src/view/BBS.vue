<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <div class="flex col fullwidth">
          <router-link to="/bite" class="list"
            ><img draggable="false" oncontextmenu="return false"  alt="Puce" src="@/asset/img/puce.svg" />&nbsp;{{
              $t("myAccount.link")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false" oncontextmenu="return false"  alt="Puce" src="@/asset/img/puce.svg" />&nbsp;{{
              $t("myAccount.internalMessagingLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false" oncontextmenu="return false"  alt="Puce" src="@/asset/img/puce.svg" />&nbsp;{{
              $t("myAccount.myGroupsLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false" oncontextmenu="return false"  alt="Puce" src="@/asset/img/puce.svg" />&nbsp;{{
              $t("myAccount.myFriendsLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false" oncontextmenu="return false" 
              alt="Puce"
              src="@/asset/img/puce.svg"
            />&nbsp;Forum</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false" oncontextmenu="return false"  alt="Puce" src="@/asset/img/puce.svg" />&nbsp;{{
              $t("myAccount.notSmartLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false" oncontextmenu="return false" 
              alt="Puce"
              src="@/asset/img/puce.svg"
            />&nbsp;MajMin</router-link
          >
          <router-link to="/shop" class="list"
            ><img draggable="false" oncontextmenu="return false"  alt="Puce" src="@/asset/img/puce.svg" />&nbsp;{{
              $t("myAccount.shoppingLink")
            }}</router-link
          >
        </div>
      </Card></template
    >
    <BBSList :boards="data"> </BBSList>
    <br />
    <Card
      ><div class="symbol-info flex centered">
        <img draggable="false" oncontextmenu="return false" 
          alt="BBS Verrouillé (nouveaux messages)"
          title="BBS Verrouillé (nouveaux messages)"
          src="@/asset/img/bbs/folder_new_lock.svg"
        />&nbsp;Verrouillé nouveaux messages&nbsp;<br />
        <img draggable="false" oncontextmenu="return false" 
          alt="BBS Verrouillé"
          title="BBS Verrouillé"
          src="@/asset/img/bbs/folder_lock.svg"
        />&nbsp;Verrouillé&nbsp;<br />
        <img draggable="false" oncontextmenu="return false" 
          alt="Nouveaux messages"
          title="Nouveaux messages"
          src="@/asset/img/bbs/folder_new.svg"
        />&nbsp;Nouveaux messages&nbsp;<br />
        <img draggable="false" oncontextmenu="return false" 
          alt="Pas de nouveaux messages"
          title="Pas de nouveaux messages"
          src="@/asset/img/bbs/folder.svg"
        />&nbsp;Pas de nouveaux messages&nbsp;<br /></div
    ></Card>
  </Container>
</template>

<script>
import Card from "@/component/Card.vue";
import BBSList from "@/component/bbs/list/BBS.vue";
import Container from "@/component/Container.vue";

export default {
  name: "BBS",
  components: {
    BBSList,
    Container,
    Card
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
      this.data = await this.axios.get("/api/bbs.json").then((res)=>res.data);
    } catch (error) {
      this.error = error.toString();
    }
  },
};
</script>
<style lang="scss">
.symbol-info {
  flex-direction: row;
  justify-content: center;
}
</style>