<template lang="pug">
.grid.grid-cols-4.gap-5
  NewsCard(v-for="news in Object.values($newsList)" :key="news.id" :newsInfo="news" @click="goToNews(news.id)")
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { newsList } from "@src/store/newsStore";
import { useStore } from '@nanostores/vue';
import NewsCard from "@src/components/NewsCard.vue";
import type { newsInfo } from "@src/types/entities/newsInfo";

const $newsList = useStore(newsList);

const goToNews = (id: number) => {
  window.location.href = "/news/" + id;
};
</script>