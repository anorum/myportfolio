<template>
  <nuxt-link :to="blok.path">
    <h6>{{ blok.linktitle }}</h6>
  </nuxt-link>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
h6 {
  color: white;
}

h6:hover {
  color: #d0d0d0;
}
</style>
