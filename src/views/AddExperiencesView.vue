<template lang="">
  <div>
    <form @submit.prevent="addExperiences">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="title"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="description"
          v-model="description"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="foto" class="form-label">Foto</label>
        <input
          type="file"
          class="form-control"
          id="foto"
          @change="handleFile"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div v-if="success" class="alert alert-success mt-3" role="alert">
      Data berhasil disimpan
      <button type="button" class="close" @click="closeAlert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div v-if="error" class="alert alert-danger mt-3" role="alert">
      Data gagal disimpan, silahkan coba kembali
      <button type="button" class="close" @click="closeAlert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      description: "",
      foto: null,
      success: false,
      error: false,
    };
  },
  methods: {
    handleFile(e) {
      this.foto = e.target.files[0];
    },
    addExperiences() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("foto", this.foto);

      axios
        .post("http://127.0.0.1:8000/api/experiences", formData)
        .then((response) => {
          this.success = true;
          this.error = false;

          // Reset form data after successful submission
          this.title = "";
          this.description = "";
          this.foto = null;

          // Reset the file input display
          const fileInput = document.getElementById("foto");
          if (fileInput) {
            fileInput.value = "";
          }

          // Close the alert after 3 seconds
          setTimeout(() => {
            this.success = false;
          }, 3000); // Close success alert after 3 seconds
        })
        .catch((error) => {
          this.success = false;
          this.error = true;
          console.log("Error message:", error.message);

          // Handle alert visibility for errors
          setTimeout(() => {
            this.error = false;
          }, 3000); // Close error alert after 3 seconds

          if (error.response) {
            console.log("Error response:", error.response.data);
            console.log("Error status:", error.response.status);
          } else if (error.request) {
            console.log("Error request:", error.request);
          } else {
            console.log("Error:", error);
          }
        });
    },
    closeAlert() {
      this.success = false;
      this.error = false;
    },
  },
};
</script>

<style lang=""></style>
