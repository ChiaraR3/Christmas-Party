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
            Present
          </th>
          <th class="text-left">
            Confirmed
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="guest in guests"
          :key="guest.name"
        >
          <td>{{ guest.name }}</td>
          <td>{{ guest.present }}</td>
           <td>{{ guest.confirmed }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>

</template>

<script>
  export default {
    data () {
      return {
        guests: [
          {
            name: 'Frank',
            present: 'bottle of wine',
            confirmed: 'No',
          },
          {
            name: 'Adrian',
            present: 'Dixit',
            confirmed: 'Yes',
          },
          {
            name: 'Paulette',
            present: 'photo book',
            confirmed:'No',
          },
          {
            name: 'Rafael',
            present: 'Call of duty',
            confirmed: 'Yes',
          },
        ],
      }
    },
  }
</script>

<style>

div{
      margin:15px;
     font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
h1{
    margin: 5px;
    color:red;
    text-align:center;
}


</style>