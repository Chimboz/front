<template>
  <div>
    <router-link to="/bite"
      class="list"
      v-for="(entry, i) of sideNavEntries"
      :key="i"
    >
      <img
        src="@/asset/img/puce.svg"
        alt="Puce"
        draggable="false"
        @contextmenu.prevent
      >&nbsp;{{
        entry.labelKey ? $t(entry.labelKey) : entry.label
      }}
    </router-link>
  </div>
</template>

<script setup>
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
</script>
