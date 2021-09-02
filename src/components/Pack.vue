<template>
  <div class="pack flex animated pointer">
    <svg
      draggable="false"
      oncontextmenu="return false"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 180 340"
    >
      <g fill="#52758b">
        <g fill-rule="evenodd">
          <rect width="180" height="340" ry="12.971" />
          <rect
            width="176"
            height="336"
            x="2"
            y="2"
            ry="12.971"
            fill="#9ccbe7"
          />
          <rect
            width="166"
            height="326"
            x="7"
            y="7"
            ry="5.732"
            fill="#f9fefd"
          />
        </g>
        <g fill="none">
          <path
            d="M90.465 13.973c-4.851 0-8.783 4.096-8.783 9.148a9.52 9.52 0 0 0 .109 1.396h-9.533c-4.304 0-7.769 3.609-7.769 8.092v2.707c0 4.483 3.465 8.092 7.769 8.092h35.485c4.304 0 7.769-3.609 7.769-8.092V32.61c0-4.483-3.465-8.092-7.769-8.092h-8.603a9.52 9.52 0 0 0 .109-1.396c0-5.052-3.932-9.148-8.783-9.148z"
            stroke="#b2e4fc"
            stroke-width="5.291"
            stroke-linejoin="bevel"
            paint-order="stroke fill markers"
          />
          <path
            d="M90.484 17.299a9.15 9.15 0 0 0-9.148 9.148 9.15 9.15 0 0 0 .113 1.396h-9.93c-5.935 1.4-8.11 5.363-8.092 9.531.018 4.124 4.13 9.24 8.092 9.36h36.961c5.725-1.346 8.058-5.183 8.092-9.289.034-4.185-4.004-9.478-8.092-9.602H99.52a9.15 9.15 0 0 0 .113-1.396 9.15 9.15 0 0 0-9.148-9.148z"
            stroke="#325883"
            stroke-width="2.268"
            stroke-linejoin="round"
            paint-order="stroke fill markers"
          />
        </g>
        <path
          d="M75.988 17.815l-5.223.008c-4.95.008-12.229 4.93-12.229 10.068v11.758c0 5.114 4.531 12.248 12.386 12.386h38.362c8.909 0 12.204-8.826 12.261-12.261V27.817c0-6.12-8.064-9.924-12.136-9.924l-4.902.088c0-3.975-1.727-6.273-4.191-7.536h60.809c4.388 0 6.682 3.241 6.682 6.682v74.667c0 5.398-3.452 8.162-8.162 8.162-14.054 0-48.13-5.886-72.312-5.819-22.627.063-52.674 6.71-67.63 5.819-4.787 0-7.508-4.64-7.508-7.508v-74.75c0-5.291 4.972-7.547 7.547-7.547h60.005c-1.992 1.599-3.715 3.36-3.757 7.665z"
          fill="url(#header)"
        />
        <path
          d="M90.259 110.352c27.403 0 67.655 37.745 67.655 101.911 0 49.584-56.552 50.226-67.998 50.226s-67.618-.65-67.618-50.263c0-60.794 40.558-101.874 67.961-101.874z"
          fill="#d4eeff"
          stroke="#a4d0eb"
          stroke-width="12"
          stroke-linejoin="bevel"
          paint-order="stroke fill markers"
        />
        <path
          d="M112.881 117.177s68.252 55.606-51.694 54.492c-7.766 0-48.698 14.453-7.227 36.499 11.099 6.408 86.554 6.93 86.554-62.754.109-7.727-20.202-27.332-27.633-28.237zm-91.447 75.16c10.878 69.593 90.994 28.68 98.349 24.433 31.34-18.094 26.838 7.423 23.808 12.67-28.224 48.886-112.535 11.928-112.535 11.928s-20.529-20.787-9.622-49.031z"
          fill="#a4d0eb"
        />
      </g>
      <rect
        width="166"
        height="64.527"
        x="7"
        y="268.473"
        ry="32.263"
        fill="url(#footer)"
        fill-rule="evenodd"
        paint-order="stroke fill markers"
      />
      <defs>
        <pattern
          id="footer"
          patternUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <image :href="require(`@/assets/img/packs/footer/${footer}`)" />
        </pattern>
        <pattern
          id="header"
          patternUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <image :href="require(`@/assets/img/packs/header/${header}`)" />
        </pattern>
      </defs>
    </svg>
    <div class="pack-content flex">
      <Tiz class="female" /><Tiz class="male" />
    </div>
  </div>
</template>
<script>
import Tiz from "@/components/Tiz.vue";

export default {
  name: "Pack",
  components: { Tiz },
  props: {
    header: {
      required: true,
      type: String,
    },
    footer: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.pack {
  position: relative;
}

.pack-content {
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.male,
.female {
  display: inline-block;
  margin: 10% -10% 0 -10%;
  width: 40%;
}

.female {
  margin-top: 20%;
  z-index: 2;
}
.pack:hover {
  animation: pack-hover 1s forwards;
}

@keyframes pack-hover {
  5% {
    transform: translateY(-10px);
  }
}

.pack-content {
  --rotate: rotate(30deg);
}

.pack-content::before {
  position: absolute;
  z-index: 3;
  content: "";
  opacity: 1;
  width: 100%;
  height: 100%;
  background: url(../assets/img/packs/reflect.svg);
}

.pack-content::after {
  position: absolute;
  z-index: 3;
  content: "";
  opacity: 0;
  width: 50%;
  height: 200%;
  transform: translateX(-300%) var(--rotate);
  background: #fffa;
  animation: shine 5s infinite linear;
}

@keyframes shine {
  10% {
    opacity: 1;
    transform: translateX(300%) var(--rotate);
  }
  100% {
    opacity: 0;
    transform: translateX(300%) var(--rotate);
  }
}
</style>