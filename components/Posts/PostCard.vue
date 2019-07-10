<template>
  <nuxt-link :to="'blog/' + id" class="blog">
    <b-row class="blog-post h-100">
      <b-col class="mt-4 mb-4" sm="12" md="6">
        <div class="blog-image" :style="{backgroundImage: 'url('+ image +')'}"></div>
      </b-col>
      <b-col sm="12" md="6" class="justify-content-center blog-content mt-4 mb-4">
        <div>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
      </b-col>
    </b-row>
  </nuxt-link>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'image', 'body']
}
</script>

<style lang="scss">
.blog-post {
  min-height: 50vh;
}

.blog-image {
  background-size: cover;
  width: 100%;
  height: 100%;
  padding-bottom: 34%;
  border-radius: 4px;
  background-size: cover;
  background-position: 50% 50%;
  flex-shrink: 0;
  box-sizing: border-box;
}

.blog-content {
  display: flex;
  flex-direction: column;
}

.blog-content h2 {
  color: #202020;

  &:hover {
    color: #3b404d;
  }
}

.blog-content p {
  color: #707070;
}
</style>
