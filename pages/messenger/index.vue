<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div>
      </Card><br>
      <Rules bot />
    </template>
    <Card color="yellow" justified header="mi.svg">
      <div class="flex">
        <input
          required
          minlength="3"
          maxlength="15"
          pattern="[\w\.\-_@]{3,15}"
          name="username"
          type="text"
          class="btn-md"
          autocomplete="username"
          aria-label="Username"
          :placeholder="$t('placeholder.username')"
        ><button type="button" class="btn-action">
          go
        </button>
      </div>
      <ScrollableContainer
        class="fullwidth"
        route="messages"
        :max-height="450"
        @scroll-data="(results: any[]) => (data = [...data, ...results])"
      >
        <div
          v-for="message of data"
          :key="message.user.id"
          class="message flex pointer"
          :class="{ active: message.new }"
          @click="$router.push('/messenger/' + message.user.id)"
        >
          <div
            class="tiz-portrait"
            :style="{ background: hashColor(message.user.name) }"
          >
            <Avatar
              :avatar="message.user.look.avatar"
              :emote="message.user.look.emote"
              :hat="message.user.look.hat"
              :body="message.user.look.body"
              :shoe="message.user.look.shoe"
              :item0="message.user.look.item0"
              :item1="message.user.look.item1"
              :item2="message.user.look.item2"
            />
          </div>
          <div
            class="flex col"
            style="
              justify-content: space-evenly;
              padding: 6px;
              width: calc(100% - 50px);
            "
          >
            <div>
              <h3>
                <LinkUser :user="message.user" /><span
                  style="
                    float: right;
                    font-weight: normal;
                    font-size: var(--font-size);
                  "
                >{{ $distanceToNow(message.date) }}</span>
              </h3>
            </div>
            <span>{{ message.content.slice(0, 64) }}</span>
          </div>
        </div>
      </ScrollableContainer>
    </Card>
    <template #right-column />
  </Container>
</template>
<script setup lang="ts">



const { data } = await useFetch<any>('/api/mi')

useHead({ title: 'section.messenger' })
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.message {
  text-decoration: none;
  color: var(--text);
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
  background: var(--selected-dark-card);
}

.active {
  background: var(--selected-dark-card);
}
</style>
