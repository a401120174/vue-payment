<template>
  <div class="wrapper">
    <h2 :class="{ withDash }">{{ text }}</h2>
    <p>{{ smallText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    smallText: {
      type: String,
    },
    withDash: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.wrapper {
  text-align: center;
}

h2 {
  font-size: 20px;
  display: inline-block;
}

h2.withDash {
  background-image: linear-gradient(180deg, transparent, transparent 50%, #b5ffe4 0);
}

p {
  margin-top: 7px;
  text-align: center;
  font-size: 12px;
}
</style>
