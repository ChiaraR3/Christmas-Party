<template>
<tr>
    <td><v-text-field label="Name" v-model="localGuest.name"></v-text-field></td>
    <td><v-text-field label="Gift" v-model="localGuest.gift"></v-text-field></td>
    <td><v-text-field label="Confirmed" v-model="localGuest.confirmed"></v-text-field></td>
    <td> 
        <TheButton icon v-show="ifModify" @click="saveModification">
            <v-icon > mdi-checkbox-marked-circle </v-icon>
            </TheButton>
        <TheButton icon  v-show="ifModify" @click="resetMofication">
              <v-icon >mdi-cached</v-icon>
        </TheButton>
        <TheButton text icon @click="remove(localGuest)">
             <v-icon>mdi-thumb-down</v-icon>
        </TheButton>
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
    data(){
        return{
        localGuest: JSON.parse(JSON.stringify(this.guest)),
        }
    },
    methods:{
        remove(guest){
         this.$store.commit('guests/remove', guest)
     },
        resetMofication(){
         this.localGuest = JSON.parse(JSON.stringify(this.guest))
     },
       saveModification(){
            this.$store.commit('guests/modified', this.localGuest)
       }
    },
    computed:{
        ifModify(){
            if(this.guest.name !== this.localGuest.name || this.guest.gift !== this.localGuest.gift || this.guest.confirmed !== this.localGuest.confirmed){
                return true;
            } else {
                return false;
            }
        }
        
    },
    watch:{
        guest(){
            this.resetMofication();
        }
    }
}

</script>

<style>
input{
    color:white;
}

</style>