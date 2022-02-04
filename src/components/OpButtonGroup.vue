<template>
  <span class="vqb-btn_group">
    <VBtn class="selected">Any</VBtn>
    <VBtn>All</VBtn>
  </span>
</template>

<script>
import { VBtn } from 'vuetensils/src/components'

export default {
  name: 'OpButtonGroup',
  data() {
    return {
      option: `any`,
    }
  },
  components: {
    VBtn,
  },
}
</script>

<style>
  .vqb-btn_group > .vts-btn{
    padding: 5px 8px;
    margin: 0 2px;
    cursor: pointer;
    border-style:solid;
    border-color: var(--vqb-main-color);
    font-weight: 600;
    color: #444;
  }
  .vqb-btn_group > .vts-btn.selected{
    color: #fff;
    background-color: var(--vqb-main-color);
  }
</style>
