<template>
  <div>
    <NewsPage
      v-for="(data, index) in getNewsFromState"
      :key="index"
      :news="data"
    />
  </div>
</template>

<script>
import NewsPage from "@/components/NewsPage.vue";

export default {
  name: "News",
  components: {
    NewsPage,
  },
  mounted() {
    this.getNews();
  },
  computed: {
    getNewsFromState() {
      return this.$store.state.news.lists;
    },
  },
  methods: {
    getNews() {
      this.$store.dispatch("news/fetchListNews");
    },
  },
};
</script>
