import { defineStore } from 'pinia'
import { ref } from 'vue';

interface Menu {
  id:number,
  title: string,
  contents: string,
  reviewAverage: number,
  price: number,
  imageUrl: string
}

export const useMenuStore = defineStore('menu',() => {
  const menus = ref<Menu[]>([]);

  function getList() {
    return menus.value;
  }

  function add(menu:Menu) {
    menus.value.push(menu);
  }

  function addList(menuList:Menu[]) {
    menuList.forEach(menu => menus.value.push(menu))
  }

  return {
    menus,
    getList,
    add,
    addList
  }
})