<template>
  <v-container class="item">
        <v-row>
            <v-col lg="12">
            <v-card class="mx-auto" max-width="800">
                <v-img class="white--text align-end" height="200px"
                :src="news.urlToImage" />
            <v-card-title class="title">{{ news.title }}</v-card-title>
            <v-card-text class="text--primary">
                <div class="author">{{ news.author }}</div>     
            </v-card-text>
            </v-card>    
            </v-col>
            
        </v-row>
  </v-container>

</template>

<script>
export default {
  name: "NewsPage",
  props: {
    news: Object,
  },
};
</script>

<style scoped>
.item{
  margin-top: 100px;
}
</style>>


