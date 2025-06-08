<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="bg-background-light">
    <Header />
    <main class="layout-content relative overflow-hidden">
      <Suspense>
        <template #default>
          <RouterView v-slot="{ Component }">
            <transition name="route-fade" mode="out-in">
              <component :is="Component" :key="$route.path" />
            </transition>
          </RouterView>
        </template>
        <template #fallback>
          <div class="loading">Loading...</div>
        </template>
      </Suspense>
    </main>
  </div>
</template>

<style scoped lang="scss">
.route-fade-enter-active,
.route-fade-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  position: absolute; /* 確保過渡元素可以正確定位 */
  width: 100%;
}

.route-fade-enter-from {
  opacity: 0;
  transform: translateX(30px); /* 從右側滑入 */
}

.route-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px); /* 向左側滑出 */
}
</style>
