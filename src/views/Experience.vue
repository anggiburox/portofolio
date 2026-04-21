<template>
  <div class="min-h-screen bg-gray-50 py-20 px-4" id="experience">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          My Experience Journey
        </h2>
        <p class="text-gray-600 text-lg">
          Browse through my professional journey by year
        </p>
      </div>

      <!-- Timeline Layout -->
      <div class="relative flex flex-col md:flex-row">
        <!-- Year Navigation Component -->
        <YearNavigation
          :years="availableYears"
          :selectedYear="selectedYear"
          @update:selectedYear="handleYearChange"
        />

        <!-- Right Side: Experience Cards -->
        <div class="w-full md:w-4/4">
          <ExperienceGrid
            :experiences="paginatedExperiences"
            :currentPage="currentPage"
            :totalPages="totalPages"
            :selectedYear="selectedYear"
            @update:currentPage="currentPage = $event"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExperienceGrid from "@/components/ExperienceGrid.vue";
import YearNavigation from "@/components/YearNavigation.vue";
import { experiencesData } from "@/utils/experiencesData";
import { ref, computed } from "vue";

// State
const selectedYear = ref(2019);
const currentPage = ref(1);
const itemsPerPage = 4;

// Computed - UBAH INI
const availableYears = computed(() => {
  // Konversi ke Number agar konsisten
  return Object.keys(experiencesData)
    .map(Number) // Tambahkan ini
    .sort((a, b) => a - b);
});

const filteredExperiences = computed(() => {
  // Pastikan selectedYear.value adalah Number
  return experiencesData[selectedYear.value] || [];
});

const totalPages = computed(() => {
  return Math.ceil(filteredExperiences.value.length / itemsPerPage);
});

const paginatedExperiences = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredExperiences.value.slice(start, end);
});

// Methods
const handleYearChange = (year) => {
  selectedYear.value = year;
  currentPage.value = 1;
};
</script>
