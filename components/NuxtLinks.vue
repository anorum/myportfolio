<template>
  <nuxt-link :to="blok.path">
    <h5>{{ blok.linktitle }}</h5>
  </nuxt-link>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
h5 {
  color: white;
}

h5:hover {
  color: #d0d0d0;
}
</style>
