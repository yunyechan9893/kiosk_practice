<template>
  <div class="product">
    <div>
      <div class="profile">
        <div id="image-container">
          <img id="profile-image" :src="imageUrl" alt="상품 사진">
        </div>
        <div id="cart-container">
          <input id="cart-button" type="button">
        </div>
      </div>
      <span id="title">{{ title }}</span>
      <p id="contents">{{ contents }}</p>
    </div>
    <div id="footer">
      <div>
        <img id="review-img" src="/src/assets/images/Review.svg" alt="review">
        <span id="review-average">{{ reviewAverage }}</span>
      </div>
      <div id="price-container">
        <span class="price">{{ price }}</span>
        <span class="price" style="margin-right: 10px;">원</span>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  contents: String,
  reviewAverage: Number,
  price: Number,
})

</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 289px;
  height: 560px;

  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 30px;

  padding: 41px 42px 41px 42px;
}

.profile {
  width: 205px;
  height: 229px;
}

#image-container {
  width: 100%;
  height: 200px;

  border-radius: 30px 30px 0 0;

  overflow: hidden;
}

#profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

#cart-container {
  width: 205px;
  height: 30px;
  display: block;
}

#cart-button {
  width: 100%;
  height: 100%;
  border-radius: 0 0 10px 10px;
  border: none;
  background: #FE5F55 url("../../assets/images/CartButton.svg");
}

#title {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
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

#footer {
  width: 205px;
  height: 37px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: end;
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

#price-container {
  display: flex;
  flex-direction: row;
  align-items: center;
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
</style>