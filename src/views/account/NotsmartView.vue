<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <GlobalCard color="yellow" justified>
      <template #subtop>Pamalin</template>
      On t'a dit que tu allais avoir des nouvelles fringues, que tu allais
      pouvoir devenir modo, que tu allais gagner des points ou un niveau, et tu
      as donné ton mot de passe à quelqu'un !<br />
      <br />
      Et évidemment, tu y a cru...
      <h3>T'es pas malin !</h3>
      <br />
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
        <GlobalButton type="submit" color="green"
          ><template #prepend
            ><img
              draggable="false"
              @contextmenu.prevent
              alt="Arrow icon"
              class="arrow jitter green"
              width="40"
              height="33"
              src="@/assets/img/arrow.svg" /></template
          >Envoyer</GlobalButton
        >
      </form>
      <br />
      Par contre, si tu as donné ton mot de passe de compte e-mail, tu es le
      dernier des pamalins et nous ne pouvons plus rien pour toi ...
    </GlobalCard>
    <template #right-column></template>
  </GlobalContainer>
</template>
<script setup lang="ts">
// @vuese
// @group View/Account
// Notsmart page

function changePassword() {
  console.log("Change password");
}
// meta title section.notsmart
</script>
