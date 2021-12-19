<template>
  <div>
    <v-img
      max-height="710"
      max-width="1550"
      src="https://cdn.pixabay.com/photo/2017/12/18/18/37/christmas-3026685_960_720.jpg"
    >
      <h1>Christmas Party</h1>
      <nuxt-link :to="switchLocalePath('es')">Español</nuxt-link>
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      <p>
        {{ $t("home1") }}
      </p>
      <p>
        {{ $t("home2") }}
      </p>
      <p>
        {{ $t("home3") }}
      </p>
      <p>{{ $t("home4") }}</p>
      <p>{{ $t("home5") }}</p>
      <TheButton @click="showGuests"><h3>Show me that list</h3></TheButton>
    </v-img>
  </div>
</template>

<script>
export default {
  methods: {
    showGuests() {
      this.$router.push({
        path: "/guests",
      });
    },
  },
};
</script>
<style scoped>
h1 {
  margin-top: 50px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: red;
}
p {
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
h3 {
  color: green;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
