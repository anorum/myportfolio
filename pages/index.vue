<template>
  <section class="container-fluid">
    <b-row>
      <app-sidebar :showback="false">
        <h2 slot="maintitle">Alex Norum</h2>
        <p class="lead" slot="subtitle">Senior Business Analyst</p>
        <p
          slot="description"
        >Data Nerd who enjoys designing and building things. Currently working as a Senior Business Analyst for Oracle's Supply Chain.</p>

        <div slot="footer">
          <br>
          <a href="https://github.com/anorum" class="w-inline-block">
            <i class="fab fa-github fa-2x social-img"></i>
          </a>
          <a href="https://twitter.com/bootsnipp" class="w-inline-block">
            <i class="fab fa-linkedin-in fa-2x social-img"></i>
          </a>
          <a href="mailto:alexandernorum@gmail.com" class="w-inline-block">
            <i class="fas fa-envelope-square fa-2x social-img"></i>
          </a>
          <a href="https://plus.google.com/+Bootsnipp-page" class="w-inline-block social-img">Resume</a>
        </div>
      </app-sidebar>
      <b-col md="8" cols="12">
        <app-project-list :projects="projects"></app-project-list>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import Sidebar from '@/components/ui/Sidebar'
import projectList from '@/components/Projects/ProjectList'

export default {
  components: {
    appSidebar: Sidebar,
    appProjectList: projectList
  },
  asyncData(context) {
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
  },
  methods: {
    ...mapActions({
      setProjects: 'setProjects'
    })
  },
  mounted() {
    this.setProjects(this.projects)
  }
}
</script>

<style>
</style>
