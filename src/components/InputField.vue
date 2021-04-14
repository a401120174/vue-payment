<template>
  <div class="wrapper">
    <p class="text">{{ text }}</p>
    <slot></slot>
    <p class="error" v-show="hasError">{{ errorText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    hasError: Boolean,
    errorText: String,
  },
};
</script>

<style scoped>
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

.text {
  margin: 0 0 10px;
  padding: 0;
}
</style>
