<template>
  <GuestsList v-on:click-new-guest="addNewOne" v-on:click-jokes="newJokes" />
</template>

<script>
export default {
  methods: {
    addNewOne() {
      this.$router.push({
        path: "/guests/add",
      });
    },
    newJokes() {
      this.$router.push({
        path: "/guests/joke",
      });
    },
  },
};
</script>
