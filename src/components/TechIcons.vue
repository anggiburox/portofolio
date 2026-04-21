<template>
  <div class="flex flex-wrap gap-2 mt-3">
    <div
      v-for="tech in technologies"
      :key="tech"
      class="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-lg text-xs font-medium"
      :class="techClass(tech)"
    >
      <img :src="getTechIcon(tech)" :alt="tech" class="w-4 h-4" />
      <span>{{ getTechName(tech) }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  technologies: {
    type: Array,
    required: true,
  },
});

// Mapping teknologi ke icon dan nama
const techMapping = {
  php: {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "text-blue-600 bg-blue-50",
  },
  laravel: {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    color: "text-red-600 bg-red-50",
  },
  codeigniter: {
    name: "CodeIgniter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
    color: "text-orange-600 bg-orange-50",
  },
  mysql: {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "text-blue-600 bg-blue-50",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    color: "text-purple-600 bg-purple-50",
  },
  tailwind: {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "text-teal-600 bg-teal-50",
  },
  wordpress: {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    color: "text-blue-600 bg-blue-50",
  },
  vue: {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    color: "text-green-600 bg-green-50",
  },
  postman: {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    color: "text-orange-600 bg-orange-50",
  },
  livewire: {
    name: "Livewire",
    icon: "https://raw.githubusercontent.com/livewire/livewire/main/art/logo.svg",
    color: "text-pink-600 bg-pink-50",
  },
  filament: {
    name: "Filament",
    icon: "https://mintcdn.com/filament-34a8cf01/IXEGm3ksDuq2LnU2/logo/light.svg?fit=max&auto=format&n=IXEGm3ksDuq2LnU2&q=85&s=5a2603a4ad2870810a4f2b249f765d56",
    color: "text-yellow-600 bg-yellow-50",
  },
  xendit: {
    name: "Xendit",
    icon: "https://www.xendit.co/wp-content/uploads/2024/04/logo-xendit-2023.svg",
    color: "text-purple-600 bg-purple-50",
  },
};

const getTechIcon = (tech) => {
  return (
    techMapping[tech]?.icon ||
    "https://img.icons8.com/ios-filled/50/000000/code.png"
  );
};

const getTechName = (tech) => {
  return (
    techMapping[tech]?.name || tech.charAt(0).toUpperCase() + tech.slice(1)
  );
};

const techClass = (tech) => {
  return techMapping[tech]?.color || "text-gray-600 bg-gray-100";
};
</script>
