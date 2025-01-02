<template>
  <div class="grid-container">
    <Product v-for="(prop, _) in menuItems"
      :key=prop.id
      :id=prop.id
      :imageUrl=prop.profile
      :title=prop.title
      :contents=prop.contents
      :reviewAverage=prop.reviewAverage
      :price=prop.price />
  </div>
</template>

<script setup>
import Product from '@/components/product/Product.vue';
import { ref } from 'vue';
import { useMenuStore } from '@/store/menu/MenuStore.ts';

const prop = defineProps({
  category:String
})

const menuStore = useMenuStore();
const menuItems = ref(menuStore.getListByCategory(prop.category));


</script>

<style scoped>
.grid-container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(289px, 319px));
  box-sizing: border-box;
  gap: 20px;
}

</style>