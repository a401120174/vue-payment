<template>
  <div id="app">
    <step-bar :currentStep="currentStep" />
    <order-detail />
    <main>
      <router-view
        :currentStep="currentStep"
        chosenPayment="chosenPayment"
        @submit="update"
      />
    </main>
  </div>
</template>

<script>
import StepBar from "./components/StepBar.vue";
import OrderDetail from "./components/OrderDetail";
import router from "./router";

const pathMap = {
  1: "PayChoose",
  2: "PayInformation",
  3: "PaySuccess",
};

export default {
  components: { StepBar, OrderDetail },
  data() {
    return {
      currentStep: 1,
      chosenPayment: "credit",
    };
  },
  methods: {
    update(payment) {
      if (payment) {
        this.chosenPayment = payment;
      }
      this.currentStep++;
    },
  },
  watch: {
    currentStep() {
      console.log(pathMap[this.currentStep]);
      router.push(pathMap[this.currentStep]);
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  margin: 0 auto;
  max-width: 860px;
  flex-wrap: wrap;
}

main {
  min-height: calc(100vh - 120px);
  width: calc(100% - 234px);
  border-radius: 0 10px 0 0;
  -webkit-box-shadow: 0 2px 13px 0 rgb(0 0 0 / 8%);
  box-shadow: 0 2px 13px 0 rgb(0 0 0 / 8%);
  padding: 50px 65px;
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
