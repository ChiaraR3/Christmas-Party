<template>
<v-row class="guests">
<v-col cols="12">
<h1>Your guests</h1>
<div class="filter">
<v-text-field label="Filter by..." filled rounded dense v-model="filterBy"></v-text-field>
<TheButton v-model="orderGuests"> Order them alphabetically </TheButton>
</div>
 <v-simple-table dark>
    <template  v-slot:default>
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
        <GuestTd v-for="guest in guestsFiltered" :key="guest.id" :guest="guest"/>
      
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
      data() {
          return {
              filterBy:'',
              }
      },
      computed:{
        guests(){
             return this.$store.state.guests.list
        },
        guestsFiltered(){
           
            return this.guests.filter(guest=>{
                if(guest.id.toString() === this.filterBy || guest.name.includes(this.filterBy) || guest.gift.includes(this.filterBy)|| guest.confirmed.includes(this.filterBy)){
                    return true
                } else {
                    return false
                }
            })
        },
        guestsOrdered(){
           
         let orderGuests = JSON.parse(JSON.stringify(this.guests));
         return orderGuests.sort((a, b) => (a.name > b.name) ? 1 : -1)}
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