<template>
  <button class="btn btn-outline-dark" type="submit" @click="contact">
    <i class="fs-5 bi-envelope"></i> Contact
  </button>
</template>

<script>
export default {
  methods: {
    contact() {
      window.location.href = "mailto:anggiburox@gmail.com";
    },
  },
};
</script>

<style scoped>
/* Tambahkan gaya khusus untuk tombol kontak jika perlu */
</style>
