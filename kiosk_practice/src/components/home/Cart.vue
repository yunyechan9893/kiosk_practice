<template>
  <div class="box">
    <img id="back" @click="close" src="/src/assets/images/Back.svg" alt="뒤로가기">
    <img id="pencil" src="/src/assets/images/Pencil.svg" alt="연필이미지">
    <span id="title">Your Cart</span>
    <CartItem />
    <div class="footer">
      <div class="total-price-section">
        <div class="price-line">
          <span class="price-title-text">Subtotal</span>
          <div>
            <span class="price-text">0</span>
            <span class="price-text">원</span>
          </div>
        </div>
        <div class="price-line">
          <span class="price-title-text">Tax</span>
          <div>
            <span class="price-text">0</span>
            <span class="price-text">원</span>
          </div>
        </div>
        <div class="price-line">
          <span class="price-title-text">Total</span>
          <div>
            <span class="price-text">0</span>
            <span class="price-text">원</span>
          </div>
        </div>
      </div>
      <img id="pay-button" src="/src/assets/images/PayButton.png" alt="구매버튼"/>
    </div>
  </div>
</template>

<script setup>
import CartItem from '@/components/home/CartItem.vue';
import { defineEmits } from 'vue';

const emit = defineEmits();

function close() {
  emit('close');
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 100vh;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding: 30px 18px 30px 18px;
  box-sizing: border-box;
  gap: 28px;
}

#back {
  position: absolute;
  width: 15px;
  height: 25px;
  left: 310px;
  top: 44px;
}

#pencil {
  width: 40px;
  height: 40px;
}

#title {
  width: 153px;
  height: 54px;

  font-family: 'Reem Kufi', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 54px;

  color: #000000;
}

.total-price-section {
  width: 320px;
  height: 130px;
  padding: 6px 20px 6px 20px;

  border: 2px solid #F5A62E;
  border-radius: 20px;
  box-sizing: border-box;
}

.price-line {
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.price-title-text {
  width: 215.6px;
  height: 36px;

  font-family: 'Reem Kufi', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;

  color: #585858;
}

.price-text {
  width: 88.43px;
  height: 28px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  letter-spacing: -0.03em;

  color: #3B3A3A;
}

#pay-button {
  width: auto;
  height: auto;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
}

</style>