<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <Card header="group.gif" :height="70" color="blue" v-if="data">
      <div class="group-header">
        <blazon
          :shape="data.blazon.shape"
          :top="data.blazon.top"
          :bot="data.blazon.bot"
          :primary="data.blazon.primary"
          :secondary="data.blazon.secondary"
        />
        <div class="flex col">
          <StrokeText class="group-name">{{ this.data.name }}</StrokeText>
          <div class="motto">"{{ this.data.motto }}"</div>
        </div>
      </div>
      <div class="markdown-body description" v-html="formatDescription"></div>
      <Card v-if="data" class="justified">
        {{ $t(`group.leader.${data.type}`) }}:
        <User :user="data.leader" />
        <br /><br />
        Occupation du groupe:
        <b
          >{{
            Math.round(
              ((data.members.length / data.size) * 100 + Number.EPSILON) * 100
            ) / 100
          }}%</b
        >
        (<b>{{ data.members.length }}</b
        >/<b>{{ data.size }}</b
        >)<br /><br />
        Membres du groupe:
        <User
          v-for="(user, index) of this.data.members"
          :user="user"
          :key="user.id"
          :separator="index < this.data.members.length - 1"
        /><br /><br />
        Localisation : <b>{{ data.localisation }}</b
        ><br /><br />
        <div class="icon flex centered">
          Niveau moyen
          <img
            draggable="false"
            @contextmenu.prevent
            width="19"
            height="21"
            src="@/asset/img/number/2.svg"
          /><img
            draggable="false"
            @contextmenu.prevent
            width="19"
            height="21"
            src="@/asset/img/number/5.svg"
          />
        </div>
        &nbsp;<img
          :src="require(`@/asset/img/group/${this.data.status}.png`)"
        />
      </Card>
    </Card>
    <template #right-column
      ><Card color="blue" v-if="data">
        <template #header> Inscription pour rejoindre ce groupe </template>
        <div class="justified">
          <img
            :src="require(`@/asset/img/group/${this.data.status}.png`)"
            style="float: left"
          />
          {{ $t(`group.${this.data.status}`) }}
          <br />
          <br />
          Seulement <b>les membres</b> peuvent joindre un groupe. <br />Si tu es
          déjà un membre,
          <router-link to="login">connecte toi</router-link> pour accéder aux
          inscriptions des groupes.</div
        >
      </Card></template
    >
  </Container>
</template>
<script>
import Blazon from "@/component/blazon/Blazon.vue";
import StrokeText from "@/component/StrokeText.vue";
import messageRender from "@/module/messageRender.js";
import User from "@/component/link/User.vue";

export default {
  name: "Group",
  components: {
    Blazon,
    StrokeText,
    User
  },
  data() {
    return {
      data: null
    };
  },
  computed: {
    formatDescription() {
      return messageRender(this.data.description);
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/group.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/group.json");
    this.data = req.data;
  }
};
</script>

<style lang="scss" scoped>
.blazon {
  float: left;
}
.motto {
  text-align: left;
  padding: 0 6px;
}

.group-name {
  height: 28px;
  font-size: 28px;
  fill: #fff;
  stroke: #f39;
  stroke-width: 4;
}

.description {
  text-align: left;
}

.group-header {
  font-family: "Chimboz Heavy";
  color: #3c556f;
  font-size: 16px;
  min-height: 90px;
}

.icon {
  display: inline-flex;
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
  flex-wrap: wrap;
  justify-content: center;
  width: 50px;
  height: 50px;
  line-height: 10px;
  border: 1px solid #6090be;
  background: linear-gradient(to bottom, #deeaf5, #a7c6e4);
  border-radius: 4px;
  vertical-align: middle;
}
</style>
