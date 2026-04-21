<template>
  <div
    class="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
  >
    <svg
      class="absolute top-0 right-0 w-72 h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
      viewBox="0 0 300 400"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          :id="`grad-main-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" :stop-color="gradientColors[0]">
            <animate
              attributeName="stop-color"
              :values="`${gradientColors[0]};${gradientColors[1]};${gradientColors[2]};${gradientColors[0]}`"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" :stop-color="gradientColors[1]">
            <animate
              attributeName="stop-color"
              :values="`${gradientColors[1]};${gradientColors[2]};${gradientColors[0]};${gradientColors[1]}`"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" :stop-color="gradientColors[2]">
            <animate
              attributeName="stop-color"
              :values="`${gradientColors[2]};${gradientColors[0]};${gradientColors[1]};${gradientColors[2]}`"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <polygon
        points="300,0 300,400 180,400 300,200"
        :fill="`url(#grad-main-${id})`"
      />
    </svg>

    <svg
      class="absolute top-0 right-0 w-60 h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
      viewBox="0 0 300 400"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          :id="`grad-second-${id}`"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" :stop-color="gradientColorsSecond[0]">
            <animate
              attributeName="stop-color"
              :values="`${gradientColorsSecond[0]};${gradientColorsSecond[1]};${gradientColorsSecond[2]};${gradientColorsSecond[0]}`"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" :stop-color="gradientColorsSecond[1]">
            <animate
              attributeName="stop-color"
              :values="`${gradientColorsSecond[1]};${gradientColorsSecond[2]};${gradientColorsSecond[0]};${gradientColorsSecond[1]}`"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" :stop-color="gradientColorsSecond[2]">
            <animate
              attributeName="stop-color"
              :values="`${gradientColorsSecond[2]};${gradientColorsSecond[0]};${gradientColorsSecond[1]};${gradientColorsSecond[2]}`"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <polygon
        points="300,0 300,400 200,400 300,250"
        :fill="`url(#grad-second-${id})`"
        opacity="0.7"
      />
    </svg>

    <div class="p-6 relative z-10">
      <h3
        class="text-xl font-bold text-gray-900 mb-2 group-hover:translate-x-3 transition-all duration-300"
        :class="`group-hover:text-${hoverColor}-600`"
      >
        {{ title }}
      </h3>

      <p
        class="text-gray-600 mb-3 leading-relaxed pr-20 group-hover:translate-x-3 transition-all duration-300 delay-75 line-clamp-3"
      >
        {{ description }}
      </p>

      <!-- Teknologi Tags -->
      <TechIcons :technologies="technologies" />

      <!-- <a
        href="#"
        class="text-gray-900 font-semibold inline-flex items-center group-hover:translate-x-3 transition-all duration-300 delay-100 text-sm mt-4"
        :class="`hover:text-${hoverColor}-600`"
      >
        {{ buttonText }}
        <span class="material-symbols-outlined"> chevron_forward </span>
      </a> -->
    </div>
  </div>
</template>

<script setup>
import TechIcons from "./TechIcons.vue";

defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // buttonText: {
  //   type: String,
  //   required: true,
  // },
  hoverColor: {
    type: String,
    default: "purple",
  },
  gradientColors: {
    type: Array,
    default: () => ["#8b5cf6", "#ec4899", "#f97316"],
  },
  gradientColorsSecond: {
    type: Array,
    default: () => ["#7c3aed", "#db2777", "#ea580c"],
  },
  technologies: {
    type: Array,
    default: () => [],
  },
});
</script>
