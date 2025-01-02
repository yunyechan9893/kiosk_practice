<template>
  <div id="menu">
    <span id="menu-title">Burger</span>
    <div class="menu-section">
      <Menu v-for="(item, _) in menuItems"
            :key = "item.id"
            :id="item.id"
            :imageUrl = "item.imageUrl"
            :title = "item.title"
            :contents = "item.contents"
            :reviewAverage = "item.reviewAverage"
            :price = "item.price"
      ></Menu>
    </div>
  </div>
</template>

<script setup>
import Menu from '@/components/home/Menu.vue';
import { onMounted, ref } from 'vue';
import { useMenuStore } from '@/store/menu/MenuStore.ts';
import CATEGORY from '@/constants/Category.ts';

const menuStore = useMenuStore();

const menuItems = ref(menuStore.getRangeListByCategory(0, 5, CATEGORY.BURGER));
</script>

<style scoped>
#menu {
  padding-top:40px
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

.menu-section {
  height: auto;
  display:flex;
  flex-direction: row;
  justify-items: start;
  gap: 30px;
}
</style>