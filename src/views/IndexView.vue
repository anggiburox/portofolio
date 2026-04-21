<template>
  <div>
    <Navbar />
    <Home />
    <Experience />
    <CoreValuesTools />

    <!-- footer -->
    <footer class="text-center py-3 bg-white text-black overflow-hidden">
      <p>
        Copyright &copy; {{ new Date().getFullYear() }} | Made with
        <i class="bi bi-heart-fill" style="color: red"></i> by Anggi Dwi
        Sumiyadi
      </p>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Home from "./Home.vue";
import Experience from "./Experience.vue";
import CoreValuesTools from "./CoreValuesTools.vue";
</script>
