<template lang="">
  <main
    class="main-layout pt-5 pb-5"
    style="background-color: #0f0326"
    id="home"
  >
    <div
      class="container mt-5 mb-4 w-100"
      style="background: linear-gradient(to right, #0f0326, #7e2670)"
    >
      <div class="row">
        <div class="col-12 col-lg-7 my-auto pb-5">
          <div class="d-block d-lg-none mb-3 px-auto">
            <!-- Lingkaran besar di kiri atas -->
            <div class="circle small top-left"></div>
            <!-- Lingkaran sedang di kanan atas -->
            <div class="circle samll bottom-left"></div>
            <img
              src="@/assets/logo/aa.jpeg"
              alt="Profile"
              class="profile-img"
            />
          </div>
          <div class="container text-white">
            <i class="bi bi-geo-alt-fill"></i><b>Bandung, Indonesia</b>
          </div>
          <h1 class="container text-white">
            Hello
            <br />
            <span>I'm Anggi Dwi</span>
          </h1>
          <p
            class="container"
            style="
              text-align: justify;
              line-height: 1.5;
              font-size: 18px;
              font-weight: 500;
              color: #6c757d;
            "
          >
            I am a
            <span
              class="text-capitalize"
              style="
                background: linear-gradient(to right, #85d9f3, #bf44c8);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
              >{{ role }}</span
            >
            with more than 2 years of experience as web developer, I'm familiar
            with Laravel Framework and Vue Framework. Feel free to contact me to
            discuss.
          </p>
          <div class="container">
            <div class="col-12 col-md-6">
              <button
                class="btn rounded-pill"
                onclick="window.location.href='mailto:anggiburox@gmail.com';"
                style="
                  background: linear-gradient(to right, #85d9f3, #bf44c8);
                  /* -webkit-background-clip: text; */
                  /* -webkit-text-fill-color: transparent; */
                  font-weight: bold;
                  color: white;
                  box-shadow: 0px 0px 20px white;
                "
              >
                <i class="bi bi-envelope me-2"></i>Collabs
              </button>
            </div>
          </div>
          <div class="pt-3 container">
            <a
              href="https://www.linkedin.com/in/anggi-dwi-50a473221"
              class="me-3"
              title="Anggi Dwi Sumiyadi"
              target="_blank"
            >
              <i class="bi bi-linkedin fs-4 text-white"></i
            ></a>
            <a
              href="https://github.com/anggiburox"
              class="me-3"
              title="Anggiburox"
              target="_blank"
            >
              <i class="bi bi-github fs-4 text-white"></i
            ></a>
            <a
              href="https://www.instagram.com/anggiburox/"
              class="me-3"
              title="anggiburox"
              target="_blank"
            >
              <i class="bi bi-instagram fs-4 text-white"></i
            ></a>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="main d-none d-md-block d-xxl-block">
            <div class="circle-container">
              <!-- Lingkaran besar di kiri atas -->
              <div class="circle small top-left"></div>
              <!-- Lingkaran sedang di kanan atas -->
              <div class="circle medium top-right"></div>
              <!-- Lingkaran kecil di bawah -->
              <div class="circle small bottom-right"></div>
              <!-- Gambar profil -->
              <img
                src="@/assets/logo/aa.jpeg"
                alt="Profile"
                class="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.circle-container {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Agar lingkaran yang keluar tetap rapi */
}

/* Container lingkaran */
.circle-container {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Agar lingkaran tetap dalam area */
}

/* Lingkaran */
.circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(162, 95, 228, 0.5),
    rgba(115, 44, 232, 0.2)
  );
  animation: move 10s infinite ease-in-out;
}

/* Ukuran lingkaran */
.circle.large {
  width: 450px;
  height: 450px;
  animation-delay: 0s; /* Mulai langsung */
}

.circle.medium {
  width: 300px;
  height: 300px;
  animation-delay: 2s; /* Mulai setelah 2 detik */
}

.circle.small {
  width: 200px;
  height: 200px;
  animation-delay: 4s; /* Mulai setelah 4 detik */
}

/* Posisi awal lingkaran */
.circle.top-left {
  top: 50px;
  left: 20px;
}

.circle.top-right {
  top: -80px;
  right: -70px;
}

.circle.bottom-right {
  bottom: -60px;
  right: -120px;
}

/* Gambar profil */
.profile-img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  position: relative;
  z-index: 10; /* Agar gambar tetap di atas lingkaran */
}

/* Animasi gerakan lingkaran */
@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(30px, -20px);
  }
  50% {
    transform: translate(-20px, 30px);
  }
  75% {
    transform: translate(-30px, -30px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
<script>
export default {
  data() {
    return {
      role: "",
    };
  },

  mounted() {
    // Ensure the element exists before using setInterval
    const roles = ["Programmer", "UI/UX", "Analyst System"];
    let roleIndex = 0;
    const roleElement = document.querySelector(".text-capitalize");

    if (roleElement) {
      setInterval(
        () => {
          roleElement.textContent = roles[roleIndex];
          roleIndex = (roleIndex + 1) % roles.length;
        },
        roleIndex === roles.length - 1 ? 1800 : 1100
      );
    } else {
      console.error('Element with class "text-capitalize" not found.');
    }
  },
};
</script>
<style lang=""></style>
