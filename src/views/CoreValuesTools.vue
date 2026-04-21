<template>
  <div class="relative w-full">
    <!-- Canvas 3D Component  -->
    <TubesCanvas />

    <!-- Section 1: Core Values -->
    <section
      class="w-full min-h-screen relative overflow-hidden"
      id="core-values"
    >
      <div class="relative z-10 mx-auto px-4 py-20">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-6xl md:text-6xl font-bold text-white mb-4">
            Why Work With Me?
          </h1>
          <h2 class="text-2xl md:text-2xl text-white/90">
            2+ years of experience delivering quality web solutions
          </h2>
        </div>

        <!-- Grid 2 kolom untuk konten utama -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- card 1 -->
          <div class="glass-card p-8 rounded-2xl">
            <div class="text-purple-400 text-4xl mb-4">⏱️</div>
            <h3 class="text-2xl font-bold text-white mb-3">On-Time Delivery</h3>
            <p class="text-white/80">Meeting deadlines.</p>
          </div>

          <!-- card 2 -->
          <div class="glass-card p-8 rounded-2xl">
            <div class="text-pink-400 text-4xl mb-4">🤝</div>
            <h3 class="text-2xl font-bold text-white mb-3">
              Collaborative Partner
            </h3>
            <p class="text-white/80">
              Teamwork with the team prioritizing urgency.
            </p>
          </div>

          <!-- card 3 -->
          <div class="glass-card p-8 rounded-2xl">
            <div class="text-green-400 text-4xl mb-4">📋</div>
            <h3 class="text-2xl font-bold text-white mb-3">
              Technical Documentation
            </h3>
            <p class="text-white/80">
              Clear documentation, code comments, and knowledge transfer
              practices
            </p>
          </div>

          <!-- card 4 -->
          <div class="glass-card p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div class="text-blue-400 text-4xl mb-4">🚀</div>
              <h3 class="text-2xl font-bold text-white mb-3">Find Me !</h3>
              <p class="text-white/80 mb-6">
                Let's connect and explore potential collaborations.
              </p>
            </div>
            <button
              @click="openEmail"
              class="custom-gradient animate-pulse-glow text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Tools -->
    <section class="relative w-full overflow-hidden" id="tools">
      <div class="relative z-10 container mx-auto px-4 pb-20">
        <h1
          class="text-6xl md:text-6xl font-bold text-center mb-12 pb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient"
        >
          Tools & Technologies
        </h1>

        <!-- Grid Tools -->
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          <div
            v-for="tool in tools"
            :key="tool.name"
            class="glass-card rounded-xl p-4 text-center transition-all duration-300 hover:transform hover:-translate-y-2"
          >
            <div class="flex justify-center mb-3">
              <img
                :src="tool.icon"
                :alt="tool.name"
                class="w-12 h-12 md:w-14 md:h-14 object-contain"
                :class="{ 'w-20 h-12 md:w-28 md:h-14': tool.name === 'SDLC' }"
              />
            </div>
            <h5 class="text-white font-semibold text-sm md:text-base">
              {{ tool.name }}
            </h5>
          </div>
        </div>
      </div>

      <!-- Info tambahan di bawah grid -->
      <div class="relative z-10 text-center text-white/60 text-sm pb-8">
        <p>Click anywhere on the page to randomly change tube colors</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import TubesCanvas from "@/components/TubesCanvas.vue";
import { ref } from "vue";

const openEmail = () => {
  window.location.href = "mailto:anggiburox@gmail.com";
};

const tools = ref([
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Swagger",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Github",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Gitlab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },
  {
    name: "NestJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "CodeIgniter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Firefox",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg",
  },
  {
    name: "Trello",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
  },
]);
</script>
