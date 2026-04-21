<template>
  <div>
    <!-- Grid Cards dengan animasi slide -->
    <transition :name="transitionName" mode="out-in">
      <div
        :key="`${selectedYear}-${currentPage}`"
        class="grid md:grid-cols-2 gap-4 mb-8"
      >
        <ExperienceCard
          v-for="(item, index) in experiences"
          :key="`${selectedYear}-${currentPage}-${index}`"
          :id="`${selectedYear}-${currentPage}-${index}`"
          :title="item.title"
          :description="item.description"
          :hoverColor="item.hoverColor"
          :gradientColors="item.gradientColors"
          :gradientColorsSecond="item.gradientColorsSecond"
          :technologies="item.technologies"
          :style="{ animationDelay: `${index * 0.05}s` }"
          class="animate-card"
        />
        <!-- :buttonText="item.buttonText" -->
      </div>
    </transition>

    <!-- Pagination Controls -->
    <Pagination
      v-if="totalPages > 1"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @update:currentPage="handlePageChangeWithAnimation"
    />

    <!-- Empty State -->
    <transition name="fade" mode="out-in">
      <div
        v-if="experiences.length === 0"
        class="text-center py-12"
        key="empty"
      >
        <p class="text-gray-500 text-lg">
          No experiences found for {{ selectedYear }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import ExperienceCard from "./ExperienceCard.vue";
import Pagination from "./Pagination.vue";

const props = defineProps({
  experiences: {
    type: Array,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  selectedYear: {
    type: [Number, String],
    required: true,
  },
});

const emit = defineEmits(["update:currentPage"]);

const transitionName = ref("slide-next");

const handlePageChangeWithAnimation = (page) => {
  if (page > props.currentPage) {
    transitionName.value = "slide-next";
  } else if (page < props.currentPage) {
    transitionName.value = "slide-prev";
  }

  // Delay sedikit agar animasi terlihat
  setTimeout(() => {
    emit("update:currentPage", page);
  }, 10);
};

// Watch untuk perubahan selectedYear
watch(
  () => props.selectedYear,
  (newYear, oldYear) => {
    const newYearNum = Number(newYear);
    const oldYearNum = Number(oldYear);

    if (newYearNum > oldYearNum) {
      transitionName.value = "slide-next";
    } else if (newYearNum < oldYearNum) {
      transitionName.value = "slide-prev";
    }
  },
);
</script>

<style scoped>
/* Animasi slide untuk konten cards */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.4s ease;
  position: relative;
}

/* Animasi untuk next (halaman/tahun berikutnya) */
.slide-next-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

/* Animasi untuk prev (halaman/tahun sebelumnya) */
.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

/* Animasi untuk setiap card */
.animate-card {
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animasi fade untuk empty state */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
