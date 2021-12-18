<template>
<tr>
    <td><input type="text" v-model="localGuest.name"/></td>
    <td><input type="text" v-model="localGuest.gift"/></td>
    <td><input type="text" v-model="localGuest.confirmed"/></td>
    <td> 
        <v-btn icon v-show="ifModify" @click="saveModification">
            <v-icon > mdi-checkbox-marked-circle </v-icon>
            </v-btn>
        <v-btn icon  v-show="ifModify" @click="resetMofication">
              <v-icon >mdi-cached</v-icon>
        </v-btn>
        <v-btn class="ma-2" text icon @click="remove(localGuest)">
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