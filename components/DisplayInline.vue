<template>
  <b-row :align-v="blok.contentVerticalAlign">
    <b-col md="6" cols="12" :class="blok.contentLeftAlign">
      <component
        :key="blok._uid"
        v-for="blok in blok.contentLeft"
        :is="blok.component"
        :blok="blok"
      ></component>
    </b-col>
    <b-col md="6" cols="12" :class="blok.contentRightAlign">
      <component
        :key="blok._uid"
        v-for="blok in blok.contentRight"
        :is="blok.component"
        :blok="blok"
      ></component>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
</style>
