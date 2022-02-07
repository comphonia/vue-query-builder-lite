<template>
  <div class="vqb-container">
    <div class="vqb-option_box">Results must match <OpButtonGroup /> of the following rules:</div>
    <div class="vqb-rule-creator">
      <div class="vqb-content">
        <div>New Rule:</div>
        <VInput
          v-model="query.rule"
          name="rule"
          label="rule"
          type="select"
          :options="options"
        />
        <VInput
          v-model="query.operator"
          name="operator"
          label="operator"
          type="select"
          :options="options2"
        />
        <VInput
          v-model="query.value"
          name="value"
          label="value"
          type="text"
        />
        <div><VBtn :disabled="!queryHasValue">+ Add Rule</VBtn></div>
      </div>
    </div>
  </div>
</template>

<script>
import { VBtn, VInput } from 'vuetensils/src/components'
import OpButtonGroup from './OpButtonGroup.vue'

export default {
  name: `QueryBuilder`,

  components: {
    OpButtonGroup,
    VBtn,
    VInput,
  },

  data() {
    return {
      options:  [`FirstName`, `LastName`, `Age`],
      options2: [`equals`, `does not equal`, `contains`],
      query:    {
        rule:     `FirstName`,
        operator: `equals`,
        operand:  `FirstName`,
        value:    ``,
      },
    }
  },

  computed: {
    queryHasValue(){return this.query.value.length}
  }
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
.vqb-container .vts-btn,
.vqb-container .vts-input__input,
.vqb-container .vts-input__input {
  padding: 5px 8px;
  margin: 0 2px;
  border-style: solid;
  font-weight: 600;
  background-color: inherit;
}
.vqb-container .vts-btn:not(:disabled),
.vqb-container .vts-input__input,
.vqb-container .vts-input__input {
  border-color: var(--vqb-main-color);
  color: var(--vqb-main-color);
  cursor: pointer;
}
.vqb-container .vts-input__input {
  cursor: inherit;
}
.vqb-container .vts-input__text {
  display: none;
}
.vqb-option_box {
  background-color: #f5f5f5;
  border-left: 3px solid var(--vqb-main-color);
  padding: 8px 16px;
  display: flex;
  align-items: center;
}
.vqb-content {
  padding: 16px;
}
.vqb-content > div{
  margin: 6px 15px 6px 0;
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

@media screen and (max-width: 400px) {
  .vqb-content{
    flex-direction: column;
    align-items: flex-start;
  }
  .vqb-content > div{
    margin: 6px 0;
    width: 100%;
  }
  .vqb-content .vts-input__label{
    width: 100%;
  }
  .vqb-content .vts-input__input{
    width: -webkit-fill-available;
  }
}
</style>
