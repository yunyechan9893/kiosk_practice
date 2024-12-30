<template>
  <link href="https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap" rel="stylesheet">

  <div class="search" style="position: relative">
    <img id="magnifier" type="button" src="\src\assets\images\magnifier.svg" alt="돋보기 이미지"/>
    <input id="search-bar" type="search" placeholder="Search">
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
.search {
  height:60px;
  width: 100%;
}

#search-bar {
  height: 100%;
  width: 100%;
  border-radius: 15px;
  padding: 10px 10px 10px 65px;
  border: none;
  background: #ECECEC;
}

#magnifier {
  position : absolute;
  margin: 16px 10px 10px 20px
}
</style>