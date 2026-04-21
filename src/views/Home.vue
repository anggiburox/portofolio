<template>
  <main
    class="min-h-screen flex items-center hero-container pt-5 pb-5"
    id="home"
  >
    <div
      class="container mt-5 mb-4 w-full bg-white mx-auto px-4 rounded-3xl"
      style="padding: 60px 40px !important"
    >
      <div class="flex flex-wrap items-center">
        <!-- Kolom Kiri - Konten -->
        <div class="w-full lg:w-7/12 my-auto pb-5">
          <div class="max-w-[90%] lg:max-w-full mx-auto lg:mx-0">
            <!-- Profile Image - Tampil di semua device -->
            <div class="mb-6 text-center lg:hidden">
              <img
                src="@/assets/logo/aa.jpeg"
                alt="Profile"
                class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto border-4 border-black/80 shadow-lg"
              />
            </div>

            <!-- Badge Lokasi -->
            <div
              class="inline-flex items-center gap-2 bg-black backdrop-blur-md px-5 py-2 rounded-full font-medium text-white mb-6 text-sm mx-auto lg:mx-0"
            >
              <i class="bi bi-geo-alt-fill"></i> Bandung, Indonesia
            </div>

            <!-- Judul -->
            <h1
              class="text-black text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-left lg:text-left"
            >
              Hello
              <br />
              <span class="text-black">I'm Anggi Dwi</span>
            </h1>

            <!-- Deskripsi -->
            <p
              class="text-black/95 text-base md:text-lg leading-relaxed mb-8 text-left lg:text-justify"
            >
              I am a Full Stack Developer with more than 2+ years of experience
              as web developer, I'm familiar with NestJS, Vue JS etc. Feel free
              to contact me to discuss.
            </p>

            <!-- Tombol Collabs -->
            <div class="mb-6 text-left lg:text-left">
              <button
                class="bg-black text-white px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:text-purple-500 shadow-md"
                @click="openEmail"
              >
                <span
                  class="material-symbols-outlined me-2"
                  style="vertical-align: top"
                  >mail</span
                ><span class="align-top">Collabs</span>
              </button>
            </div>

            <!-- Social Links -->
            <div class="flex gap-3 justify-left lg:justify-start pt-3">
              <a
                href="https://www.linkedin.com/in/anggi-dwi-50a473221"
                class="text-black transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
                title="Anggi Dwi Sumiyadi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-linkedin text-2xl"></i>
              </a>
              <a
                href="https://github.com/anggiburox"
                class="text-black transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
                title="Anggiburox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-github text-2xl"></i>
              </a>
              <a
                href="https://www.instagram.com/anggiburox/"
                class="text-black transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
                title="anggiburox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Kolom Kanan - Gambar dengan Lingkaran (Desktop Only) -->
        <div class="hidden lg:block w-full lg:w-5/12">
          <div
            class="relative w-full h-[400px] flex justify-center items-center overflow-visible"
          >
            <!-- Lingkaran Animasi -->
            <div
              class="absolute w-[380px] h-[380px] top-2.5 left-5 rounded-full bg-gradient-radial animate-float backdrop-blur-sm"
            ></div>
            <div
              class="absolute w-[260px] h-[260px] -top-10 -right-5 rounded-full bg-gradient-radial animate-float-delayed backdrop-blur-sm"
            ></div>
            <div
              class="absolute w-[160px] h-[160px] -bottom-7.5 right-5 rounded-full bg-gradient-radial animate-float-more-delayed backdrop-blur-sm"
            ></div>

            <!-- Gambar Profil Desktop -->
            <img
              src="@/assets/logo/aa.jpeg"
              alt="Profile"
              class="relative z-10 w-[220px] h-[220px] rounded-full object-cover border-4 border-black/80 shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const openEmail = () => {
  window.location.href = "mailto:anggiburox@gmail.com";
};
</script>
