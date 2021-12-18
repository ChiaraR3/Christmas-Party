<template>
<tr>
    <td>{{ guest.name }}</td>
    <td>{{ guest.gift }}</td>
    <td>{{ guest.confirmed }}</td>
    <td><v-btn class="ma-2" text icon @click="remove(guest)">
             <v-icon>mdi-thumb-down</v-icon>
        </v-btn>
    </td>
</tr>
</template>

<script>
export default {
    props:{
        guest: {
            type: Object,
            required: true,
        }
    },
    methods:{
        remove(guest){
         this.$store.commit('guests/remove', guest)
     }
    }
}
</script>