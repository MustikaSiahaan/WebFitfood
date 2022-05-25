<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="light-green darken-2 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Fitfood web is a website that allows you to better order healthy food, with this website it becomes easier and faster to get your order
        You can find foods that are low in calories and low in fat. And you will also get food full of vitamins and fiber
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong>FitFood</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer",
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  };
</script>