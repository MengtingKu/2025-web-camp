<script setup>
const tabs = [
  { name: "首頁", path: "/" },
  { name: "部落格", path: "/blog" },
];
</script>

<template>
  <nav class="text-primary-text container font-bold">
    <ul class="flex justify-center">
      <li v-for="tab in tabs" :key="tab.name">
        <RouterLink
          :to="tab.path"
          class="px-5 py-6 text-[28px]"
          :class="{
            'text-theme-blue': $route.path === tab.path,
          }"
        >
          {{ tab.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss"></style>
