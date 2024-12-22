<template>
  <div>
    <!-- navbar gradasi -->
    <nav
      class="navbar navbar-expand-lg py-2 navbar-blur fixed-top"
      style="background: linear-gradient(to right, #85d9f3, #bf44c8)"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="@/assets/logo/logo_a2.png"
            alt="Bootstrap"
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
            <li class="nav-item">
              <a
                class="nav-link text-white active"
                href="home"
                style="font-weight: bold"
                >Homee</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#" style="font-weight: bold"
                >Experiences</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#" style="font-weight: bold"
                >Tools</a
              >
            </li>
          </ul>

          <button
            class="btn btn-outline-dark"
            type="submit"
            onclick="window.location.href='mailto:anggiburox@gmail.com';"
          >
            <i class="fs-5 bi-envelope"></i> Contact
          </button>
        </div>
      </div>
    </nav>

    <main class="main-layout pt-5 pb-5" style="background-color: #0f0326">
      <div
        class="container mt-5 mb-4 w-100"
        style="background: linear-gradient(to right, #0f0326, #7e2670)"
      >
        <div class="row">
          <div class="col-12 col-lg-7 my-auto">
            <div class="d-block d-lg-none mb-3 px-auto">
              <img
                src="@/assets/logo/logo_a2.png"
                alt=""
                width="200"
                height="200"
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
              with more than 2 years of experience as web developer, I'm
              familiar with Laravel Framework and Vue Framework. Feel free to
              contact me to discuss.
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
                title="Anggiburox"
                target="_blank"
              >
                <i class="bi bi-github fs-4 text-white"></i
              ></a>
            </div>
          </div>
          <div class="col-12 col-md-5">
            <div class="main d-none d-md-block d-xxl-block">
              <div class="sub-main">
                <div class="mt-5">
                  <img
                    src="@/assets/logo/logo_a2.png"
                    width="400"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- experiences -->
      <div class="container text-light py-5">
        <h1>Experiences</h1>
      </div>

      <!-- tampilan mobile experiencesgunakan d-block d-lg-none mb-3 px-auto -->
      <div class="d-block d-lg-none mb-3 px-auto">
        <div
          id="carouselExampleIndicatorsmobile"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicatorsmobile"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicatorsmobile"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicatorsmobile"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner container">
            <div class="carousel-item active">
              <div class="col-md-4">
                <div class="card h-100 rounded-custom">
                  <img
                    src="@/assets/logo/logo_a2.png"
                    alt=""
                    class="card-img-top"
                  />
                  <div class="card-body text-dark">
                    <h5 class="card-title">Inventory - 2019</h5>
                    <p class="card-text">
                      Inventory System merupakan aplikasi sederhana untuk UJIKOM
                      di SMK Bakti Nusantara 666. Aplikasi ini dibuat dengan
                      menggunakan PHP, Bootstrap, dan MySQL.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-md-4">
                <div class="card h-100 rounded-custom">
                  <img
                    src="@/assets/logo/logo_a2.png"
                    alt=""
                    class="card-img-top"
                  />
                  <div class="card-body text-dark">
                    <h5 class="card-title">Kaula - 2019</h5>
                    <p class="card-text">
                      Kaula merupakan website e-commerce menggunakan CMS
                      WordPress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="col-md-4">
                <div class="card h-100 rounded-custom">
                  <img
                    src="@/assets/logo/logo_a2.png"
                    alt=""
                    class="card-img-top"
                  />
                  <div class="card-body text-dark">
                    <h5 class="card-title">Card 9</h5>
                    <p class="card-text">
                      Expedita accusantium ratione beatae minus porro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- tutup mobile experiences-->

      <!-- tampilan desktop gunakan  main d-none d-md-block d-xxl-block-->
      <div
        id="carouselExampleIndicators"
        class="carousel slide main d-none d-md-block d-xxl-block"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <!-- Carousel Indicators -->
        <div class="carousel-indicators">
          <button
            v-for="(chunk, index) in chunkedExperiences"
            :key="'indicator-' + index"
            type="button"
            :data-bs-target="'#carouselExampleIndicators'"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-label="'Slide ' + (index + 1)"
          ></button>
        </div>

        <!-- Carousel Items -->
        <div class="carousel-inner container">
          <!-- Loop through experiences and group them into rows of 3 -->
          <div
            v-for="(chunk, chunkIndex) in chunkedExperiences"
            :key="chunkIndex"
            class="carousel-item"
            :class="{ active: chunkIndex === 0 }"
          >
            <div class="row">
              <!-- Loop through each chunk of 3 experiences -->
              <div
                v-for="(experience, index) in chunk"
                :key="experience.id"
                class="col-md-4"
              >
                <div class="card h-100 rounded-custom">
                  <img
                    :src="'http://127.0.0.1:8000/storage/' + experience.foto"
                    alt="Experience Image"
                    class="card-img-top"
                  />

                  <div class="card-body text-dark">
                    <h5 class="card-title">{{ experience.title }}</h5>
                    <p class="card-text">{{ experience.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- tutup desktop -->
      <!-- tutup experiences -->

      <!-- tutup -->
    </main>

    <!-- tutup -->
  </div>
</template>

<style>
.active {
  /* color: #130428 !important; */
}
button.carousel-control-prev {
  margin-left: -50px;
}

button.carousel-control-next {
  margin-right: -50px;
}
.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: -50px;
  margin-left: 15%;
}
</style>
<script>
import axios from "axios";
let roles = ["Programmer", "UI/UX", "Analyst System"];
let roleIndex = 0;
setInterval(
  () => {
    document.querySelector(".text-capitalize").textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
  },
  roleIndex === roles.length - 1 ? 1800 : 1100
);
export default {
  data() {
    return {
      experiences: [],
      role: "",
    };
  },
  computed: {
    // Membagi pengalaman menjadi chunk per 3 item
    chunkedExperiences() {
      let result = [];
      for (let i = 0; i < this.experiences.length; i += 3) {
        result.push(this.experiences.slice(i, i + 3));
      }
      return result;
    },
  },
  methods: {
    // Fungsi untuk mendapatkan URL gambar yang benar
    getImageUrl(foto) {
      // Periksa apakah path foto ada, jika ada, kembalikan URL yang benar
      return foto
        ? `/storage/${foto}` // Menggunakan foto langsung tanpa 'assets/foto' tambahan
        : "/path/to/default-image.jpg"; // Menampilkan gambar default jika tidak ada
    },
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/experiences")
      .then((response) => {
        this.experiences = response.data.data;
        console.log(this.experiences); // Log the data to verify it's correctly fetched
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  },
};
</script>
