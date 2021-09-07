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
    <Card>
      <div v-for="(description, i) in iconDescriptions" :key="i">
        <img
          :src="description.src"
          :alt="description.label"
          :title="description.label"
          draggable="false"
          @contextmenu.prevent
        >
        {{ description.label }}
      </div>
    </Card>
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
  
const iconDescriptions = [{
  src: require("@/assets/img/bbs/folder_new.svg"),
  label: "Nouveaux messages"
}, {
  src: require("@/assets/img/bbs/folder_new_hot.svg"),
  label: "Nouveaux messages [ Populaire ]"
}, {
  src: require("@/assets/img/bbs/folder_new_lock.svg"),
  label: "Nouveaux messages [ Verrouillé ]",
}, {
  src: require("@/assets/img/bbs/folder.svg"),
  label: "Pas de nouveaux messages"
}, {
  src: require("@/assets/img/bbs/folder_hot.svg"),
  label: "Pas de nouveaux messages [ Populaire ]"
}, {
  src: require("@/assets/img/bbs/folder_lock.svg"),
  label: "Pas de nouveaux messages [ Verrouillé ]"
}, {
  src: require("@/assets/img/bbs/folder_announce.svg"),
  label: "Annonce"
}, {
  src: require("@/assets/img/bbs/folder_sticky.svg"),
  label: "Post-it"
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
      iconDescriptions,
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
