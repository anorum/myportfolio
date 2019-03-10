<template>
  <b-row>
    <b-col v-for="project in projects" :key="project.id" cols="12">
      <ProjectCard
        :id="project.slug"
        :color="project.content.projectColor"
        :title="project.content.title"
        :introduction="project.content.introduction"
        :thumbnail="project.content.projectThumbnail"
        :categories="project.content.categories"
      ></ProjectCard>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ['projects']
}
</script>

<style>
</style>
