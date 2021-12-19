<template>
  <v-btn v-bind="$attrs" @click="$emit('click', $event)"><slot></slot></v-btn>
</template>
<script>
export default {
  inheritAttrs: false,
};
</script>
