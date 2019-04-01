<template>
  <div class="loading-page">
    <loading :show="loading" :label="label"></loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      label: 'Loading...'
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style>
</style>
