<template>
  <nav
    class="navbar navbar-expand-lg py-2 navbar-blur fixed-top"
    style="background: linear-gradient(to right, #85d9f3, #bf44c8)"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img
          src="@/assets/logo/logo_a2.png"
          alt="Logo"
          width="50"
          height="40"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-md-auto mb-2 mb-lg-0">
          <NavbarLink text="Home" href="#home" />
          <NavbarLink text="Experiences" href="#experiences" />
          <NavbarLink text="Tools" href="#tools" />
        </ul>
        <ContactButton />
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "@/components/NavbarLink.vue";
import ContactButton from "@/components/ContactButton.vue";

export default {
  components: {
    NavbarLink,
    ContactButton,
  },
};
</script>

<style scoped>
/* Tambahkan gaya khusus di sini */
</style>
