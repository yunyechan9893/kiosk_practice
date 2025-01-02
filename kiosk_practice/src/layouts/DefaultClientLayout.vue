<template>
  <div class="layout">
    <Header />
    <div class="page">
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
</script>

<style>
body {
  width: 100vw;
  min-width: 1200px;
  max-width: 2000px;
  background: #F5F5F5;
  margin: 0;
  padding: 0 0 0 0;
}

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
}

main {
  height: 60%;
  width: 100%;
  margin-top: 30px;
  padding: 10px 60px 30px 60px;
  box-sizing: border-box;
}
</style>