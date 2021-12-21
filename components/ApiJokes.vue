<template>
  <div class="joking">
    <h1>{{ jokes.value }}</h1>

    <TheButton> <NuxtLink to="/guests"> Back to work </NuxtLink></TheButton>
      <TheButton @click="anotherOne"> Another one </TheButton>
  </div>
</template>

<script>

export default {
  async fetch() {
    const api = "https://api.chucknorris.io/jokes/random";
    const jokes = await this.$axios.get(api).then((response) => {
      return response.data;
    
    });
     this.jokes = jokes;
  },
  data() {
    return {
      jokes: [],
    };
  },
  mounted(){
    this.$fetch();
  },
  methods:{
    anotherOne (){
      this.$fetch();
    }
  }
};
</script>

<style scoped>
.joking {
  text-align: center;
  margin: 50px;
  color: green;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 50px;
}
</style>
