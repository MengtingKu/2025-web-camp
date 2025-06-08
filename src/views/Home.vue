<script setup>
import Header from "@/components/Header.vue";
import HorizontalCard from "@/components/HorizontalCard.vue";
import BlogCard from "@/components/BlogCard.vue";
import Case from "@/components/Case.vue";
</script>

<template>
  <div class="home">
    <section>banner</section>
    <section class="specialty container">
      <h2>專業服務與方案</h2>
      <div class="flex flex-col">
        <HorizontalCard />
      </div>
      <p>聯繫我取得更多資訊</p>
    </section>
    <section class="blog_featured container">
      <h2>部落格精選</h2>
      <div class="flex flex-col">
        <!-- <BlogCard /> -->
      </div>
    </section>
    <section class="container">
      <h2>職涯諮詢成功案例</h2>
      <div class="book_consultation">
        <img src="" alt="assessor" />
        <div class="flex">
          <div>
            <p>
              在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效突破原有的舒適圈。
            </p>
          </div>
          <div>
            <p>期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
            <button type="button">立即預約諮詢</button>
          </div>
        </div>
        <div class="flex bg-[#F5F5F5]">
          <Case />
        </div>
      </div>
    </section>
    <section class="flex">
      <img src="" alt="my picture" />
      <div class="subscribe_epaper">
        <h3>訂閱電子報</h3>
        <p class="text-5">立即訂閱，搶先掌握前端 x 職涯的獨家資訊！</p>
        <input
          class="rounded-lg border-2 border-[#E5E5E5] p-2"
          type="text"
          placeholder="請輸入您的大名"
          aria-label="Please enter your name"
        />
        <input
          class="rounded-lg border-2 border-[#E5E5E5] p-2"
          type="email"
          placeholder="請輸入您的電子信箱"
          aria-label="Please enter your email address"
        />
      </div>
    </section>
    <footer class="container">
      <h3>與我聯繫</h3>
    </footer>
  </div>
</template>

<style scoped lang="scss"></style>
