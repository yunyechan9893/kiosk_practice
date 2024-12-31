<template>
  <header>
    <div class="menu">
      <img id="hamburger-button" @click="alert('클릭!')" alt="햄버거 메뉴 버튼" type="button" src="\src\assets\images\HamburgerMenuButton.svg"/>
      <SearchBar style="flex-grow: 1"></SearchBar>
      <img id="h" alt="홈 버튼" type="button" src="\src\assets\images\Home.svg"/>
      <img id="h" @click="open" alt="장바구니 버튼" type="button" src="\src\assets\images\Basket.svg"/>
    </div>
  </header>
</template>

<script setup>
import SearchBar from '@/components/home/SearchBar.vue';


function open() {
  const modal = document.querySelector('.cart-section');

  modal.style.transition = 'transform 0.3s ease';
  modal.style.transform = 'translateX(0)';
}
</script>

<style scoped>
header {
  position: relative;
  width: 100%;
  height: auto;
  padding: 30px 30px 0px 0px;
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