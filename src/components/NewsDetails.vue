<template lang="pug">
.details__wrapper
  h3.uppercase.mb-4.text-xs {{ currentNews.type }}
  h1.details__title.text-4xl.mb-2 {{ currentNews.title }}
  p.details__time.text-xs.mb-2 {{ newsCreationDate }}
  .details__tags-list.mb-8
    .details__tags-list-item.text-xs(v-for="tag in currentNews.tags" :key="tag") {{ tag }}
  .details__content-wrapper
    .details__content
      VideoPlayer.mb-6(v-if="currentNews.videoSource", :videoInfo="{ src: currentNews.videoSource, poster: currentNews.imgSource }")
      ImageSlider.mb-6(v-else-if="currentNews.imgGallery", :images="currentNews.imgSource")
      .details__image.mb-6(v-else)
        img(:src="currentNews.imgSource" alt="News Image")
      p.details__subtitle.mb-3.text-lg {{ currentNews.subtitle }}
      .details__description
        p {{ currentNews.description }}
    NewsAside/
</template>
<script lang="ts" setup>
import { getNewsItem } from "@src/store/newsStore";
import NewsAside from "@src/components/NewsAside.vue";
import ImageSlider from "@src/components/ImageSlider.vue";
import VideoPlayer from "@src/components/VideoPlayer.vue";

interface IProps {
  newsId: string;
}
const props = withDefaults(defineProps<IProps>(), {
  newsId: ""
});

const currentNews = getNewsItem(+props.newsId - 1);
const options = { day: 'numeric', month: 'long', year: 'numeric' };
const newsCreationDate = new Date(currentNews.createdAt).toLocaleDateString("en-US", options);
</script>
<style lang="scss" scoped>
.details {
  &__subtitle {
    font-family: "Titillium Web", sans-serif;
    color: $main-blue;
  }
  &__title {
    font-family: "Bebas Neue", cursive;
    font-weight: bold;
    color: #15151E;
    letter-spacing: 0.25px;
  }
  &__time {
    color: #949498;
  }
  &__tags-list {
    display: flex;
    &-item {
      padding: 10px;
      margin-right: 5px;
      color: $main-blue;
      border: 1px solid $main-blue;
    }
  }
  &__image {
    width: 100%;
    position: relative;
    &:after {
      z-index: 2;
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-left: 24px solid transparent;
      border-right: 0px solid transparent;
      border-bottom: 36px solid $white;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  &__content {
    padding-right: 10px;
    &-wrapper {
      display: grid;
      grid-template-columns: 70% 30%;
    }
  }
}
</style>