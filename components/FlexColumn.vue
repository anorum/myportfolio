<template>
  <b-col
    :cols="blok.col"
    :md="blok.md"
    :lg="blok.lg"
    :sm="blok.sm"
    :xl="blok.xl"
    :class="blok.align"
  >
    <component :key="blok._uid" v-for="blok in blok.body" :is="blok.component" :blok="blok"></component>
  </b-col>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
</style>
