<script setup>
import { computed } from "vue";
import RwdImage from "@/components/RwdImage.vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
  isLatest: {
    type: Boolean,
    default: false,
  },
});

const statusTag = (status) => {
  switch (status) {
    case 1:
      return "最新文章";
    case 2:
      return "人氣文章";
    default:
      return "";
  }
};
</script>

<template>
  <div class="card" :class="isLatest ? 'md:flex md:items-center' : ''">
    <div class="card-header" :class="isLatest ? 'md:w-1/2' : 'mb-4'">
      <RwdImage
        :moSrc="item.imgUrl_mo"
        :pcSrc="item.imgUrl_pc"
        :alt="item.title"
      />
      <!-- <img
        :src="item.imgUrl"
        :alt="item.title"
        class="h-full w-full object-cover"
      /> -->
    </div>
    <div class="card-body" :class="isLatest ? 'px-3 py-12 md:w-[636px]' : ''">
      <time class="mb-1">{{ item.date }}</time>
      <div class="hash-tag mr-2 flex items-center">
        <a
          v-for="tag in item.tag"
          href="#"
          class="text-theme-blue me-2 text-2xl"
        >
          {{ `${item.status !== 1 ? "#" : ""} ${tag}` }}
        </a>
        <span
          v-if="item.status"
          class="bg-theme-blue rounded-full px-3 py-[6px] font-bold text-white"
        >
          {{ statusTag(item.status) }}
        </span>
      </div>
      <h2 class="text-primary-text mb-2 text-[28px] font-bold">
        {{ item.title }}
      </h2>
      <p class="text-body-text mb-4 line-clamp-2">
        {{ item.content }}
      </p>
      <button type="button" class="btn">閱讀內文</button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
