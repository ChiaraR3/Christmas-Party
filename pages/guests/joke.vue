<template>
<div class="joking">
    
    <h1> {{ jokes.value }}</h1>
     
 <TheButton> <NuxtLink to="/guests"> Back to work </NuxtLink></TheButton>
 </div>
 </template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
     const api =  'https://api.chucknorris.io/jokes/random'
    const jokes = await axios.get(api).then((response)=>{
        return response.data
        console.log(response)
    })
    return { jokes }
  },
  data(){
      return{
          jokes:[]
      }
  }
}
</script>

<style scoped>
.joking{
    text-align:center;
    margin:50px;
    color:greeen;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
h1{
    margin-bottom:50px;
}
</style scoped>

    
   