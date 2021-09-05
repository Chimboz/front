<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <div class="flex col fullwidth">
          <router-link to="/bite"
            class="list"
            v-for="(entry, i) of sideNavEntries"
            :key="i"
          >
            <img
              src="@/assets/img/puce.svg"
              alt="Puce"
              draggable="false"
              @contextmenu.prevent
            >&nbsp;{{
              entry.labelKey ? $t(entry.labelKey) : entry.label
            }}
          </router-link>
        </div>
      </Card></template
    >
    <Board :topics="data"> </Board>
    <br />
    <Card
      ><img draggable="false" oncontextmenu="return false" 
        src="@/assets/img/bbs/folder_new.svg"
        alt="Nouveaux messages"
        title="Nouveaux messages"
      />
      Nouveaux messages<br />
      <img draggable="false" oncontextmenu="return false" 
        src="@/assets/img/bbs/folder_new_hot.svg"
        alt="Nouveaux messages [ Populaire ]"
        title="Nouveaux messages [ Populaire ]"
      />
      Nouveaux messages [ Populaire ]<br />
      <img draggable="false" oncontextmenu="return false" 
        src="@/assets/img/bbs/folder_new_lock.svg"
        alt="Nouveaux messages [ Verrouillé ]"
        title="Nouveaux messages [ Verrouillé ]"
      />
      Nouveaux messages [ Verrouillé ]<br />
      <img draggable="false" oncontextmenu="return false" 
        src="@/assets/img/bbs/folder.svg"
        alt="Pas de nouveaux messages"
        title="Pas de nouveaux messages"
      />
      Pas de nouveaux messages<br />
      <img draggable="false" oncontextmenu="return false" 
        src="@/assets/img/bbs/folder_hot.svg"
        alt="Pas de nouveaux messages [ Populaire ]"
        title="Pas de nouveaux messages [ Populaire ]"
      />
      Pas de nouveaux messages [ Populaire ]<br />
      <img draggable="false" oncontextmenu="return false" 
        src="@/assets/img/bbs/folder_lock.svg"
        alt="Pas de nouveaux messages [ Verrouillé ]"
        title="Pas de nouveaux messages [ Verrouillé ]"
      />
      Pas de nouveaux messages [ Verrouillé ]<br />
      <img draggable="false" oncontextmenu="return false" 
        src="@/assets/img/bbs/folder_announce.svg"
        alt="Annonce"
        title="Annonce"
      />
      Annonce<br />
      <img draggable="false" oncontextmenu="return false" 
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
import Board from "@/components/bbs/list/Board.vue";
import Container from "@/components/Container.vue";

const sideNavEntries = [{
  labelKey: "myAccount.link"
}, {
  labelKey: "myAccount.internalMessagingLink"
}, {
  labelKey: "myAccount.myGroupsLink"
}, {
  labelKey: "myAccount.myFriendsLink"
}, {
  label: "Forum"
}, {
  labelKey: "myAccount.notSmartLink"
}, {
  label: "MajMin"
}, {
  labelKey: "myAccount.shoppingLink"
}]

export default {
  name: "BBS",
  components: {
    Board,
    Container,
    Card,
  },
  data() {
    return {
      data: [],
      error: null,
      loading: true,
      sideNavEntries,
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
      this.data = await this.axios.get("/api/bbs_agora.json").then((res)=>res.data);
    } catch (error) {
      this.error = error.toString();
    }
  },
};
</script>
