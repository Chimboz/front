<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <div class="flex col fullwidth">
          <router-link to="/bite" class="list"
            ><img draggable="false"  alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.link")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false"  alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.internalMessagingLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false"  alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.myGroupsLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false"  alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.myFriendsLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false"  alt="Puce" src="@/assets/img/puce.svg" />&nbsp;Forum</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false"  alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.notSmartLink")
            }}</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false"  alt="Puce" src="@/assets/img/puce.svg" />&nbsp;MajMin</router-link
          >
          <router-link to="/bite" class="list"
            ><img draggable="false"  alt="Puce" src="@/assets/img/puce.svg" />&nbsp;{{
              $t("myAccount.shoppingLink")
            }}</router-link
          >
        </div>
      </Card></template
    >
    <Topic :messages="data"> </Topic>
    <br />
    <Card></Card>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Topic from "@/components/BBS/List/Topic.vue";
import Container from "@/components/Container.vue";

export default {
  name: "BBS",
  components: {
    Topic,
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
    const url = "/api/topic.json";
    next((vm) => {
      vm.axios
        .get(url)
        .then((res) => {
          if (res) {
            vm.data = res.data;
            vm.loading = false;
          } else {
            // Didn't like the result, redirect
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
      this.data = await this.axios.get("/api/bbs.json");
    } catch (error) {
      this.error = error.toString();
    }
  },
};
</script>
