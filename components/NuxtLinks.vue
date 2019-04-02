<template>
  <nuxt-link :to="blok.path">{{ blok.linktitle }}</nuxt-link>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
</style>
