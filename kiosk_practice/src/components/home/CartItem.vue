<template>
  <div class="cart-item">
    <div class="section" id="img-section">
      <img id="menu-img" :src="imageUrl" alt="메뉴 이미지">
    </div>
    <div class="section product-info width-100">
      <span id="title">{{ title }}</span>
      <div class="horizontal-section space-between width-100">
        <div>
          <span class="price">{{ price }}</span>
          <span class="price">원</span>
        </div>
        <div class="horizontal-section">
          <img class="cart-button" @click="decrementCount" src="/src/assets/images/CartDecrementCount.svg" alt="주문 개수 감소 버튼">
          <p class="cart-count">{{ productCount }}</p>
          <img class="cart-button" @click="incrementCount" src="/src/assets/images/CartIncrementCount.svg" alt="주문 개수 증가 버튼">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useCartItemStore, useCartStore } from '@/store/cart/CartStore.ts';
import { onMounted } from 'vue';

const cartItemStore = useCartItemStore()
const cartStore = useCartStore()

const props = defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  productCount: Number,
});

onMounted(() => {
  cartStore.addTotal(props.price)
})

function incrementCount() {
  cartItemStore.incrementCount(props.id);
  cartStore.addTotal(props.price)
}

function decrementCount() {
  const isSuccess = cartItemStore.decrementCount(props.id);

  if (isSuccess) {
    cartStore.subTotal(props.price)
  }
}
</script>

<style scoped>
.cart-item {
  width: 340px;
  height: 110px;
  padding: 15px;

  display: flex;
  flex-direction: row;

  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  box-sizing: border-box;

}

.section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.horizontal-section {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: end; /* 모든 항목을 수직 가운데 정렬 */
  gap: 4px;
}


#menu-img {
  width: 80px;
  height: 80px;
}

.product-info {
  align-items: start;
  margin-left: 15px;
}

#title {
  font-family: 'Reem Kufi', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  letter-spacing: -0.03em;

  color: #3D3D3D;
}

.price {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  letter-spacing: -0.03em;

  color: #FE554A;
}

.cart-button {
  width: 25px;
  height: 25px;
}

.cart-count {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
  margin: 0;
  padding: 0;

  /* header 3 px16 */
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.03em;

  color: #3D3D3D;
}

.space-between{
  justify-content: space-between;
}

.width-100{
  width: 100%;
}
</style>