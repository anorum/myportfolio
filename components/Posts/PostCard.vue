<template>
  <nuxt-link :to="id">
    <div class="blogpost">
      {{ id }}
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
      {{ image }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'image', 'body']
}
</script>

<style lang="scss">
.blogpost {
  border-radius: 5px;
}
</style>
