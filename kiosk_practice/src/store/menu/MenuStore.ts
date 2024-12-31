import { defineStore } from 'pinia'
import { readonly, ref } from 'vue';

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

  function get(index:number) : Menu{
    return menus.value.find((menu) => menu.id == index);
  }

  function getList() {
    const readonlyMenus = readonly(menus);
    return readonlyMenus.value;
  }

  function add(menu:Menu) {
    menus.value.push(menu);
  }

  function addList(menuList:Menu[]) {
    menuList.forEach(menu => menus.value.push(menu))
  }

  return {
    get,
    getList,
    add,
    addList
  }
})