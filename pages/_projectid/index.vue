<template>
  <section class="container-fluid">
    <b-row>
      <component
        :key="blok._uid"
        v-for="blok in sidebar"
        :is="blok.component"
        :blok="blok"
        v-if="!fullscreen"
      ></component>
      <b-col
        :md="8"
        cols="12"
        class="contentcontainer"
        :class="{nopadding: isExternal, fullwidth: fullscreen}"
      >
        <i
          :class="fullscreen ? 'fas fa-compress-arrows-alt expandicon ml-2' : 'fas fa-expand-arrows-alt ml-2 expandicon'"
          @click="fullscreen = !fullscreen"
        ></i>
        <div class="content">
          <div class="spaced-headers ml-auto mr-auto" v-if="!isExternal">
            <div>
              <h1>{{ introduction }}</h1>
              <div class="line mt-4" :style="{backgroundColor: color}"></div>
            </div>
          </div>
          <div class="content-body" :class="{nopadding: isExternal}">
            <iframe v-if="isExternal" :src="externalLink" frameborder="0"/>
            <div v-if="!isExternal">
              <component
                :key="blok._uid"
                v-for="blok in contents"
                :is="blok.component"
                :blok="blok"
              ></component>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import marked from 'marked'

export default {
  data() {
    return {
      scrollPosition: null,
      fullscreen: false
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/projects/' + context.params.projectid, {
        version: 'draft',
        sort_by: 'order'
      })
      .then(res => {
        return {
          title: res.data.story.content.title,
          subtitle: res.data.story.content.projectType,
          introduction: res.data.story.content.introduction,
          color: res.data.story.content.projectColor,
          isExternal: res.data.story.content.isExternal,
          externalLink: res.data.story.content.externalLink.url,
          content: res.data.story.content.content,
          contents: res.data.story.content.contents,
          sidebar: res.data.story.content.sidebar
        }
      })
  },
  methods: {
    compiledContent: content => {
      return marked(content, { sanitize: true })
    },
    updateScroll() {
      this.scrollPosition = document.querySelector('iframe').scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="scss">
.content {
  img {
    max-width: 65vw;
  }
}

.content-body {
  padding: 20px 10%;
}

.content iframe {
  min-width: 100%;
  min-height: 100vh;
}

.nopadding {
  padding: 0px;
}

.spaced-headers {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: auto;
  padding: 10%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: left;
  max-width: 980px;
}

.line {
  width: 30px;
  height: 3px;
}

.expandicon {
  color: '#F0F0F0';
}

.fullwidth {
  flex: 0 0 100%;
  max-width: 100%;
  transition: all 2s;
  transition-delay: 0.8s;
}
</style>
