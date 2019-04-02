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

<style>
</style>
