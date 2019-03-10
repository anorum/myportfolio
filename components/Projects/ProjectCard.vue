<template>
  <nuxt-link :to="id">
    <b-row class="h-100 project" :style="{backgroundColor: color}">
      <b-col
        sm="12"
        md="6"
        class="text-md-left text-center mt-4 pl-5 mb-4 justify-content-center align-self-center mt-4 pl-5"
      >
        <h2 class="white text-uppercase">{{ title }}</h2>
        <p class="white">{{ introduction }}</p>
        <div class="float-center">
          <b-button variant="primary">View Project</b-button>
        </div>
      </b-col>
      <b-col sm="12" md="6" class="justify-content-center align-self-center d-flex">
        <b-img rounded :src="thumbnail" class="projectimage align-self-center"/>
      </b-col>
      <div class="card-footer text-right mr-10" style="width:100%">
        <b-badge
          pill
          variant="light"
          v-for="category in categories"
          :key="category"
          class="ml-4"
        >{{ category }}</b-badge>
      </div>
    </b-row>
  </nuxt-link>
</template>

<script>
export default {
  props: [
    'id',
    'title',
    'introduction',
    'categories',
    'thumbnail',
    'color',
    'isExternal',
    'externalLink'
  ]
}
</script>

<style lang="scss">
.projectimage {
  max-width: 75% !important;
}

.white {
  color: white;
}

a:hover {
  text-decoration: none !important;
}
</style>
