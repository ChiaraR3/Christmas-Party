<template>
<div>
  <v-img
   max-height="710"
  max-width="1550"
  src="https://cdn.pixabay.com/photo/2017/12/18/18/37/christmas-3026685_960_720.jpg">
  <h1>Christmas Party</h1>
  <p>This year Christmas has also arrived and so have the gatherings among friends, family, co-workers... and with them, the gifts.</p>
  <p>We know that this time, no, you are not going to organize any party.</p>
  <p> But, as we know each other, here is a small list of your guests to keep under control the gift ideas and confirmations. </p>
   <p>You can also remove people from the list, don't worry. </p>
    <p> Happy Holidays! </p>
   <TheButton @click="showGuests"><h3> Show me that list </h3></TheButton>
  </v-img>
 
 
  </div>
  
  
</template>


<script>
  export default {
      methods:{
      showGuests(){
          this.$router.push({
              path:"/guests"
          })
      },
  }
  }
  </script>
<style scoped>
h1{
    margin-top:50px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:red;
}
p{
     margin-top:20px;
     margin-bottom:10px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
h3{
    color:green; 
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style scoped>