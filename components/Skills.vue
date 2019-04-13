<template>
  <b-row>
    <b-col v-for="skill in blok.skills" :key="skill.name" class="text-center">
      <i :class="[skill.icon.type, skill.icon.icon]" class="fa-2x"></i>
      <br>
      <p>{{ skill.name }}</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
i {
  color: #413f43;
  font-size: 60px;
}

p {
  font-size: 20px;
}
</style>
