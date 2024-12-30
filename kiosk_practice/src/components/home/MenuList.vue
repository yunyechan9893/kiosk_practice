<template>
  <div id="menu">
    <span id="menu-title">Burger</span>
    <div class="menu-section">
      <Menu v-for="(item, index) in menuItems"
            :key = "index"
            :imgUrl = "item.imgUrl"
            :title = "item.title"
            :contents = "item.contents"
            :reviewAverage = "item.reviewAverage"
            :price = "item.price"
      ></Menu>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/home/Menu.vue';
import { ref } from 'vue';

export default {
  components: { Menu },
  setup() {
    const menuItems = ref([
      {
        imgUrl: '/src/assets/images/Burger.png',
        title: 'The Jalapeno Popper Show',
        contents: 'The Jalapeno Popper Show is a Mexican Chicken Burger topped with jalapeno-infused cream cheese.',
        reviewAverage: 4.5,
        price: 10000,
      },
      {
        imgUrl: '/src/assets/images/Burger2.png',
        title: 'The Pepperoni Pizza',
        contents: 'Delicious pepperoni pizza with extra cheese.',
        reviewAverage: 4.8,
        price: 12000,
      },
      {
        imgUrl: '/src/assets/images/Burger3.png',
        title: 'Sausage Special',
        contents: 'A tasty sausage burger with fresh toppings.',
        reviewAverage: 4.2,
        price: 5900,
      },
      {
        imgUrl: '/src/assets/images/Burger3.png',
        title: 'Sausage Special',
        contents: 'A tasty sausage burger with fresh toppings.',
        reviewAverage: 4.2,
        price: 5900,
      },
      {
        imgUrl: '/src/assets/images/Burger3.png',
        title: 'Sausage Special',
        contents: 'A tasty sausage burger with fresh toppings.',
        reviewAverage: 4.2,
        price: 5900,
      },
    ]);

    const imgUrl = ref('/src/assets/images/Burger.png');
    const title = ref('The Jalapeno Popper Show')
    const contents = ref('The Jalapeno Popper Show is a Mexican Chicken Burger topped with jalapeno-infused cream cheese.')
    const reviewAverage = ref(0.0);
    const price = ref(0);

    return {
      menuItems,
      imgUrl,
      title,
      contents,
      reviewAverage,
      price
    };
  },
};
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