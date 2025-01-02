import { defineStore } from 'pinia'
import CartItem from '@/components/home/CartItem.vue';
import { readonly, ref } from 'vue';

interface CartItem {
  id: number,
  count: number
}

interface Cart {
  total:number
}

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart>({
    total:0
  } as Cart)

  function getSubtotal() {
    return cart.value.total * 0.9
  }

  function getTax() {
    return cart.value.total * 0.1
  }

  function getTotal() {
    return cart.value.total
  }

  function addTotal(price:number) {
    cart.value.total += price;
  }

  function subTotal(price:number) {
    cart.value.total -= price;
  }

  return {
    cart,
    getSubtotal,
    getTax,
    getTotal,
    subTotal,
    addTotal
  }
})

export const useCartItemStore = defineStore('cartItem',() => {
  const items = ref<CartItem[]>([]);
  
  function getItems() {
    const readonlyMenus = readonly(items);
    return readonlyMenus.value;
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

  function incrementCount(id: number) {
    const item = items.value.find(item => item.id === id);

    if (!item) {
      return item;
    }

    item.count += 1;
    return item;
  }

  function decrementCount(id: number) {
    const item = items.value.find(item => item.id === id);

    if (!item) {
      return;
    }

    if (item.count <= 1) {
      return false;
    }

    item.count -= 1;
    return true;
  }

  function getTotalItemCount() : number {
    return items.value.length;
  }

  return {
    items,
    getItems,
    addItem,
    incrementCount,
    decrementCount,
    getTotalItemCount
  }
});
