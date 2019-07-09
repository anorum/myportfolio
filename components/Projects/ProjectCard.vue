<template>
  <nuxt-link :to="id">
    <b-row class="h-100 project" :style="{backgroundColor: color}">
      <b-col
        sm="12"
        md="6"
        class="text-md-left text-center mt-4 mb-4 justify-content-center align-self-center mt-4"
      >
        <h2 class="white text-uppercase mb-4">{{ title }}</h2>
        <p class="white">{{ introduction }}</p>
        <div class="float-center mt-4 text-center" :style="cssProps">
          <b-button variant="primary" class="projectbutton">View Project</b-button>
        </div>
      </b-col>
      <b-col
        sm="12"
        md="6"
        class="justify-content-center align-self-center d-flex projectimagecontainer"
      >
        <b-img rounded :src="thumbnail" class="projectimage align-self-center" />
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
import shadeColor from '~/mixins/myMixins.js'
import getTintedColor from '~/mixins/myMixins.js'

export default {
  mixins: [shadeColor, getTintedColor],
  props: [
    'id',
    'title',
    'introduction',
    'categories',
    'thumbnail',
    'color',
    'isExternal',
    'externalLink'
  ],
  computed: {
    cssProps() {
      return {
        '--btn-color': this.shadeColor(this.color, -25),
        '--btn-color-darkened': this.getTintedColor(this.color, -25),
        '--btn-color-darkened-hover': this.getTintedColor(this.color, -100)
      }
    }
  }
}
</script>

<style lang="scss">
.project:hover {
  .projectimage {
    max-width: 85% !important;
  }
}
.projectimage {
  max-width: 75% !important;
  transition: all 0.3s;
  margin: 40px;
}

@media (max-width: 992px) {
  .projectimage {
    margin: 40px 40px 40px 40px;
  }
}

@media (max-width: 767px) {
  .projectimage {
    margin: 40px 40px 0 40px;
  }
}

.white {
  color: white;
}

a:hover {
  text-decoration: none !important;
}

.projectimagecontainer {
  order: -1;
}

.projectbutton {
  background-color: var(--btn-color-darkened);
  border: 1px solid var(--btn-color-darkened);
  width: 250px;
  transition: all 0.3s;
}

.projectbutton:hover {
  background-color: var(--btn-color-darkened-hover);
  border: 1px solid var(--btn-color-darkened);
  padding: 15px;
}
</style>
