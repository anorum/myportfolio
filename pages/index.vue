<template>
  <section class="container-fluid">
    <b-row>
      <component
        :key="blok._uid"
        v-for="blok in page.data.story.content.sidearea"
        :is="blok.component"
        :blok="blok"
      ></component>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated bounceInRight"
        leave-active-class="animated bounceOutRight"
        appear
      >
        <b-col md="8" cols="12">
          <ProjectList :projects="projects.data.stories"></ProjectList>
        </b-col>
      </transition>
    </b-row>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async asyncData({ app }) {
    let [page, projects] = await Promise.all([
      app.$storyapi.get('cdn/stories/home', {
        version: 'draft'
      }),
      app.$storyapi.get('cdn/stories', {
        version: 'draft',
        starts_with: 'projects/'
      })
    ])
    return {
      page,
      projects
    }
  }
  /*   asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'projects/'
      })
      .then(res => {
        return {
          projects: res.data.stories.map(project => {
            return {
              id: project.slug,
              title: project.content.title,
              introduction: project.content.introduction,
              categories: project.content.categories,
              thumbnail: project.content.projectThumbnail,
              color: project.content.projectColor,
              isExternal: project.content.isExternal,
              content: project.content.content,
              externalLink: project.content.externalLink.url
            }
          })
        }
      })
  }, */
}
</script>

<style>
</style>
