<template>
  <div class="main">
    <div class="box">
        <span id="title">{{ title }}</span>
        <p id="contents">{{ contents }}</p>
        <div id="product-info">
          <div>
            <img id="review-img" src="/src/assets/images/Review.svg" alt="별 이미지">
            <span id="review-average">{{ reviewAverage }}</span>
          </div>
          <div style="display: flex; flex-direction: row; align-items: center;">
            <span class="price">{{ price }}</span>
            <span class="price" style="margin-right: 10px;">원</span>
            <img @click="addCartItem" src="/src/assets/images/Pick.svg" :data-id="props.id" style="width: 40px; height: 40px" alt="장바구니 담기">
          </div>
        </div>
      </div>
    <div id="menu-image-container">
      <img id="menu-image" :src="imageUrl" alt="배너">
    </div>
  </div>
</template>

<script setup>

import { useCartItemStore } from '@/store/cart/CartStore.ts';

const cartStore = useCartItemStore()

const props = defineProps({
  id:Number,
  imageUrl:String,
  title: String,
  contents: String,
  reviewAverage: Number,
  price: Number
})

function addCartItem() {
  cartStore.addItem({id:props.id, count:1}) ?
    alert("아이템을 추가했습니다"):
    alert("이미 장바구니에 담았습니다.");
}

</script>

<style scoped>

.main {
  position: relative;
  width: 340px;
  min-width: 340px;
  height: 450px;
}

.box {
  position: absolute;
  width: 80%;
  height: 298px;
  top: 100px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  padding: 18px 10% 18px 10%;
}

#title {
  position: relative;
  display: block;
  width: 100%;
  height: 72px;
  margin-top: 40px;

  margin-left: 2px;
  font-family: 'Reem Kufi', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.03em;

  color: #3D3D3D;
}

#contents {
  display: block;
  position: relative;
  width: auto;
  height: auto;

  font-family: 'Reem Kufi', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 152.3%;

  letter-spacing: -0.01em;

  color: #3D3D3D;
}

#product-info {
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 80%;
  top: 81%;

  align-items: center;
  justify-content: space-between;
}

#review-img {
  position: relative;
  width: 19.25px;
  height: 20px;
}

#review-average {
  position: relative;

  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 152.3%;
  letter-spacing: -0.01em;

  color: #3D3D3D;
}

.price {
  position: relative;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.03em;

  color: #FE554A;
}

#menu-image-container {
  width:80%;
  height: auto;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 18px 10% 18px 10%;
}

#menu-image {
  width: 155px;
  height: 155px;
  object-fit: cover;
}
</style>