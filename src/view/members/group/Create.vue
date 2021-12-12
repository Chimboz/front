<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </GlobalCard>
      <br />
      <GlobalRules bot />
    </template>
    <form method="POST" @submit.prevent="create()">
      <GlobalCard header="group.gif" :height="70" color="blue" justified>
        <input
          ref="groupname"
          required
          autofocus
          minlength="3"
          maxlength="32"
          name="groupname"
          type="text"
          class="btn-md"
          :placeholder="$t('placeholder.groupname')"
        />
      </GlobalCard>
      <br />
      <Cabin
        v-if="data"
        :data="data"
        @update-item="(name, item) => (data.blazon[name] = item)"
        @previous-item="
          (name) =>
            (data.blazon[name] =
              data.items[name][data.items[name].indexOf(data.blazon[name]) - 1])
        "
        @next-item="
          (name) =>
            (data.blazon[name] =
              this.data.items[name][
                data.items[name].indexOf(data.blazon[name]) + 1
              ])
        "
      /><br />
      <GlobalButton color="green" type="submit"
        ><template #prepend
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Arrow icon"
            class="arrow green jitter"
            src="@/asset/img/arrow.svg" /></template
        >Sauver</GlobalButton
      ></form
    >
    <template #right-column> </template>
  </GlobalContainer>
</template>
<script>
import Cabin from "@/component/blazon/Cabin.vue";

// @vuese
// @group View/Members/Group
// Group creation page
export default {
  name: "CreateView",
  components: {
    Cabin
  },
  data() {
    return {
      data: {
        blazon: {
          shape: 0,
          top: -1,
          bot: 2,
          primary: "#444444",
          secondary: "#CECECE"
        },
        items: {
          primary: [
            "#444444",
            "#CECECE",
            "#999999",
            "#FF0000",
            "#CC6600",
            "#FE9E01",
            "#FFFF00",
            "#ADE76B",
            "#66CC00",
            "#018352",
            "#9412FE",
            "#376DA8",
            "#6699CC",
            "#FE81C0",
            "#FF3399",
            "#E40173",
            "#FFFFFF",
            "#000000"
          ],
          top: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          shape: [0, 1, 2, 3, 4, 5],
          bot: [
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
            38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
            55, 56, 57, 58
          ],
          secondary: [
            "#444444",
            "#CECECE",
            "#999999",
            "#FF0000",
            "#CC6600",
            "#FE9E01",
            "#FFFF00",
            "#ADE76B",
            "#66CC00",
            "#018352",
            "#9412FE",
            "#376DA8",
            "#6699CC",
            "#FE81C0",
            "#FF3399",
            "#E40173",
            "#FFFFFF",
            "#000000"
          ]
        }
      }
    };
  },
  methods: {
    create() {
      console.log(this.data, this.$refs.groupname.value);
    }
  },
  metaInfo: {
    title: "section.groupedit",
    meta: [
      {
        name: "description",
        content:
          "chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
      },
      {
        property: "og:title",
        content: "Chimboz, accueil"
      },
      {
        property: "og:description",
        content: "Chimboz, accueil"
      },
      { property: "og:site_name", content: "Chimboz" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" }
    ]
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
  font-family: "Pixelade";
  font-size: 13px;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #6090be;
  background: linear-gradient(to bottom, #deeaf5, #a7c6e4);
  border-radius: 4px;
  vertical-align: middle;
}

.description {
  resize: vertical;
  min-height: 240px;
}
</style>
