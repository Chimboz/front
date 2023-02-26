<template>
  <div class="rcp__well" :style="{ 'background-color': modelValue }" @contextmenu.prevent="$emit('update:modelValue', reset || '#000000')">
    <input
      type="color"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as InputHTMLAttributes).value)
      "
    />
  </div>
</template>
<script setup lang="ts">
import { InputHTMLAttributes } from 'vue'

defineProps<{
  reset?: string,
  modelValue: string | undefined
}>()

defineEmits<{(e: 'update:modelValue', value: string): void }>()
</script>
<style lang="scss" scoped>
.rcp__well {
  display: inline-flex;
  position: inherit;
  width: 24px;
  height: 24px;
  border: 3px solid #fff;

  input {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>
