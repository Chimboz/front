<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="account" />
        </div> </Card
      ><br />
      <Rules bot />
    </template>
    <Card color="yellow" justified>
      <template #subtop>Pamalin</template>
      On t'a dit que tu allais avoir des nouvelles fringues, que tu allais
      pouvoir devenir modo, que tu allais gagner des points ou un niveau, et tu
      as donné ton mot de passe à quelqu'un !<br />
      <br />
      Et évidemment, tu y a cru... <h3>T'es pas malin !</h3><br />
      <br />
      Il ne te reste plus qu'a changer de mot de passe rapidement :<br />
      <br />
      <form @submit.prevent="changePassword">
        <input
          required
          name="password"
          type="password"
          :placeholder="$t('placeholder.currentpassword')"
          autocomplete="current-password"
          class="btn-md"
        />
        <input
          required
          name="password"
          type="password"
          :placeholder="$t('placeholder.newpassword')"
          class="btn-md"
        />
        <input
          required
          name="password_confirm"
          type="password"
          :placeholder="$t('placeholder.confirmpassword')"
          class="btn-md"
        />
        <br />
        <Button type="submit" color="green"
          ><template #prepend
            ><img
              draggable="false"
              @contextmenu.prevent
              alt="Arrow icon"
              class="arrow jitter green"
              src="@/asset/img/arrow.svg" /></template
          >Envoyer</Button
        ></form
      >
      <br />
      Par contre, si tu as donné ton mot de passe de compte e-mail, tu es le
      dernier des pamalins et nous ne pouvons plus rien pour toi ...
    </Card>
    <template #right-column></template>
  </Container>
</template>
<script>
export default {
  name: "Notsmart",
  methods: {
    changePassword() {
      console.log("Change password");
    }
  }
};
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.message {
  text-decoration: none;
  color: #284555;
  font-weight: normal;
  overflow: hidden;
}

.tiz-portrait {
  margin: 6px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  float: left;
  box-shadow: 0 1px 1px 1px #0005;
}

.message::after,
.message .tiz::after {
  content: "";
  clear: both;
  display: table;
}

.message:hover {
  background: #fff6;
}
</style>
