<template lang="pug">
aside.aside
  .aside__hr.w-full
  p.aside__title.text-3xl.mb-2 Latest
  a.aside__latest-item(v-for="news in latestNews.get()", :key="news.id", :href="'/news/' + news.id")
    .aside__latest-item_image
      img(v-if="news.imgGallery" :src="news.imgSource[0]")
      img(v-else :src="news.imgSource")
    .aside__latest-item_caption
      h3.uppercase.mb-1.text-xs {{ news.type }}
      p.aside__latest-item_caption-title.text-sm {{ news.title }}
  h3.mt-4.aside__view-all
    a(href="/") View all latest news
</template>
<script lang="ts" setup>
import { latestNews } from "@src/store/newsStore";
</script>
<style lang="scss" scoped>
.aside {
  padding-left: 10px;
  &__view-all {
    color: $text-color;
    &:hover {
      color: $main-blue;
    }
  }
  &__latest-item {
    position: relative;
    display: flex;
    border-bottom: 1px solid #D0D0D2;
    padding: 20px 0 15px 0;
    overflow: visible;
    margin-right: 14px;
    &:hover {
      border-bottom-color: $main-blue;
      &:after {
        border-color: $main-blue;
      }
      .aside__latest-item_caption-title {
        color: $main-blue;
      }
    }
    &:after {
      content: ' ';
      position: absolute;
      display: block;
      width: 100%;
      height: 20px;
      bottom: -1px;
      left: 0;
      z-index: 0;
      border-right: 1px solid #D0D0D2;
      transform-origin: bottom left;
      transform: skew(-31deg, 0deg);
    }
    &_caption {
      padding: 0 0 0 15px;
      width: 70%;
      &-title {
        font-family: "Titillium Web", sans-serif;
        font-weight: 700;
        color: $text-color;
      }
    }
    &_image {
      position: relative;
      min-height: 52px;
      padding-top: 0;
      width: 30%;
      align-self: flex-start;
      &:after {
        content: '';
        display: block;
        width: 12px;
        height: 18px;
        border-left: 12px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 18px solid #FFFFFF;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
  &__title {
    font-family: "Bebas Neue", cursive;
    font-weight: normal;
    color: $text-color;
  }
  &__hr {
    padding-top: 20px;
    border-top: 10px solid rgb(29 78 216);
    position: relative;
    &:before {
      content: ' ';
      position: absolute;
      display: block;
      width: 10px;
      height: 10px;
      top: -10px;
      right: -5px;
      background: #FFFFFF;
      -webkit-transform: skew(-30deg, 0deg);
      transform: skew(-30deg, 0deg);
    }
  }
}
</style>