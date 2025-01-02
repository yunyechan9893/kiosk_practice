<template>
  <header>
    <div class="menu">
      <img id="hamburger-button" @click="alert('클릭!')" alt="햄버거 메뉴 버튼" type="button" src="\src\assets\images\HamburgerMenuButton.svg"/>
      <SearchBar></SearchBar>
      <img id="home" alt="홈 버튼" type="button" :src="homeUrl" @click="moveHome" @mouseenter="hoverIn" @mouseout="hoverOut"/>
    <div class="cart">
      <img id="h" @click="open" alt="장바구니 버튼" type="button" src="\src\assets\images\Basket.svg"/>
      <div id="cart-count">
        <span id="cart-count-text">{{ cartItemCount }}</span>
      </div>
    </div>
    </div>
  </header>
</template>

<script setup>
import SearchBar from '@/components/home/SearchBar.vue';
import { useCartItemStore } from '@/store/cart/CartStore.ts';
import { computed, onMounted, ref, watch } from 'vue';
import router from '@/routes';

const ICON = {
  home:'/src/assets/images/Home.svg',
  DisabledHome:'/src/assets/images/Home.png',
  homeClick:'/src/assets/images/HomeClick.png'
}

const currentPath = router.currentRoute.value.path;
const cartItemStore = useCartItemStore()

const cartItemCount = computed(() => cartItemStore.getTotalItemCount());

function open() {

  const modal = document.querySelector('.cart-section');
  modal.style.transition = 'transform 0.3s ease';
  modal.style.transform = 'translateX(0)';
}

const isHovered = ref(false);

const homeUrl = computed(() => {
  if (isHovered.value) {
    return ICON.homeClick;
  }
  return currentPath === '/' || currentPath === '/Home' ? ICON.home : ICON.DisabledHome;
});

const hoverIn = () => {
  if (currentPath === '/' || currentPath === '/Home') {
    isHovered.value = false;
    return;
  }

  isHovered.value = true;
};

const hoverOut = () => {
  isHovered.value = false;
};

function moveHome() {
  router.push('/')
}
</script>

<style scoped>
header {
  position:sticky;
  width: 100vw;
  height: 74px;
  top: 0;
  box-sizing: border-box;
  padding: 50px 60px 0 60px;
  background: #F5F5F5;
  z-index: 9999;
}
.menu {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-content: center;
}

.cart {
  position: relative;
  width: auto;
  height: auto;
}

#hamburger-button {
  position: relative;
  width: 59px;
  height: 60px;
  background: #F5A62E;
  border-radius: 15px;
}

#cart-count {
  width: 25px;
  height: 25px;
  position: absolute;
  top: -18%;
  right: -18%;

  background-image: url("../../assets/images/OrangeCircle.png");
  background-repeat: no-repeat;
  background-position: center;

  text-align: center;
}

#cart-count-text {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  color: #FFEBCE;
}

</style>
