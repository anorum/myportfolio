<template>
  <section class="container">
    <b-row>
      {{ projects }}
    </b-row>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'draft',
      starts_with: 'projects/'
    }).then(res => {
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
       })}
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
