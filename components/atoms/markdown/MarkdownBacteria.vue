<template>
  <section>
    <h1>
      Bacteria <sub>{{ move }}/{{ moves.length }}</sub>
    </h1>
    <div class="layout">
      <div
        class="board pointer"
        @click="move = minmax(move + 1, 0, moves.length)"
        @contextmenu.prevent="move = minmax(move - 1, 0, moves.length)"
      >
        <Tooltip v-for="(tile, index) of board" :key="index" top class="cell">
          <template #tooltip
            >{{ ((index % 8) + 10).toString(36).toUpperCase()
            }}{{ Math.floor(index / 8) + 1 }}</template
          >
          <Transition name="pop" :duration="600">
            <div :key="tile" class="tile">
              <img
                :src="asset(`img/bacteria/${tile}.svg`)"
                :class="`type-${tile}`"
              />
            </div>
          </Transition>
        </Tooltip>
      </div>
      <table v-if="moves.length" class="moves">
        <tbody>
          <template v-for="(_, index) of moves" :key="index">
            <tr v-if="!(index % 2)">
              <td>
                {{ index / 2 + 1 }}
              </td>
              <td
                :class="`color-${1 + firstPlayer}`"
                class="btn-action pointer"
                style="text-transform: uppercase"
                @click="move = index + 1"
              >
                {{ moves[index] }}
              </td>
              <td
                v-if="moves[index + 1]"
                :class="`color-${2 - firstPlayer}`"
                class="btn-action pointer"
                style="text-transform: uppercase"
                @click="move = index + 2"
              >
                {{ moves[index + 1] }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { Tokens } from 'marked';

defineProps<{ node: Tokens.Generic }>();
const firstPlayer = 1;
// prettier-ignore
const start = [
  1, 1, 1, 3, 0, 0, 0, 0,
  1, 0, 1, 2, 0, 0, 0, 0,
  1, 1, 1, 3, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 2, 2, 0, 0, 0, 0, 0,
  0, 0, 2, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
];
const moves = ref<string[]>(['b2', 'b7', 'b5', 'c5', 'd4']);
const move = ref(0);
const board = computed(() => {
  const game = [...start];
  for (let i = 0; i < move.value && i < moves.value.length; i++) {
    const self = firstPlayer ? 1 + ((i + 1) % 2) : 2 - ((i + 1) % 2);
    const opponent = firstPlayer ? 2 - ((i + 1) % 2) : 1 + ((i + 1) % 2);
    const m: {
      explicit: string;
      x: number;
      y: number;
      xFrom?: number;
      yFrom?: number;
    } = {
      explicit: moves.value[i],
      x: moves.value[i].charCodeAt(moves.value[i].length - 2) - 97,
      y: +moves.value[i][moves.value[i].length - 1] - 1,
    };

    const implicitJump = game.map((value, index) => {
      return (
        value === self &&
        !(
          value === self &&
          index % 8 <= m.x + 1 &&
          index % 8 >= m.x - 1 &&
          Math.floor(index / 8) <= m.y + 1 &&
          Math.floor(index / 8) >= m.y - 1
        ) &&
        ((Math.floor(index / 8) === m.y &&
          (index % 8 === m.x + 2 || index % 8 === m.x - 2)) ||
          (index % 8 === m.x &&
            (Math.floor(index / 8) === m.y + 2 ||
              Math.floor(index / 8) === m.y - 2)))
      );
    });

    if (/[a-zA-Z]\dj[a-zA-Z]\d/.test(moves.value[i])) {
      m.xFrom = m.explicit.charCodeAt(0) - 97;
      m.yFrom = +m.explicit[1] - 1;
      game[m.xFrom + 8 * m.yFrom] = 0;
    } else if (implicitJump.filter((v) => v).length === 1) {
      const index = implicitJump.findIndex((v) => v);
      m.xFrom = index % 8;
      m.yFrom = Math.floor(index / 8);
      game[m.xFrom + 8 * m.yFrom] = 0;
    }
    game[m.x + 8 * m.y] = self;
    for (const [index, value] of game.entries()) {
      if (
        value === opponent &&
        index % 8 <= m.x + 1 &&
        index % 8 >= m.x - 1 &&
        Math.floor(index / 8) <= m.y + 1 &&
        Math.floor(index / 8) >= m.y - 1
      ) {
        game[index] = self;
      }
    }
  }
  return game;
});
</script>
<style lang="scss">
.layout {
  display: flex;
  .board {
    display: grid;
    flex: 1;
    aspect-ratio: 1.73931808373;
    grid: repeat(8, 1fr) / repeat(8, 1fr);
    background-image: url(@/assets/img/bacteria/floor.svg);
    background-size: contain;
    background-repeat: no-repeat;
    padding: 0 6% 5% 6%;
    .cell {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      user-select: none;
      .tile {
        position: absolute;
        width: 100%;
        text-align: center;
        img {
          &.type-0,
          &.type-3 {
            transition: 0.4s;
            width: 90%;
          }
          &.type-1,
          &.type-2 {
            width: 66%;
          }
        }
      }
      &::after {
        content: '';
        border-radius: 100%;
        transition: var(--duration);
        width: 100%;
        position: absolute;
        height: 60%;
        z-index: -1;
      }

      &:hover {
        z-index: 2;
        &::after {
          background: #fff;
        }
      }
    }
  }
  .moves {
    .color-1 {
      border-color: var(--main-button-red);
      color: var(--dark-button-red);
      border-radius: 0;
      background: linear-gradient(
        to bottom,
        var(--light),
        var(--main-button-red)
      );
    }
    .color-2 {
      border-radius: 0;
      border-color: var(--main-button-green);
      color: var(--dark-button-green);
      background: linear-gradient(
        to bottom,
        var(--light),
        var(--main-button-green)
      );
    }
  }
}

.pop-enter-to .type-0,
.pop-leave-from .type-0 {
  opacity: 1;
}

.pop-enter-from .type-0,
.pop-leave-to .type-0 {
  opacity: 0;
}

.pop-enter-active .type-1,
.pop-enter-active .type-2 {
  transform: scale(0);
  animation: pop-in 0.4s 0.3s;
}
.pop-leave-active .type-1,
.pop-leave-active .type-2 {
  animation: pop-in 0.4s reverse;
}
.pop-enter-from .type-1,
.pop-enter-from .type-2,
.pop-leave-to .type-1,
.pop-leave-to .type-2 {
  transform: scale(0);
}

@keyframes pop-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
