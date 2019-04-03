<template>
  <div class="dropdown mt-4">
    <a class="btn btn-light" role="button" v-on:click="show = !show">{{ getBackground.background }}</a>
    <div class="dropdown-menu show" v-if="show">
      <a
        class="dropdown-item"
        @click="setBackground({choice: 'Not Hungry', path: null}); show = !show"
      >Not Hungry</a>
      <a
        class="dropdown-item"
        v-for="option in blok.options"
        :key="option"
        @click="setBackground({choice: option.name, path: option.filename}); show = !show"
      >{{ option.name }}</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      show: false
    }
  },
  props: ['blok'],
  computed: {
    ...mapGetters(['getBackground'])
  },
  methods: {
    ...mapActions(['setBackground'])
  }
}
</script>

<style scoped>
.dropdown {
  border-bottom: 1px solid;
}

img {
  max-width: 20px;
}

.btn-light {
  color: #24344b !important;
}

.dropdown-menu {
  min-width: 0;
}

@media (max-width: 992px) {
  .dropdown-menu.show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
}
</style>
