<template>
  <li class="nav-item">
    <a class="nav-link text-white" :href="href" style="font-weight: bold">{{
      text
    }}</a>
  </li>
</template>

<script>
export default {
  props: {
    text: String,
    href: String,
  },
};
</script>

<style scoped>
/* Tambahkan gaya khusus untuk navbar link jika perlu */
</style>
