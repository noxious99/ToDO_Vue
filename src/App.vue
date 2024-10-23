<script>
import "./index.css";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Footer,
    Navbar,
  },
};
</script>

<template>
  <header></header>

  <main>
    <Navbar />
    <router-view />
    <Footer />
  </main>
</template>

<style scoped></style>
