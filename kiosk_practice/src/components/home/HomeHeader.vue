<template>
  <header>
    <div class="menu">
      <img id="hamburger-button" @click="alert('클릭!')" alt="햄버거 메뉴 버튼" type="button" src="\src\assets\images\HamburgerMenuButton.svg"/>
      <SearchBar></SearchBar>
      <img id="h" alt="홈 버튼" type="button" src="\src\assets\images\Home.svg"/>
      <img id="h" alt="장바구니 버튼" type="button" src="\src\assets\images\Basket.svg"/>
    </div>
  </header>
</template>

<script>
import SearchBar from '@/components/home/SearchBar.vue';

export default {
  components: { SearchBar },
  setup() {


    return {};
  },
};
</script>

<style scoped>
header {
  position: relative;
  width: 100%;
  height: 30%;
  padding: 30px 30px 30px 30px;
}
.menu {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-content: center;
}

#hamburger-button {
  position: relative;
  width: 59px;
  height: 60px;
  left: 0px;
  top: 0px;
  background: #F5A62E;
  border-radius: 15px;
}
</style>