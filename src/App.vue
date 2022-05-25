<template>
  <v-app>
    <div>
    <Navbar />
    <router-view/>
      
      <Footer />
    </div>
    <div>
    
    </div>
   
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
export default {
  name: 'App',
  components: {Navbar, Footer},
  data(){
    return{
      navs:[
        {title:'Home', route:'/'},
        {title:'Menu', route:'menu'},
        {title:'About', route:'about'},
        {title:'Contact', route:'contact'},
      ]
    }
  }
};
</script>