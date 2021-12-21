<template>
  <v-app class="adding">
    <h1>Do you really want to add a new guest?</h1>
    <p>Well, if you insist...</p>

    <v-form ref="form" v-model="valid"  >
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

      <TheButton color="success" class="mr-4" :disabled="!valid"  @click="saveGuest">
        Save
      </TheButton>

      <TheButton color="error" class="mr-4" @click="reset"> Reset </TheButton>
    </v-form>

   <div class="back">
    <TheButton> <NuxtLink to="/guests"> Nope, just kidding</NuxtLink></TheButton>
  </div>

  </v-app>
 
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
     
    ],
    gift: "",
    giftRules: [(v) => !!v || "Gift is required"],
    confirmed: "",
    confirmationRules: [(v) => !!v || "YES/NO is required"],
  }),
  computed: {
    guests() {
      return this.$store.state.guests.list;
    },
     
  },
  methods: {
    saveGuest() {
      let lastId = -1;
      this.guests.forEach((guest) => {
        if (guest.id > lastId) {
          lastId = guest.id;
        }
      });
      const saveGuest = {
        id: lastId + 1,
        name: this.name,
        gift: this.gift,
        confirmed: this.confirmed,
      };
      this.$store.commit("guests/add", saveGuest);
      this.$router.push({ path: "/guests" });
    },
    reset() {
      this.$refs.form.reset();
    },
    
  },
   
}
</script>

<style scoped>
.adding {
  margin: 5px;
  margin-left: 50px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  width: 80%;
  display: center;
}
h1 {
  color: red;
  text-align: center;
}
.back{
  margin-top:50px;
}
</style>
