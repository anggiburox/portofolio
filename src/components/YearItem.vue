<template>
  <div
    @click="handleSelect"
    class="relative flex items-center gap-2 cursor-pointer group md:gap-4"
  >
    <!-- Dot indicator -->
    <div class="relative z-10">
      <div
        class="w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300"
        :class="dotClass"
      ></div>
    </div>

    <!-- Year text -->
    <div
      class="text-sm md:text-xl lg:text-2xl font-bold transition-all duration-300 text-center"
      :class="yearClass"
    >
      {{ year }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  year: {
    type: [Number, String],
    required: true,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["select"]);

const dotClass = computed(() => {
  return props.isSelected
    ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-150 shadow-lg"
    : "bg-gray-400 group-hover:bg-purple-500";
});

const yearClass = computed(() => {
  return props.isSelected
    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
    : "text-gray-500 group-hover:text-purple-600";
});

const handleSelect = () => {
  emit("select", props.year);
};
</script>
