<template>
  <section>
    <h1>🚧 Partie, mouvement {{ move }}/{{ moves.length }}</h1>
    <div class="layout">
      <div
        class="board pointer"
        @click="move = minmax(move + 1, 0, moves.length)"
        @contextmenu.prevent="move = minmax(move - 1, 0, moves.length)"
      >
        <div v-for="(tile, index) of game" :key="index" class="cell">
          <img :src="asset(`img/bacteria/${tile}.svg`)" />
        </div>
      </div>
      <table class="moves">
        <thead>
          <tr>
            <th>#</th>
            <th><img :src="asset(`img/bacteria/${1 + firstPlayer}.svg`)" /></th>
            <th><img :src="asset(`img/bacteria/${2 - firstPlayer}.svg`)" /></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(_, index) of moves" :key="index">
            <tr v-if="!(index % 2)">
              <td>
                {{ index / 2 + 1 }}
              </td>
              <td
                class="btn-action pointer"
                @click="
                  move =
                    index + 1 === move ? 0 : minmax(index + 1, 0, moves.length)
                "
              >
                {{ moves[index] }}
              </td>
              <td
                class="btn-action pointer"
                @click="
                  move =
                    index + 2 === move ? 0 : minmax(index + 2, 0, moves.length)
                "
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
  1, 1, 1, 0, 0, 0, 0, 0,
  1, 0, 1, 2, 0, 0, 0, 0,
  1, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 2, 2, 0, 0, 0, 0, 0,
  0, 0, 2, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
];
const game = computed(() => {
  const game = [...start];
  for (let i = 0; i < move.value && i < moves.value.length; i++) {
    const color = firstPlayer ? 1 + ((i + 1) % 2) : 2 - ((i + 1) % 2);
    const opponent = firstPlayer ? 2 - ((i + 1) % 2) : 1 + ((i + 1) % 2);

    const m = [moves.value[i].charCodeAt(0) - 97, +moves.value[i][1] - 1];
    game[m[0] + 8 * m[1]] = color;
    for (const [index, value] of game.entries()) {
      if (
        value === opponent &&
        index % 8 <= m[0] + 1 &&
        index % 8 >= m[0] - 1 &&
        Math.floor(index / 8) <= m[1] + 1 &&
        Math.floor(index / 8) >= m[1] - 1
      ) {
        game[index] = color;
      }
    }
  }
  return game;
});
const moves = ref(['b2', 'b7', 'b5', 'c5', 'd4']);
const move = ref(0);
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
    padding: 1% 6% 4% 6%;
    .cell {
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      user-select: none;
    }
  }
}
</style>
