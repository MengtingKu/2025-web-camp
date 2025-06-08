<script setup>
defineProps({
  moSrc: String,
  pcSrc: String,
  alt: String,
  imgClass: {
    type: String,
    default: "w-full h-auto object-cover",
  },
  width: [String, Number],
  height: [String, Number],
  moMax: {
    type: Number,
    default: 640,
  },
});
</script>

<template>
  <picture>
    <source :media="`(max-width: ${moMax}px)`" :srcset="moSrc" />
    <source :media="`(min-width: ${moMax + 1}px)`" :srcset="pcSrc" />
    <img
      :src="pcSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :class="imgClass"
      loading="lazy"
    />
  </picture>
</template>
