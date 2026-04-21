<template>
  <button class="btn-contact" type="submit" @click="contact">
    <span class="material-symbols-outlined"> mail </span>
    <span>Collabs</span>
  </button>
</template>

<script setup>
const contact = () => {
  window.location.href = "mailto:anggiburox@gmail.com";
};
</script>
