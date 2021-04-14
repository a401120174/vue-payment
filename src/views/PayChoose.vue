<template>
  <div class="home">
    <order-title text="STEP1. 選擇付款方式" />
    <form action="">
      <div class="optionsWrapper">
        <label v-for="choice in paychoices" :key="choice.name">
          <input type="radio" :value="choice.name" v-model="chosen" />
          <div :class="{ active: choice.name === chosen, option: true }">
            <component :is="choice.img"></component>
            {{ choice.text }}
          </div>
        </label>
      </div>
      <button @click.prevent="submit">下一步</button>
    </form>
  </div>
</template>

<script>
import OrderTitle from "../components/OrderTitle";
import CreditIcon from "../assets/icons/credit-card.svg?inline";
import ShopIcon from "../assets/icons/shop.svg?inline";
import WebIcon from "../assets/icons/web-atm.svg?inline";
import AtmIcon from "../assets/icons/atm.svg?inline";

export default {
  name: "PayChoose",
  components: { OrderTitle, CreditIcon, ShopIcon, WebIcon, AtmIcon },
  props: ["currentStep", "chosenPayment"],
  data() {
    return {
      paychoices: [
        {
          name: "credit",
          text: "信用卡/金融卡",
          img: CreditIcon,
        },
        {
          name: "shop",
          text: "超商付款",
          img: ShopIcon,
        },
        {
          name: "web",
          text: "Web ATM",
          img: WebIcon,
        },
        {
          name: "atm",
          text: "ATM 轉帳",
          img: AtmIcon,
        },
      ],
      chosen: "credit",
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.chosen);
    },
  },
};
</script>

<style scoped>
svg {
  width: 100px;
  margin-bottom: 10px;
}

input {
  display: none;
}
.optionsWrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 0 30px;
  justify-content: center;
}
.option {
  display: flex;
  flex-direction: column;
  margin: 7.5px;
  width: 161px;
  height: 139px;
  border-radius: 5px;
  background-color: #f7f7f7;
  color: #000;
  letter-spacing: 1.5px;
  font-size: 14px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}

.option.active {
  background-color: #36b996;
}
</style>
