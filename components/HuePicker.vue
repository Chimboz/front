<template>
  <div class="hue-picker">
    <color-picker
      :hue="modelValue"
      :mouse-scroll="true"
      :initially-collapsed="true"
      @input="$emit('update:modelValue', $event)"
    />
  </div>
</template>
<script setup lang="ts">
import ColorPicker from '@radial-color-picker/vue-color-picker'

defineProps<{
  modelValue: number | undefined
}>()

defineEmits<{(e: 'update:modelValue', value: number): void }>()
</script>
<style lang="scss">
.hue-picker {
  height: 24px;
  width: 24px;
  position: relative;
  display: inline-block;
  margin: -4px;
  .rcp {
    position: absolute;
    height: 96px;
    width: 96px;
    top: -36px;
    left: -36px;
    .rcp__well {
      width: 24px;
      height: 24px;
      border: 3px solid #fff;
    }
  }
}
</style>
