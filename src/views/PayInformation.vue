<template>
  <div>
    <order-title text="STEP2. 填寫付款資訊" />
    <form action="">
      <div class="formWrapper">
        <radio-inputs
          :inputs="paytimeModel"
          :modelValue.sync="formData.payTime"
          :hasError="paytimeError"
          class="inputWapper"
        />
        <input-field
          text="信用卡號："
          :hasError="!!creditNumError"
          :errorText="creditNumError"
        >
          <input
            type="number"
            class="creditNum"
            ref="credit1"
            :value="formData.credit1"
            @input="changeCredit('credit1', $event)"
          />
          -
          <input
            type="number"
            class="creditNum"
            ref="credit2"
            :value="formData.credit2"
            @input="changeCredit('credit2', $event)"
          />
          -
          <input
            type="number"
            class="creditNum"
            ref="credit3"
            :value="formData.credit3"
            @input="changeCredit('credit3', $event)"
          />
          -
          <input
            type="number"
            class="creditNum"
            ref="credit4"
            :value="formData.credit4"
            @input="changeCredit('credit4', $event)"
          />
        </input-field>
        <input-field
          text="有效月年："
          :hasError="!!validDateError"
          :errorText="validDateError"
          class="notFirst"
        >
          <select name="validDate" v-model="formData.validDateMonth">
            <option v-for="month in validMonth" :value="month" :key="month">
              {{ month }}
            </option>
          </select>
          <select name="validYear" v-model="formData.validDateYear">
            <option v-for="year in validYear" :value="year" :key="year">
              {{ year }}
            </option>
          </select>
        </input-field>
        <input-field
          text="背面末三碼："
          :hasError="!!creditBackNumError"
          :errorText="creditBackNumError"
          class="notFirst"
        >
          <input
            type="number"
            maxlength="3"
            placeholder="Card Number"
            v-model="formData.creditBackNum"
          />
        </input-field>
        <input-field
          text="填寫付款人信箱："
          :hasError="!!eMailError"
          :errorText="eMailError"
          class="notFirst"
        >
          <input type="email" placeholder="Card Number" v-model="formData.eMail" />
        </input-field>
      </div>
      <button @click.prevent="submit">下一步</button>
    </form>
  </div>
</template>

<script>
import OrderTitle from "../components/OrderTitle";
import RadioInputs from "../components/RadioInputs";
import InputField from "../components/InputField";

const validMonth = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const validYear = ["21", "22", "23", "24", "25"];

export default {
  name: "PayInformation",
  components: { OrderTitle, RadioInputs, InputField },
  props: ["currentStep", "chosenPayment"],
  data() {
    return {
      formData: {
        payTime: "",
        creditCard: "",
        credit1: "",
        credit2: "",
        credit3: "",
        credit4: "",
        validDateYear: "",
        validDateMonth: "",
        creditBackNum: "",
        eMail: "",
      },
      paytimeModel: [
        {
          text: "一次付款",
          value: "once",
        },
        {
          text: "分期付款",
          value: "multi",
        },
      ],
      validMonth,
      validYear,
      errors: [],
      checkError: false,
    };
  },
  methods: {
    submit() {
      this.checkError = true;
      if (this.validate()) {
        this.$emit("submit", "PaySuccess");
      }
    },
    validate() {
      return !(
        this.paytimeError ||
        this.creditNumError ||
        this.validDateError ||
        this.creditBackNumError ||
        this.eMailError
      );
    },
    changeCredit(input, e) {
      if (e.target.value.length > 4) e.target.value = e.target.value.slice(0, 4);
      this.formData[input] = e.target.value;
    },
  },
  computed: {
    paytimeError() {
      return this.checkError && !this.formData.paytime;
    },
    creditNumError() {
      const { credit1, credit2, credit3, credit4 } = this.formData;
      let errorText = "";
      if (!this.checkError) {
        return errorText;
      }
      [credit1, credit2, credit3, credit4].forEach(field => {
        if (!field) {
          errorText = "請填寫完整的信用卡號!";
          return;
        }
        if (field.length < 4) {
          errorText = "每欄請輸入4個數字!";
        }
      });
      return errorText;
    },
    validDateError() {
      const { validDateYear, validDateMonth } = this.formData;
      return this.checkError && !(validDateYear && validDateMonth)
        ? "請選擇有效月年!"
        : "";
    },
    creditBackNumError() {
      return this.checkError && !this.formData.creditBackNum ? "請輸入背面末三碼!" : "";
    },
    eMailError() {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.checkError) {
        return "";
      }
      if (!this.formData.eMail) {
        return "請輸入信箱!";
      }
      if (!regex.test(String(this.formData.eMail).toLowerCase())) {
        return "信箱不合法!";
      }
      return "";
    },
    credit1() {
      return this.formData.credit1;
    },
    credit2() {
      return this.formData.credit2;
    },
    credit3() {
      return this.formData.credit3;
    },
  },
  watch: {
    credit1(val) {
      if (val.length >= 4) {
        this.$refs.credit2.focus();
      }
    },
    credit2(val) {
      if (val.length >= 4) {
        this.$refs.credit3.focus();
      }
    },
    credit3(val) {
      if (val.length >= 4) {
        this.$refs.credit4.focus();
      }
    },
  },
};
</script>

<style scoped>
input,
select {
  padding: 14.5px 10px;
  border-radius: 3px;
  border: 1px solid #aaa;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.inputWapper {
  margin-bottom: 25px;
}

svg {
  width: 100px;
  margin-bottom: 10px;
}

.formWrapper {
  text-align: left;
}

.creditNum {
  width: 80px;
}

.inputField {
  margin: 0 0 10px;
  padding: 0;
}

.notFirst {
  margin: 30px 0 10px;
  padding: 0;
}
</style>
