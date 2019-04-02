<template>
    <div class="container">
       <h2>{{this.name.location}}</h2>
       <p>{{this.name.adress}}</p>
       <iframe :src="this.name.google_maps" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
     </div>
</template>

<script>

export default {
  name: 'AdressInfo',
  data(){
    return{
      name: this.$route.params.adress,
      title:"AdressInfo"
    }
  },
}   
</script>




