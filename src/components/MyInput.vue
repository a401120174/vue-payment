<template>
  <input
    v-model="syncValue"
    :type="inputType"
    :placeholder="inputPlaceholder"
    ref="input"
    :maxlength="maxlength"
  />
</template>

<script>
export default {
  props: ["parentValue", "inputType", "inputPlaceholder", "maxlength"],
  computed: {
    syncValue: {
      get() {
        return this.parentValue;
      },
      set(val) {
        this.$emit("update:parentValue", val);
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
}
</style>
