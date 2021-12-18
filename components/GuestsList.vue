<template>
<div class="guests">
<h1> GUESTS</h1>
 <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Gift
          </th>
          <th class="text-left">
            Confirmed
          </th>
          <th class="text-left">
            Think about it...
          </th>
        </tr>
      </thead>
      <tbody>
        <GuestTd v-for="guest in guests" :key="guest.id" :guest="guest"/>
      
     </tbody>
    
    </template>
  </v-simple-table>   
    <v-btn
      class="mx-2"
      fab
      dark
     
      @click="newGuest"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>

</div>

</template>

<script>
  export default {
      computed:{
        guests(){
             return this.$store.state.guests.list
        }
    
    },
    methods:{
     newGuest(){
        this.$emit('click-new-guest')
     },
     
    },
  }
</script>

<style scoped>

div{
      margin:15px;
     font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
h1{
    margin: 5px;
    color:red;
    text-align:center;
}


</style scoped>