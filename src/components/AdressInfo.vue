<template>
    <div class="container">
       <h2>{{this.name.location}}</h2>
       <p>{{this.name.adress}}</p>
       <iframe :src="this.name.google_maps" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
     </div>
   
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AdressInfo',
  data(){
    return{
      name: this.$route.params.adress,
      title:"AdressInfo"
    }
  },

  mounted() {
    this.$store.dispatch('loadGames')
  }, 
}
    
</script>

<div class="col-md-12" v-for="(product,index) in products" :key="index">
     <div v-if="proId == product.productId">
      <h1>{{product.productTitle}}</h1>
      <img :src="product.image" class="img-fluid">
     </div>
    </div>
///



