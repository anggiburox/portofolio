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
                href="#home"
                style="font-weight: bold"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                href="#experiences"
                style="font-weight: bold"
                >Experiences</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                href="#tools"
                style="font-weight: bold"
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
              <div class="circle small top-right"></div>
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

      <!-- experiences -->
      <div class="container text-light py-5" id="experiences">
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
          <!-- Carousel Indicators -->
          <div class="carousel-indicators">
            <button
              v-for="(chunk, index) in chunkedExperiencesmobile"
              :key="'indicator-' + index"
              type="button"
              :data-bs-target="'#carouselExampleIndicatorsmobile'"
              :data-bs-slide-to="index"
              :class="{ active: index === 0 }"
              :aria-label="'Slide ' + (index + 1)"
            ></button>
          </div>

          <!-- Carousel Items -->
          <div class="carousel-inner container">
            <!-- Loop through experiences and group them into rows of 3 -->
            <div
              v-for="(chunk, chunkIndex) in chunkedExperiencesmobile"
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
                      :src="
                        'https://anggiburox.github.io/tes-pro/assets/' +
                        experience.foto
                      "
                      alt="Experience Image"
                      class="card-img-top"
                    />

                    <div class="card-body text-dark">
                      <h5 class="card-title">{{ experience.title }}</h5>
                      <p class="card-text text-justify">
                        {{ experience.description }}
                      </p>
                    </div>
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
                    <p class="card-text text-justify">
                      {{ experience.description }}
                    </p>
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

    <main
      class="main-layout pt-5 pb-5"
      style="background-color: #000000"
      id="tools"
    >
      <!-- awal tools -->
      <div class="container py-5">
        <h1
          style="
            background: linear-gradient(
              to right,
              #bf44c8 1%,
              #bf44c8 0%,
              #85d9f3 10%,
              #85d9f3 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          "
        >
          Tools
        </h1>
      </div>

      <!-- tampilan mobile tools menggunakan d-block d-lg-none mb-3 px-auto -->
      <div class="d-block d-lg-none mb-3 px-auto container">
        <!-- 1 -->
        <div class="row mb-3">
          <div class="col-6">
            <div
              class="card h-100 rounded-custom"
              style="box-shadow: 5px 5px 15px #85d9f3, 5px 5px 50px #bf44c8"
            >
              <div class="card-body text-dark">
                <div class="d-flex align-items-center justify-content-center">
                  <img
                    src="@/assets/logo/vscode.png"
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>
                <div class="d-flex align-items-center justify-content-center">
                  <h6 class="card-title text-center">VS Code</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div
              class="card h-100 rounded-custom"
              style="box-shadow: 5px 5px 15px #85d9f3, 5px 5px 50px #bf44c8"
            >
              <div class="card-body text-dark">
                <div class="d-flex align-items-center justify-content-center">
                  <img
                    src="@/assets/logo/xampp.png"
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>
                <div class="d-flex align-items-center justify-content-center">
                  <h6 class="card-title text-center">XAMPP</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 1 -->
        <!-- 2 -->
        <div class="row mb-3">
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/github.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Github</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/gitlab.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Gitlab</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <!-- 3 -->
        <div class="row mb-3">
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/php.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">PHP</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/laravel.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Laravel</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 3 -->
        <!-- 4 -->
        <div class="row mb-3">
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/ci.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">CodeIgniter</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/mysql.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">MySQL</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 4 -->
        <!-- 5 -->
        <div class="row mb-3">
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/wordpress.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">WordPress</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/html.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">HTML</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 5 -->
        <!-- 6 -->
        <div class="row mb-3">
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/css.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">CSS</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/bs.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Bootstrap</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 6 -->
        <!-- 7 -->
        <div class="row mb-3">
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/figma.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Figma</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/edge.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Edge</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 7 -->
        <!-- 8 -->
        <div class="row mb-3">
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/vue.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Vue</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/drawio.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Draw.io</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 8 -->
        <!-- 8 -->
        <div class="row mb-3">
          <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/trello.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Trello</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-6">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/drawio.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Draw.io</h5>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <!-- 9 -->
      </div>

      <!-- tutup mobile tools-->

      <!-- tampilan desktop gunakan  main d-none d-md-block d-xxl-block-->
      <div class="container main d-none d-md-block d-xxl-block">
        <div class="row mb-5">
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/vscode.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">VS Code</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/xampp.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">XAMPP</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/github.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Github</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->

          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/gitlab.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Gitlab</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/php.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">PHP</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->

          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/laravel.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Laravel</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
        </div>
        <div class="row mb-5">
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/ci.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">CodeIgniter</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/mysql.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">MySQL</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/wordpress.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">WordPress</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/html.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">HTML</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/css.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">CSS</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/bs.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Bootstrap</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
        </div>
        <div class="row mb-5">
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/figma.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Figma</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->

          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/edge.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Edge</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->

          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/vue.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Vue</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->

          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/drawio.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Draw.io</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
          <!-- awal -->
          <div class="col-md-2">
            <div
              class="card h-10 rounded-custom"
              style="
                box-shadow: 10px 10px 20px #85d9f3, 10px 10px 100px #bf44c8;
              "
            >
              <div class="card-body text-dark">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/assets/logo/trello.png"
                    alt=""
                    width="50"
                    height="50"
                  />
                </div>
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <h5 class="card-title">Trello</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- akhir -->
        </div>
      </div>

      <!-- akhir tools -->
    </main>

    <!-- footer -->
    <footer
      class="text-center p-3"
      style="background-color: #0f0326; color: white"
    >
      <p>
        Copyright &copy; {{ new Date().getFullYear() }} | Made with
        <i class="bi bi-heart-fill" style="color: red"></i> by Anggi Dwi
        Sumiyadi
      </p>
    </footer>

    <!-- tutup -->
  </div>
</template>

<style>
.active {
  /* color: #130428 !important; */
}
button.carousel-control-prev {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
}

button.carousel-control-next {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
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

.circle-container {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Agar lingkaran yang keluar tetap rapi */
}

/*  */
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
<!-- <script>
import axios from "axios";

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
let roles = ["Programmer", "UI/UX", "Analyst System"];
let roleIndex = 0;
setInterval(
  () => {
    document.querySelector(".text-capitalize").textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
  },
  roleIndex === roles.length - 1 ? 1800 : 1100
);
</script> -->

<script>
import axios from "axios";

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
    chunkedExperiencesmobile() {
      let result = [];
      for (let i = 0; i < this.experiences.length; i += 1) {
        result.push(this.experiences.slice(i, i + 1));
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
    // Fetching data from the API
    axios
      .get("https://anggiburox.github.io/tes-pro/experiences.json")
      .then((response) => {
        this.experiences = response.data;
        console.log(this.experiences); // Verifikasi data di konsol
      })
      .catch((error) => {
        console.error("Gagal mengambil data!", error);
      });

    // axios
    //   .get("http://127.0.0.1:8000/api/experiences")
    //   .then((response) => {
    //     this.experiences = response.data.data;
    //     console.log(this.experiences); // Log the data to verify it's correctly fetched
    //   })
    //   .catch((error) => {
    //     console.error("There was an error!", error);
    //   });

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
