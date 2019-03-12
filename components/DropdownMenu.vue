<template>
  <div class="dropdown">
    <a class="btn btn-light" role="button" v-on:click="show = !show">{{ getBackground }}</a>
    <div class="dropdown-menu show" v-if="show">
      <a
        class="dropdown-item"
        v-for="option in blok.iconchoices"
        :key="option"
        @click="setBackground(option); show = !show"
      >{{ option }}</a>
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
  padding-top: 0;
}

.dropdown-menu {
  min-width: 0;
}
</style>
