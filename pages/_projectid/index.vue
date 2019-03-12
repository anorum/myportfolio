<template>
  <section class="container-fluid" :style="{'border-left-color': color}" v-editable="alldata">
    <b-row>
      <component
        :key="blok._uid"
        v-for="blok in sidebar"
        :is="blok.component"
        :blok="blok"
        v-show="!fullscreen"
        v-on:hideclicked="fullscreen = true"
      ></component>
      <b-col
        md="8"
        cols="12"
        class="contentcontainer"
        :class="{nopadding: isExternal, fullwidth: fullscreen}"
      >
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInLeft delay"
          leave-active-class="animated bounceOutLeft quick"
          appear
        >
          <div v-show="fullscreen" class="showsidecontainer" @click="fullscreen = false">
            <i class="fas fa-bars expandicon mt-2 ml-2 fa-1.5x"></i>
          </div>
        </transition>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutRight"
          appear
        >
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
        </transition>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import marked from 'marked'

export default {
  data() {
    return {
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
          alldata: res.data.story.content,
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

<style lang="scss">
.container-fluid {
  border-left: 5px solid;
  min-height: 100vh;
  transition: all 1s;
}
.showsidecontainer {
  transition: all 0.5s;
  animation-delay: 0s;
}

.delay {
  animation-delay: 1s;
}

.quick {
  transition-duration: 0.1s;
}

.content {
  img {
    max-width: 55vw;
    max-height: 50vh;
  }
}

.content-body {
  padding: 20px 10%;

  div {
    margin-top: 4px;
  }
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
  flex: 0 0 95%;
  max-width: 100%;
  transition: all 1s;
  transition-delay: 0.8s;
}
</style>
