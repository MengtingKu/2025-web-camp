<script setup>
import { computed, ref } from "vue";
import { blog } from "@/helper/blog/blogConfig.js";
import { socialList } from "@/helper/footer/socialConfig";
import BlogCard from "@/components/BlogCard.vue";
import RwdImage from "@/components/RwdImage.vue";

const isHelpExpanded = ref(false);
const currentPage = ref(1);

const toggleHelp = () => {
  isHelpExpanded.value = !isHelpExpanded.value;
};

const categoryBlog = computed(() =>
  Object.groupBy(blog, ({ status }) => status === 1),
);

const getIconUrl = (iconName) =>
  new URL(`/src/helper/footer/images/${iconName}.svg`, import.meta.url).href;
</script>

<template>
  <div class="blog">
    <section class="bg-background-light border-divider border-b-[1px]">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <RwdImage
          moSrc="/src/assets/images/alyse-mo.png"
          pcSrc="/src/assets/images/alyse-pc.png"
          alt="alyse wang"
          width="960"
          height="834"
        />
        <div
          class="text-theme-blue flex flex-col justify-center bg-[url(/src/assets/images/banner-bg.png)] bg-center bg-no-repeat object-cover p-6 sm:p-20"
        >
          <h1 class="text-[52px] font-black sm:text-[120px]">BLOG</h1>
          <p class="text-[28px] font-bold">前端工程師 & 職涯諮詢師</p>
        </div>
      </div>
    </section>
    <section class="bg-background-light border-divider border-b-[1px]">
      <div
        v-for="item in categoryBlog.true"
        :key="item.id"
        class="latest-article"
      >
        <BlogCard :item="item" isLatest />
      </div>
    </section>
    <section class="bg-background-light border-divider border-b-[1px]">
      <div class="container pt-16 pb-20 sm:pt-20">
        <div class="mb-10 grid grid-cols-1 gap-x-6 md:grid-cols-3">
          <div class="col-span-1 flex items-stretch">
            <label
              class="text-body-text flex items-center rounded-l-full border border-r-0 bg-white px-3 text-base font-normal"
            >
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </label>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="搜尋你感興趣的文章"
              class="placeholder:text-body-text text-body-text flex-1 rounded-r-full border border-l-0 bg-white py-2 text-base font-normal focus:pl-1 focus:ring-1"
            />
          </div>
        </div>
        <ul class="mb-10 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3">
          <li v-for="item in categoryBlog.false" :key="item.id">
            <BlogCard :item="item" />
          </li>
        </ul>
        <div class="pagination text-body-text flex justify-center px-10 py-2">
          <button type="button" class="previous cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-less-than" />
          </button>
          <ul class="flex">
            <li
              v-for="i in 5"
              :key="i"
              class="cursor-pointer px-4 py-2"
              :class="{ 'text-theme-blue': currentPage === i }"
            >
              {{ i }}
            </li>
            <li class="cursor-pointer p-2">...</li>
          </ul>
          <button class="next cursor-pointer">
            <font-awesome-icon
              icon="fa-solid fa-less-than"
              class="fa-rotate-180"
            />
          </button>
        </div>
      </div>
    </section>
    <footer class="bg-background-light">
      <div class="container hidden sm:block">
        <div class="flex items-center justify-between py-[80px]">
          <h3 class="text-[32px] font-medium">alysewang@hexschool.com</h3>
          <ul class="flex">
            <li
              v-for="social in socialList"
              :key="social.id"
              class="flex items-center"
            >
              <a
                href="javascript:void(0)"
                class="p-[10px]"
                :title="social.icon"
                target="_blank"
              >
                <img
                  :src="getIconUrl(social.icon)"
                  :alt="social.icon"
                  width="24"
                  height="24"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright bg-white text-center font-medium py-6">
        &copy; 2025 Alyse Wang. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss"></style>
