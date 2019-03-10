<template>
  <div v-html="markdownText"></div>
</template>

<script>
import marked from 'marked'

export default {
  props: ['blok'],
  computed: {
    markdownText() {
      if (typeof this.blok.body !== 'undefined') {
        return marked(this.blok.body)
      }
      return ''
    }
  }
}
</script>

<style>
</style>
