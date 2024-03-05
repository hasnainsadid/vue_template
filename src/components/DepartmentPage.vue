<script setup>
  import Header from './Header.vue';
  import Department from './Department.vue';
  import Footer from './Footer.vue';
</script>
<template>
  <div class="sub_page">
    <div class="hero_area">
    <div class="hero_bg_box">
      <img src="/images/hero-bg.png" alt="">
    </div>
    <Header></Header>
  </div>
  <Department />
  <Footer></Footer>
  </div>
</template>