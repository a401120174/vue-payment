<template>
  <div class="wrapper">
    <template v-for="(input, idx) of inputs">
      <input
        type="radio"
        :id="input.value"
        :key="idx"
        :value="input.value"
        v-model="syncValue"
      />
      <label :for="input.value" :key="input.value">{{ input.text }}</label>
    </template>
    <p class="error" v-show="hasError">請選擇付款方式!</p>
  </div>
</template>

<script>
export default {
  props: {
    inputs: Array,
    modelValue: String,
    hasError: Boolean,
  },
  computed: {
    syncValue: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
  methods: {
    // Used to focus the input from the parent
    focus: function () {
      this.$refs.input.focus();
    },
  },
};
</script>

<style scoped>
input {
  padding: 14.5px 10px;
  border-radius: 3px;
  border: 1px solid #aaa;
  margin-right: 5px;
}
label {
  margin-right: 10px;
}
.wrapper {
  position: relative;
}
.error {
  position: absolute;
  bottom: -15px;
  left: 0;
  font-size: 12px;
  color: red;
  margin: 0;
  padding: 0;
}
</style>
