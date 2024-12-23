<template>
  <div>
    <Navbar />
    <Home />
    <Experience />
    <Tools />
    <!-- Konten lainnya ada di sini -->
    <!--  -->
    <!-- footer -->
    <footer
      class="text-center p-3"
      style="background-color: #0f0326; color: white"
    >
      <p>
        Copyright &copy; {{ new Date().getFullYear() }} | Made with
        <i class="bi bi-heart-fill" style="color: red"></i> by Anggi Dwi
        Sumiyadi
      </p>
    </footer>
  </div>
</template>

<script>
import Experience from "@/components/Experience.vue";
import Home from "@/components/Home.vue";
import Navbar from "@/components/Navbar.vue";
import Tools from "@/components/Tools.vue";

export default {
  components: {
    Navbar,
    Home,
    Experience,
    Tools,
  },
};
</script>

<style scoped>
/* Tambahkan gaya khusus di sini */
</style>
