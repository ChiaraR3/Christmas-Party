<template>
<GuestsList v-on:click-new-guest="addNewOne" />


</template>

<script>
  export default {
      methods:{
      addNewOne(){
          this.$router.push({
              path:"/guests/add"
          })
      },
      
  }
  }
  </script>
