<template>
  <div class="box">
    <img id="back" @click="close" src="/src/assets/images/Back.svg" alt="뒤로가기">
    <img id="pencil" src="/src/assets/images/Pencil.svg" alt="연필이미지">
    <span id="title">Your Cart</span>
    <div class="cart-items-container">
      <CartItem v-for="(item, _) in cartItems"
        :key="item.id"
        :id="item.id"
        :imageUrl="item.imageUrl"
        :title="item.title"
        :price="item.price"
        :productCount="item.productCount"
      />
    </div>
    <div class="footer">
      <div class="total-price-section">
        <div class="price-line">
          <span class="price-title-text">Subtotal</span>
          <div>
            <span class="price-text width-80">{{ cartStore.getSubtotal() }}</span>
            <span class="price-text">원</span>
          </div>
        </div>
        <div class="price-line">
          <span class="price-title-text">Tax</span>
          <div>
            <span class="price-text width-80">{{ cartStore.getTax() }}</span>
            <span class="price-text">원</span>
          </div>
        </div>
        <div class="price-line">
          <span class="price-title-text">Total</span>
          <div>
            <span class="price-text width-80">{{ cartStore.getTotal() }}</span>
            <span class="price-text">원</span>
          </div>
        </div>
      </div>
      <img id="pay-button" src="/src/assets/images/PayButton.png" alt="구매버튼"/>
    </div>
  </div>
</template>

<script setup>
import { useCartItemStore } from '@/store/cart/CartStore.ts';
import { useCartStore } from '@/store/cart/CartStore.ts';
import { useMenuStore } from '@/store/menu/MenuStore.ts';
import CartItem from '@/components/home/CartItem.vue';
import { defineEmits, onMounted, ref, watch } from 'vue';

// Todo - DB 연결전까지 임시 구성
const cartItemStore = useCartItemStore();
const cartStore = useCartStore();
const menuStore = useMenuStore();
const cartItems = ref([])

onMounted(() => {
  close()
  setCartItems();
});

watch(
  () => cartItemStore.items,
  () => {
    setCartItems()

  },
  { deep: true }
);


function setCartItems() {
  const cartList = cartItemStore.getItems()
  cartItems.value = cartList.map((cartItem) => {
    const menu = menuStore.get(cartItem.id)
    return {
      id:menu.id,
      imageUrl:menu.imageUrl,
      title:menu.title,
      price:menu.price,
      productCount:cartItem.count
    }
  })
}

function close() {
  const modal = document.querySelector('.cart-section');

  modal.style.transition = 'transform 0.3s ease';
  modal.style.transform = 'translateX(100%)';
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 100vh;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding: 30px 18px 30px 18px;
  box-sizing: border-box;
  gap: 28px;
}

.cart-items-container {
  display: flex;
  flex-direction: column;
  gap: 15px;

  max-height: 400px;
  overflow-y: auto;
  padding: 3px 3px 3px 3px;
}

#back {
  position: absolute;
  width: 15px;
  height: 25px;
  left: 310px;
  top: 44px;
}

#pencil {
  width: 40px;
  height: 40px;
}

#title {
  width: 153px;
  height: 54px;

  font-family: 'Reem Kufi', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 54px;

  color: #000000;
}

.total-price-section {
  width: 320px;
  height: 130px;
  padding: 6px 20px 6px 20px;

  border: 2px solid #F5A62E;
  border-radius: 20px;
  box-sizing: border-box;
}

.price-line {
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.price-title-text {
  width: 100px;
  height: 36px;

  font-family: 'Reem Kufi', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;

  color: #585858;
}

.price-text {
  width: 88.43px;
  height: 28px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  letter-spacing: -0.03em;

  color: #3B3A3A;
}

#pay-button {
  width: auto;
  height: auto;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
}

.width-80 {
  width: 80%;
}

</style>