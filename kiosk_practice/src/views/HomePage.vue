<template>
  <DefaultClientLayout>
    <MenuType />
    <BannerList />
    <Category />
    <MenuList />
    <div class="cart-section">
      <Cart />
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
</script>

<style>

.cart-section {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
}
</style>