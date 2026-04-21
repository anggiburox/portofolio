<template>
  <div class="w-full md:w-1/4 relative">
    <!-- Desktop Layout (Vertical) -->
    <div class="hidden md:block">
      <!-- Top Navigation Button -->
      <div class="flex justify-start mb-2 pl-8 md:pl-12 lg:pl-24">
        <button
          @click="prevYear"
          :disabled="selectedYearIndex === 0"
          class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300 z-10 relative group"
          :class="{ 'opacity-50 cursor-not-allowed': selectedYearIndex === 0 }"
        >
          <span
            class="material-symbols-outlined text-base md:text-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:text-purple-600"
            :class="{ 'group-hover:text-gray-400': selectedYearIndex === 0 }"
          >
            arrow_upward
          </span>
        </button>
      </div>

      <!-- Years Container Vertical -->
      <div
        class="relative flex justify-start overflow-visible pl-8 md:pl-12 lg:pl-16"
      >
        <div class="relative flex">
          <!-- Konten tahun -->
          <div class="relative z-10">
            <transition :name="transitionName" mode="out-in">
              <div :key="selectedYear" class="relative space-y-6 py-2">
                <YearItem
                  v-for="(year, index) in visibleYears"
                  :key="year"
                  :year="year"
                  :isSelected="Number(selectedYear) === Number(year)"
                  @select="selectYear"
                  :style="{ animationDelay: `${index * 0.05}s` }"
                  class="animate-item"
                />
              </div>
            </transition>
          </div>

          <!-- Garis vertikal di sebelah kanan konten -->
          <div
            class="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-400 rounded-full"
            style="right: -24px"
          ></div>
        </div>
      </div>

      <!-- Bottom Navigation Button -->
      <div class="flex justify-start mt-2 pl-8 md:pl-12 lg:pl-24">
        <button
          @click="nextYear"
          :disabled="selectedYearIndex === availableYears.length - 1"
          class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300 z-10 relative group"
          :class="{
            'opacity-50 cursor-not-allowed':
              selectedYearIndex === availableYears.length - 1,
          }"
        >
          <span
            class="material-symbols-outlined text-base md:text-xl transition-all duration-300 group-hover:translate-y-1 group-hover:text-purple-600"
            :class="{
              'group-hover:text-gray-400':
                selectedYearIndex === availableYears.length - 1,
            }"
          >
            arrow_downward
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Layout (Horizontal) dengan tombol di samping -->
    <div class="block md:hidden">
      <div class="flex items-center justify-center gap-3">
        <!-- Left Navigation Button -->
        <button
          @click="prevYear"
          :disabled="selectedYearIndex === 0"
          class="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300 z-10 relative group flex-shrink-0"
          :class="{ 'opacity-50 cursor-not-allowed': selectedYearIndex === 0 }"
        >
          <span
            class="material-symbols-outlined text-base transition-all duration-300 group-hover:-translate-x-1 group-hover:text-purple-600"
          >
            arrow_back
          </span>
        </button>

        <!-- Years Container Horizontal -->
        <div class="relative flex-1 overflow-hidden">
          <transition :name="mobileTransitionName" mode="out-in">
            <div
              :key="selectedYear"
              class="relative flex justify-center items-center gap-4 py-4 z-10"
            >
              <YearItem
                v-for="(year, index) in visibleYears"
                :key="year"
                :year="year"
                :isSelected="Number(selectedYear) === Number(year)"
                @select="selectYear"
                :style="{ animationDelay: `${index * 0.05}s` }"
                class="animate-item-horizontal"
              />
            </div>
          </transition>

          <!-- Garis horizontal di bawah -->
          <div
            class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full"
          ></div>
        </div>

        <!-- Right Navigation Button -->
        <button
          @click="nextYear"
          :disabled="selectedYearIndex === availableYears.length - 1"
          class="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300 z-10 relative group flex-shrink-0"
          :class="{
            'opacity-50 cursor-not-allowed':
              selectedYearIndex === availableYears.length - 1,
          }"
        >
          <span
            class="material-symbols-outlined text-base transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-600"
          >
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import YearItem from "./YearItem.vue";

const props = defineProps({
  years: {
    type: Array,
    required: true,
  },
  selectedYear: {
    type: [Number, String],
    required: true,
  },
});

const emit = defineEmits(["update:selectedYear"]);

const transitionName = ref("slide-next");
const mobileTransitionName = ref("slide-horizontal-next");

const availableYears = computed(() => props.years);

const selectedYearIndex = computed(() => {
  const currentYear = Number(props.selectedYear);
  return availableYears.value.findIndex((year) => Number(year) === currentYear);
});

const visibleYears = computed(() => {
  const currentIndex = selectedYearIndex.value;
  const years = availableYears.value;

  if (currentIndex === 0) {
    return years.slice(0, 3);
  } else if (currentIndex === years.length - 1) {
    return years.slice(-3);
  } else {
    return years.slice(currentIndex - 1, currentIndex + 2);
  }
});

const selectYear = (year) => {
  emit("update:selectedYear", year);
};

const prevYear = () => {
  if (selectedYearIndex.value > 0) {
    transitionName.value = "slide-prev";
    mobileTransitionName.value = "slide-horizontal-prev";
    const prevYearValue = availableYears.value[selectedYearIndex.value - 1];
    selectYear(prevYearValue);
  }
};

const nextYear = () => {
  if (selectedYearIndex.value < availableYears.value.length - 1) {
    transitionName.value = "slide-next";
    mobileTransitionName.value = "slide-horizontal-next";
    const nextYearValue = availableYears.value[selectedYearIndex.value + 1];
    selectYear(nextYearValue);
  }
};
</script>

<style scoped>
/* ========== DESKTOP ANIMATIONS (Vertical) ========== */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.3s ease;
  position: relative;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.animate-item {
  animation: fadeInUp 0.4s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== MOBILE ANIMATIONS (Horizontal) ========== */
.slide-horizontal-next-enter-active,
.slide-horizontal-next-leave-active,
.slide-horizontal-prev-enter-active,
.slide-horizontal-prev-leave-active {
  transition: all 0.3s ease;
  position: relative;
}

.slide-horizontal-next-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-horizontal-next-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-horizontal-prev-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-horizontal-prev-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.animate-item-horizontal {
  animation: fadeInRight 0.4s ease forwards;
  opacity: 0;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(-15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Hover effect untuk tombol */
button:active:not(:disabled) {
  transform: scale(0.95);
}

/* Responsive adjustments untuk mobile */
@media (max-width: 767px) {
  .animate-item-horizontal {
    flex: 0 1 auto;
    text-align: center;
  }

  /* Tahun di mobile jadi lebih kecil */
  :deep(.text-base) {
    font-size: 1rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .pl-8 {
    padding-left: 2rem;
  }
  .pl-12 {
    padding-left: 3rem;
  }
}

@media (min-width: 1024px) {
  .pl-16 {
    padding-left: 4rem;
  }
}
</style>
