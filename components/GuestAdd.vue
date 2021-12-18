<template>
<v-app class="adding">
<h1> Do you really want to add a new guest? </h1>
<p>Well, here you have...</p>

  <v-form
    ref="form"
    
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="gift"
      :rules="giftRules"
      label="Gift"
      required
    ></v-text-field>

    <v-text-field
      v-model="confirmed"
      :rules="confirmationRules"
      label="Confirmed"
      required
    ></v-text-field>
     
    <v-btn
      color="success"
      class="mr-4"
      @click="saveGuest"
    >
      Save
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset 
    </v-btn>
   
  </v-form>
   </v-app>
</template>

<script>
  export default {
    data: () => ({
     
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      gift: '',
      giftRules: [
        v => !!v || 'Gift is required',
        
      ],
      confirmed: '',
      confirmationRules: [
          v => !!v || 'YES/NO is required'
          
     ],
     
    }),
  computed:{
        guests(){
             return this.$store.state.guests.list
        }
    
    },
   methods:{
       saveGuest(){
           let lastId = -1;
           this.guests.forEach(guest=>{
               if(guest.id>lastId){
                   lastId=guest.id;
               }
           })
           const saveGuest = {
               id: lastId +1,
               name:this.name,
               gift: this.gift,
               confirmed: this.confirmed,
           }
            this.$store.commit('guests/add', saveGuest)
            this.$router.push({path:'/guests'})
       }
       
   }

   }
   
  
</script>

<style scoped>
.adding{
    margin:5px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
h1{
    color:red;;
    text-align:center;
}

</style scoped>