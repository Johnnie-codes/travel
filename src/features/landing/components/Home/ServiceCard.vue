<template>  
    <div :class="cardClass" class="flex items-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-200">  
      <div class="text-4xl mr-4">{{ icon }}</div>  
      <div>  
        <h2 class="font-semibold text-xl">{{ title }}</h2>  
        <p class="text-gray-600">{{ description }}</p>  
      </div>  
    </div>  
  </template>  
  
  <script setup>  
  import { defineProps, computed } from 'vue';  
  
  const props = defineProps({  
    title: String,  
    description: String,  
    icon: String,  
    isHighlighted: {  
      type: Boolean,  
      default: false  
    }  
  });  
  
  const cardClass = computed(() => {  
    return props.isHighlighted  
      ? 'bg-white border border-gray-300'  
      : 'bg-[#FFF6F4]';  
  });  
  </script>  
  
  <style scoped>  
  /* Add any additional styles here */  
  </style>