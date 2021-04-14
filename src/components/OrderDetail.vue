<template>
  <aside>
    <div class="content">
      <p class="title">訂單資訊</p>
      <dl>
        <dt>商品名稱：</dt>
        <dd>{{ order.name }} X {{ order.count }}</dd>
        <dt>訂單編號：</dt>
        <dd>{{ order.number }}</dd>
        <dt>訂單金額：</dt>
        <dd>{{ order.price }}</dd>
      </dl>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      order: {
        name: "Iphone XR手機殼",
        count: 1,
        number: "17485739",
        price: 800,
      },
    };
  },
};
</script>

<style scoped>
.content {
  padding: 25px;
  min-height: 281px;
  width: 234px;
  border-radius: 0 0 10px 0;
  border-radius: 10px 0 0 10px;
  background: #f3f3f3;
  letter-spacing: 1.7px;
  text-align: left;
  box-sizing: border-box;
}

p {
  margin-bottom: 1em;
  letter-spacing: 2px;
  font-size: 18px;
}

dd {
  margin: 0;
}

dt,
dd {
  margin-bottom: 15px;
}
</style>
