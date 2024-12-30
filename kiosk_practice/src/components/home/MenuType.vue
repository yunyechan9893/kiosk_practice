<template>
  <div class="menu-type">
    <span class="regular-font gray-text">Store</span>
    <img src="/src/assets/images/OrangeDot.svg" alt="오렌지 점"/>
    <span class="regular-font black-text">Fire Fresh</span>
  </div>
</template>

<script>
export default {
  setup() {


    return {};
  },
};
</script>

<style scoped>
.menu-type {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
}

.regular-font {
  position: relative;
  width: auto;
  height: 36px;
  font-family: 'Reem Kufi', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;

}

.gray-text {
  color: #AAACAE;
}

.black-text {
  color: #000000;
}
</style>