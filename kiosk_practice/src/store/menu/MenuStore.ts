import { defineStore } from 'pinia'
import { readonly, ref } from 'vue';
import category from '@/constants/Category';

interface Menu {
  id:number,
  title: string,
  contents: string,
  reviewAverage: number,
  price: number,
  category: string,
  imageUrl: string,
  profile: string
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

  function getListByCategory(category:String) {
    const menusByType = menus.value.filter((menu) => menu.category === category)
    const readonlyMenus = readonly(menusByType);
    return readonlyMenus;
  }

  function getRangeList(start:number, end:number) {
    const readonlyMenus = readonly(menus.value.slice(start, end));
    return readonlyMenus.values();
  }

  function getRangeListByCategory(start:number, end:number, category:String) {
    const menusByType = getListByCategory(category)
    const readonlyMenus = readonly(menusByType.slice(start, end));
    return readonlyMenus.values();
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
    getRangeList,
    getListByCategory,
    getRangeListByCategory,
    add,
    addList
  }
})