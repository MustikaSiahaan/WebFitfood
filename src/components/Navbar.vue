<template>
  
    <v-app-bar class="pt-0" app color="light-green darken-2" elevation="6" style="padding: 0px 90px">
      <v-toolbar-title>
      <h2 class="white--text">FitFood</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-list class="d-flex align-center light-green darken-2">
        <v-list-item class="white--text" link v-for="(nav,index) in navs" :key="index" :to="nav.route">
          <v-list-title>{{nav.title}}</v-list-title>
        </v-list-item>
      </v-list>
    </v-app-bar>
 
</template>

<script>


export default {
  name: 'Navbar',
  data(){
    return{
      navs:[
        {title:'Home', route:'/'},
        {title:'Menu', route:'menu'},
        {title:'About', route:'about'},
        {title:'Contact', route:'contact'},
        {title:'News', route:'news'},
      ]
    }
  }
};
</script>