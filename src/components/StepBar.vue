<template>
  <div class="wrapper">
    <div class="stepBox">
      <div v-for="step in 3" :key="step" :class="{ step, active: currentStep >= step }">
        {{ step }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding-left: 234px;
  width: 100%;
}
.stepBox {
  display: flex;
  margin: 40px auto;
  justify-content: space-between;
  max-width: 300px;
  position: relative;
}
.step {
  background-color: #aaa;
  position: relative;
  z-index: 2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
}
.step.active {
  background-color: #8defcb;
}
.stepBox::before {
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
  width: 100%;
  height: 2px;
  content: "";
  background-image: linear-gradient(90deg, #8defcb, #d8d8d8);
}
</style>
