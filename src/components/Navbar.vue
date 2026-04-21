<template>
  <nav
    class="navbar fixed-top py-2 w-full z-50 transition-all duration-500"
    :class="{ 'navbar-scrolled': isScrolled, 'navbar-hover': isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="flex justify-between items-center px-4 sm:px-6 w-full">
      <!-- Logo Section - Kiri -->
      <div class="flex items-center">
        <a class="navbar-brand" href="/">
          <img
            src="@/assets/logo/logo_a2.png"
            alt="Logo"
            width="50"
            height="40"
          />
        </a>
      </div>

      <!-- Desktop Menu - Kanan (Hidden on mobile) -->
      <div class="hidden md:flex items-center gap-8">
        <ul class="menu-list flex gap-8">
          <li>
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li>
            <a class="nav-link" href="#experience">Experiences</a>
          </li>
          <li>
            <a class="nav-link" href="#core-values">Core Values</a>
          </li>
          <li>
            <a class="nav-link" href="#tools">Tools</a>
          </li>
          <li>
            <a class="nav-link" href="#">Dev Notes</a>
          </li>
        </ul>
        <ContactButton />
      </div>

      <!-- Mobile Menu Button (Hamburger) - Visible only on mobile, di kanan -->
      <div class="md:hidden">
        <button
          @click="toggleMobileMenu"
          class="mobile-menu-btn p-2 focus:outline-none"
          :class="{ active: mobileMenuOpen }"
        >
          <div class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      class="mobile-menu-dropdown md:hidden"
      :class="{ open: mobileMenuOpen }"
    >
      <!-- Close Button di pojok kanan atas -->
      <button
        @click="closeMobileMenu"
        class="close-menu-btn absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Mengubah items-center menjadi items-start untuk rata kiri -->
      <div class="flex flex-col items-start gap-6 py-6 pl-8">
        <ul class="mobile-menu-list flex flex-col gap-6">
          <li>
            <a class="mobile-nav-link" href="#home" @click="closeMobileMenu"
              >Home</a
            >
          </li>
          <li>
            <a
              class="mobile-nav-link"
              href="#experience"
              @click="closeMobileMenu"
              >Experiences</a
            >
          </li>
          <li>
            <a
              class="mobile-nav-link"
              href="#core-values"
              @click="closeMobileMenu"
              >Core Values</a
            >
          </li>
          <li>
            <a class="mobile-nav-link" href="#tools" @click="closeMobileMenu"
              >Tools</a
            >
          </li>
          <li>
            <a class="mobile-nav-link" href="#" @click="closeMobileMenu"
              >Dev Notes</a
            >
          </li>
        </ul>
        <div class="mobile-contact-btn">
          <ContactButton />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ContactButton from "@/components/ContactButton.vue";

const isScrolled = ref(false);
const isHovered = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  // Prevent body scroll when menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = "";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<style scoped>
/* Mobile Menu Button Styles */
.mobile-menu-btn {
  position: relative;
  width: 30px;
  height: 24px;
  cursor: pointer;
}

.hamburger-icon {
  position: relative;
  width: 100%;
  height: 100%;
}

.hamburger-icon span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
}

.hamburger-icon span:nth-child(1) {
  top: 0;
}

.hamburger-icon span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger-icon span:nth-child(3) {
  bottom: 0;
}

.mobile-menu-btn.active .hamburger-icon span:nth-child(1) {
  transform: rotate(45deg);
  top: 50%;
}

.mobile-menu-btn.active .hamburger-icon span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-icon span:nth-child(3) {
  transform: rotate(-45deg);
  bottom: 40%;
}

/* Mobile Menu Dropdown - Background putih solid */
.mobile-menu-dropdown {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 320px;
  height: 100vh;
  background: #ffffff;
  box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 40;
  padding-top: 80px;
}

.mobile-menu-dropdown.open {
  right: 0;
}

/* Close button styles */
.close-menu-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 41;
  cursor: pointer;
  color: #333;
  transition: all 0.2s ease;
}

.close-menu-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: scale(1.1);
}

/* Adjust navbar for mobile menu */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  transition: all 0.3s ease;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Mobile menu link styles - rata kiri */
.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.mobile-nav-link {
  font-size: 1.25rem;
  font-weight: 500;
  color: black;
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
  display: inline-block;
}

.mobile-nav-link:hover {
  color: #007bff;
}

/* Overlay when menu is open */
.mobile-menu-dropdown::before {
  content: "";
  position: fixed;
  top: 0;
  left: -100vw;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: -1;
}

.mobile-menu-dropdown.open::before {
  left: 0;
  opacity: 1;
  pointer-events: auto;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar {
    padding: 0.5rem 0;
  }

  .mobile-contact-btn {
    margin-top: 1rem;
  }
}

/* Tablet and up - hide mobile menu */
@media (min-width: 768px) {
  .mobile-menu-dropdown {
    display: none;
  }
}
</style>
