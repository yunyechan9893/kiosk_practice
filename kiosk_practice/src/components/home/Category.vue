<template>
  <div id="category">
    <img src="/src/assets/images/CategoryPizza.png" alt="카테고리 피자 버튼">
    <img src="/src/assets/images/CategoryBurger.png" alt="카테고리 피자 버튼">
    <img src="/src/assets/images/CategorySausage.png" alt="카테고리 피자 버튼">
    <img src="/src/assets/images/CategorySamosa.png" alt="카테고리 피자 버튼">
    <img src="/src/assets/images/CategoryDrinks.png" alt="카테고리 피자 버튼">
    <img src="/src/assets/images/CategoryDesserts.png" alt="카테고리 피자 버튼">
  </div>
</template>

<script>
export default {
  setup() {


    return {};
  },
};
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