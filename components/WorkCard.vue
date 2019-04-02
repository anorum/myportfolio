<template>
  <div>
    <b-card :title="blok.jobtitle" :sub-title="blok.timeline">
      <b-card-text>
        <component :key="blok._uid" v-for="blok in blok.content" :is="blok.component" :blok="blok"></component>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
</style>
