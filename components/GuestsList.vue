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
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="guest in guests"
          :key="guest.id"
        >
          <td>{{ guest.name }}</td>
          <td>{{ guest.gift }}</td>
          <td>{{ guest.confirmed }}</td>
        </tr>
     </tbody>
    
    </template>
  </v-simple-table>   
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
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
    data () {
      return {
        guests: [
          {
            id:1,
            name: 'Frank',
            gift: 'bottle of wine',
            confirmed: 'No',
          },
          {
            id:2,
            name: 'Adrian',
            gift: 'Dixit',
            confirmed: 'Yes',
          },
          {
            id:3,
            name: 'Paulette',
            gift: 'photo book',
            confirmed:'No',
          },
          {
            id:4,
            name: 'Rafael',
            gift: 'Call of duty',
            confirmed: 'Yes',
          },
        ],
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