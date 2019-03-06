<template>
  <b-row>
    <b-col v-for="project in projects" :key="project.id" cols="12">
      <app-project-card
        :color="project.color"
        :title="project.title"
        :introduction="project.introduction"
        :thumbnail="project.thumbnail"
        :categories="project.categories"
      ></app-project-card>
    </b-col>
  </b-row>
</template>

<script>
import projectCard from '@/components/Projects/ProjectCard'
export default {
  components: {
    appProjectCard: projectCard
  },
  props: ['projects']
}
</script>

<style>
</style>
