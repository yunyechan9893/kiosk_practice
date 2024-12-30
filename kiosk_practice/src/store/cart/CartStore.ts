import { defineStore } from 'pinia'
import CartItem from '@/components/home/CartItem.vue';
import { ref } from 'vue';

interface CartItem {
  id: number,
  count: number
}

export const useCartStore = defineStore('cart',() => {

  const items = ref<CartItem[]>([]);

  function getItems() {
    return items.value.reduce((total, item) => total + item.count, 0);
  }

  function addItem (item: CartItem) {
      const existingItem = items.value.find(i => i.id === item.id);
      if (existingItem) {
        return false;
      } else {
        items.value.push(item);
        return true
      }
    }

  function removeItem(id: number) {
    items.value = items.value.filter(item => item.id !== id);
  }

  return {
    items,
    getItems,
    addItem
  }
});
