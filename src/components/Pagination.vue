<template>
  <div class="flex justify-center items-center gap-4 mt-8">
    <button
      @click="previousPage"
      :disabled="currentPage === 1"
      class="px-4 py-2 rounded-lg bg-white text-gray-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300 shadow-sm"
    >
      <span class="material-symbols-outlined"> arrow_back </span>
    </button>

    <div class="flex gap-2">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        class="w-10 h-10 rounded-lg font-semibold transition-all duration-300"
        :class="pageButtonClass(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 rounded-lg bg-white text-gray-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all duration-300 shadow-sm"
    >
      <span class="material-symbols-outlined"> arrow_forward </span>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:currentPage"]);

const pageButtonClass = (page) => {
  return props.currentPage === page
    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
    : "bg-white text-gray-700 hover:bg-gray-100";
};

const previousPage = () => {
  if (props.currentPage > 1) {
    emit("update:currentPage", props.currentPage - 1);
  }
};

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit("update:currentPage", props.currentPage + 1);
  }
};

const goToPage = (page) => {
  emit("update:currentPage", page);
};
</script>
