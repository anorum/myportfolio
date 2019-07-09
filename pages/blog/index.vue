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
        <b-col lg="8" cols="12">
          <PostList :posts="posts.data.stories"></PostList>
        </b-col>
      </transition>
    </b-row>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async asyncData({ app }) {
    let [page, posts] = await Promise.all([
      app.$storyapi.get('cdn/stories/blog', {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        component: 'page'
      }),
      app.$storyapi.get('cdn/stories/blog', {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        component: 'blog-post'
      })
    ])
    return {
      page,
      posts
    }
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], event => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  }
}
</script>

<style scoped>
.container-fluid {
  border-left: 0px;
}
</style>