<template>
<v-row class="guests">
<v-col cols="12">
<h1>Your guests</h1>
<div class="filter">
<v-text-field label="Filter by..." filled rounded dense v-model="filterBy"></v-text-field>
</div>
<div class="add">
  <TheButton class="mx-2" rounded dark @click="newGuest">
      <v-icon dark>
        mdi-plus
      </v-icon>Add new
    </TheButton>
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
        <GuestTd v-for="guest in guestsOrdered" :key="guest.id" :guest="guest"/>
      </tbody>
    </template>
  </v-simple-table>   
  
 <p>I can't go on, tell me a joke </p>
    <NuxtLink to="guests/joke">Please</NuxtLink>
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
         return this.guestsFiltered.sort((a, b) => (a.name > b.name) ? 1 : -1)}
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
.filter{
  height:12%;
}
.add{
    margin-bottom:5px;
    font-size:5px;
}
p{
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-top:20px;
  color:green;
}
</style scoped>