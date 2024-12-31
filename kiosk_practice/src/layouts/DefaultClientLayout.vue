<template>
  <div class="layout">
    <div class="page">
        <Header />
        <main>
          <slot />
        </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/default/Header.vue';
import Footer from '../components/default/Footer.vue';

console.log("이거")
</script>

<style scoped>
body {
  width: 100%;
  min-width: 1200px;
  max-width: 98vw;
  background: #F5F5F5;
  margin: 0;
  padding: 0;
}
.page {
  padding: 10px 10px 30px 30px;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex: 1;
  overflow-y: auto;
}
</style>