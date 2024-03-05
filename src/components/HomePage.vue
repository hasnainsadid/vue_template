<script setup>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import Department from './Department.vue';
  import About from './About.vue';
  import Doctor from './Doctor.vue';
  import Contact from './Contact.vue';
  import Client from './Client.vue';
  import Slider from './Slider.vue';
</script>
<template>
<div class="hero_area">

<div class="hero_bg_box">
  <img src="/images/hero-bg.png" alt="">
</div>

<!-- header section strats -->
<Header />
<!-- end header section -->
<!-- slider section -->
<Slider />
<!-- end slider section -->
</div>


<!-- department section -->

<Department/>

<!-- end department section -->

<!-- about section -->

<About/>

<!-- end about section -->

<!-- doctor section -->

<Doctor/>

<!-- end doctor section -->

<!-- contact section -->
<Contact/>
<!-- end contact section -->

<!-- client section -->

<Client/>

<!-- end client section -->

<!-- footer section -->
<Footer />
<!-- footer section -->
</template>

<script>
  export default {
    
  }
</script>