<template>
  <DefaultClientLayout>
    <span id="menu-title">Burger</span>
    <ProductList
     :category="category"
    />
    <div class="cart-section">
      <Cart />
    </div>
  </DefaultClientLayout>
</template>

<script setup>
import DefaultClientLayout from '@/layouts/DefaultClientLayout.vue';
import Cart from '@/components/home/Cart.vue';
import ProductList from '@/components/product/ProductList.vue';
import { ref } from 'vue';
import router from '@/routes/index.ts';

const category = ref(router.currentRoute.value.query?.categoty)
</script>

<style>

.cart-section {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
}

#menu-title {
  /* Burger */
  position: relative;
  width: 108px;
  height: 55px;

  font-family: 'Reem Kufi', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 152.3%;
  /* identical to box height, or 55px */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  color: #000000;
}
</style>