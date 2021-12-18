<template>
<v-row class="guests">
<v-col cols="12">
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
  </br>
    <TheButton class="mx-2" fab dark @click="newGuest">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </TheButton>
</v-col>
</v-row>

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

.guests{
      margin:15px;
     font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
h1{
 
    margin-bottom: 20px;
    color:red;
    text-align:center;
}



</style scoped>