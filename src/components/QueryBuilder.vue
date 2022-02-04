<template>
  <div class="vqb-container">
    <div class="vqb-option_box">Results must match <OpButtonGroup /> of the following rules:</div>
    <div class="vqb-rule-creator">
      <div class="vqb-content">
        New Rule: 
        <VInput type="select" :options='options' :value='options[0]' style='margin: 0 15px' /> 
        <VInput type="select" :options='options2' :value='options2[0]' style='margin-right: 15px' /> 
        <VInput type="text" style='margin-right: 15px' /> 
        <VBtn>+ Add Rule</VBtn>
        </div>
    </div>
  </div>
</template>

<script>
import { VBtn, VInput } from 'vuetensils/src/components'
import OpButtonGroup from './OpButtonGroup.vue'

export default {
  name: 'QueryBuilder',

  data() {
    return {
      options: ['FirstName', 'LastName', 'Age'],
      options2: ['equals', 'does not equal', 'contains'],
    }
  },

  components: {
    OpButtonGroup,
    VBtn,
    VInput
  },
}
</script>

<style>
.vqb-container {
  --vqb-main-color: #41b883;
  min-width: 350px;
  max-width: 100%;
  border: 1px solid #ccc;
  padding-bottom: 16px;
  margin: auto;
  font-size: 1.2rem;
  color: #444;
}
.vqb-container .vts-btn, .vqb-container .vts-input__input, .vqb-container .vts-input__input{
  padding: 5px 8px;
  margin: 0 2px;
  cursor: pointer;
  border-style: solid;
  border-color: var(--vqb-main-color);
  font-weight: 600;
  color: var(--vqb-main-color);
  background-color: inherit;
}
.vqb-container .vts-input__input{
  cursor: inherit;
}
.vqb-option_box {
  background-color: #f5f5f5;
  border-left: 3px solid var(--vqb-main-color);
  padding: 8px 16px;
}
.vqb-content {
  padding: 16px;
}
.vqb-rule-creator {
  font-size: 1rem;
  border-top: 1px dashed #ccc;
  border-bottom: 1px dashed #ccc;
}
.vqb-rule-creator > .vts-btn {
  background-color: var(--vqb-main-color);
  color: #fff;
}
.vqb-rule-creator > .vqb-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
