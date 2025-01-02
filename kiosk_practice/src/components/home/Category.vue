<template>
  <div id="category">
    <img src="/src/assets/images/CategoryPizza.png" alt="카테고리 피자 버튼"  @click="navigateToCategory(CATEGORY.PIZZA)">
    <img src="/src/assets/images/CategoryBurger.png" alt="카테고리 피자 버튼" @click="navigateToCategory(CATEGORY.BURGER)">
    <img src="/src/assets/images/CategorySausage.png" alt="카테고리 피자 버튼" @click="navigateToCategory(CATEGORY.SAUSAGE)">
    <img src="/src/assets/images/CategorySamosa.png" alt="카테고리 피자 버튼" @click="navigateToCategory(CATEGORY.SAMOSA)">
    <img src="/src/assets/images/CategoryDrinks.png" alt="카테고리 피자 버튼" @click="navigateToCategory(CATEGORY.DRINK)">
    <img src="/src/assets/images/CategoryDesserts.png" alt="카테고리 피자 버튼" @click="navigateToCategory(CATEGORY.DESSERT)">
  </div>
</template>

<script setup>
import router from '@/routes';
import CATEGORY from '@/constants/Category.ts';

function navigateToCategory(categoty) {
  router.push('/products?categoty=' + categoty); // 라우트 이동
}
</script>
<style scoped>
#category {
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 3%;
  align-items: center;
  justify-content: space-evenly;
}
</style>