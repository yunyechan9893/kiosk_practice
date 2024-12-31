<template>
  <DefaultClientLayout>
    <MenuType />
    <BannerList />
    <Category />
    <MenuList />
    <div class="cart-section">
      <Cart
        @close="close"
      />
    </div>
  </DefaultClientLayout>
</template>

<script setup>
import DefaultClientLayout from '@/layouts/DefaultClientLayout.vue';
import MenuType from '@/components/home/MenuType.vue';
import BannerList from '@/components/home/BannerList.vue';
import Category from '@/components/home/Category.vue';
import MenuList from '@/components/home/MenuList.vue';
import Cart from '@/components/home/Cart.vue';

function close() {
  const modal = document.querySelector('.cart-section');

  modal.style.transition = 'transform 0.3s ease';
  modal.style.transform = 'translateX(100%)';
  console.log(modal.style.transform)
}
</script>

<style>

.cart-section {
  position: fixed;
  z-index: 9999;
  top: 0px; /* 원하는 위치 지정 */
  right: 0px;
}
</style>