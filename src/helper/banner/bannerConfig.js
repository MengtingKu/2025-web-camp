/**
 * 頁面：Home、Blog
 */
export const banner = {
  home: {
    id: 1,
    state: 1, // 0: 關, 1: 開
    imgUrl_mo: new URL("./images/alyse-mo.png", import.meta.url).href,
    imgUrl_pc: new URL("./images/alyse-pc.png", import.meta.url).href,
    title: "Alyse Wang",
    subTitle: "前端工程師 & 職涯諮詢師",
    content:
      "嗨，我是 Alyse，一名深耕前端技術的工程師。 \n 擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！",
  },
  blog: {
    id: 1,
    state: 1,
    imgUrl_mo: new URL("./images/alyse-mo.png", import.meta.url).href,
    imgUrl_pc: new URL("./images/alyse-pc.png", import.meta.url).href,
    title: "Blog",
    subTitle: "前端工程師 & 職涯諮詢師",
    content: "",
  },
};
