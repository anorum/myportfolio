<template>
  <b-row :align-v="blok.verticalAlign">
    <component :key="blok._uid" v-for="blok in blok.Columns" :is="blok.component" :blok="blok"></component>
  </b-row>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
</style>
