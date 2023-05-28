<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries category="account" />
        </div>
      </Card>
      <Rules bot />
    </template>
    <Card color="yellow" left>
      <template #subtop>
        {{ $t('notsmart') }}
      </template>
      <span v-html="$t('notsmart.description')" />
      <form @submit.prevent="changePassword">
        <input
          v-model="currentPassword"
          required
          name="password"
          type="password"
          aria-label="$t('placeholder.password.current')"
          :placeholder="$t('placeholder.password.current')"
          autocomplete="current-password"
          class="btn-md"
        />
        <input
          v-model="newPassword"
          required
          name="password"
          type="password"
          aria-label="$t('placeholder.password.new')"
          :placeholder="$t('placeholder.password.new')"
          class="btn-md"
        />
        <input
          v-model="confirmPassword"
          required
          name="password_confirm"
          type="password"
          aria-label="$t('placeholder.password.confirm')"
          :placeholder="$t('placeholder.password.confirm')"
          class="btn-md"
        />
        <Button class="my-3" type="submit" color="green">
          <template #prepend>
            <img
              draggable="false"
              alt="Arrow icon"
              class="arrow jitter green"
              width="40"
              height="33"
              src="@/assets/img/arrow.svg"
              @contextmenu.prevent
            /> </template
          >{{ $t('button.send') }}
        </Button>
      </form>
      {{ $t('notsmart.footer') }}
    </Card>
    <template #right-column />
  </Container>
</template>
<script setup lang="ts">
const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

function changePassword() {
  useFetch('account/password', {
    method: 'post',
    body: {
      pass: currentPassword.value,
      new: newPassword.value,
      confirm: confirmPassword.value,
    },
  });
}

definePageMeta({
  category: 'account',
  section: 'notsmart',
});
const { t } = useI18n();
useHead({ title: computed(() => t('notsmart')) });
</script>
