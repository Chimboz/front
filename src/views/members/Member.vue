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
        </div> </Card
      ><br />
      <Rules />
    </template>
    <span class="pink justified">
      <router-link to="/bbs" class="pink"
        >» Retour à l'annuaire</router-link
      > </span
    ><br />
    <Card class="member">
      <div class="member-header">
        <Tiz />
        <div class="flex column" style="position: relative">
          <StrokeText class="pseudo">Tigriz</StrokeText>
          "Nitens lux machin"
        </div>
      </div>
      <div class="member-body">
        <div class="member-portrait"><Tiz /><div class="online flex centered tchat"><img
            draggable="false"
            oncontextmenu="return false"
            src="@/assets/img/tiz/tiz_shape.svg"
          />&nbsp;<b>En ligne</b></div></div>
        <p>
          Marié avec
          <User :user="{ id: '2', name: 'Tigriz', color: '#f0f' }" /> depuis 76
          jours
        </p>
        <p>Intérêts : Musique, informatique, mathématiques, Sayaka</p>
        <p>Page perso : http://last.fm/user/Tigriz</p>
        <p>
          Inscrit aux groupes :
          <Group :group="{ id: '2', name: 'L\'Eglise', color: '#000' }" />, La
          Chatterie
        </p>
        <div class="icon flex centered">
          Chimbo
          <img
            draggable="false"
            oncontextmenu="return false"
            src="@/assets/img/sex/male.svg"
          />
        </div>
        &nbsp;
        <div class="icon flex centered">
          Niveau<br /><img
            draggable="false"
            oncontextmenu="return false"
            src="@/assets/img/numbers/2.svg"
          /><img
            draggable="false"
            oncontextmenu="return false"
            src="@/assets/img/numbers/5.svg"
          />
        </div>
        <br /><br />
        <p>Vérification du nom : <b>tigriz, TIGRIZ</b></p>
        <p>Signe astrologique : <b>dragon rouge de terre</b></p>
      </div>
      <div class="member-section">
        Classement : 25ème 19 parties, 10 gagnées, 9 perdues, 0 nulles 40 points
      </div>
    </Card>
    <template #right-column
      ><Card blue top>
        <template #header> Records ! </template>
        <template #subtitle
          >Dans le bon ou le mauvais, ce sont les meilleurs !</template
        >
        parties jouées:
        <br />
        fredazur avec 22665 parties jouées ! <br />
        <br />
        parties gagnées: <br />
        AleXxX_DeViLMaN avec 15171 parties gagnées ! <br />
        <br />
        parties perdues: <br />
        fredazur avec 20763 parties perdues ! <br />
        <br />
        match nuls: <br />
        20CeNt avec 1077 match nuls ! <br /> </Card
    ></template>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Rules from "@/components/Rules.vue";
import Tiz from "@/components/Tiz.vue";
import User from "@/components/links/User.vue";
import Group from "@/components/links/Group.vue";
import StrokeText from "@/components/StrokeText.vue";
import Container from "@/components/Container.vue";

export default {
  name: "Member",
  components: {
    Card,
    Container,
    Rules,
    Tiz,
    User,
    Group,
    StrokeText,
  },
};
</script>
<style lang="scss">
.member .card {
  background: linear-gradient(
    to bottom,
    #5a9bbf,
    #d5e6f3,
    var(--main-card-color) calc(100% - 12px),
    var(--dark-card-color) 100%
  );
}
</style>
<style lang="scss" scoped>
.member {
  overflow: hidden;
}

.member-body {
  background: #eff5fa;
  clear: both;
}

.member-header {
  font-family: "Chimboz Heavy";
  color: #fff;
  font-size: 20px;
  text-shadow: 2px 1px #0008;
  min-height: 90px;
}

.member-header .tiz {
  margin-top: -5%;
  float: left;
  width: 33%;
  margin-bottom: -100%;

  transform: rotate(-5deg);
}

.pseudo {
  font-size: 35px;
  fill: #fff;
  stroke: #f39;
  stroke-width: 3;
  text-shadow: -1px 3px #f39;
  height: 35px;
  overflow: visible;
}

.member-section,
.member-body {
  text-align: left;
  z-index: 1;
  position: relative;
  border-radius: 8px;
  padding: 8px;
}

.member-portrait {
  float: right;
  background: #fff;
  width: 100px;
}

.member-section {
  background: #a9cbe4;
}

.icon {
  display: inline-flex;
  font-family: "Pixelated Verdana";
  font-size: 13.3333px;
  flex-wrap: wrap;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #6090be;
  background: linear-gradient(to bottom, #deeaf5, #a7c6e4);
  border-radius: 4px;
}

.online {
  font-family: "Pixelated Verdana";
  font-size: 13.3px;
  color: #fff;
  justify-content: center;
  width: 100%;
  height: 26px;
  background:linear-gradient(to bottom, #0193ca, #2d4a97);
  border-radius: 10px;
}

.online.tchat{
  background:linear-gradient(to bottom, #81cb00, #40972d);
}

.online img {
  height: 20px;
}
</style>
