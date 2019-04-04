<template>
  <section class="container-fluid" :style="cssProps" v-editable="alldata">
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
        lg="8"
        cols="12"
        class="contentcontainer"
        :class="{nopadding: isExternal, fullwidth: fullscreen}"
      >
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInLeft delay"
          leave-active-class="animated bounceOutLeft quick"
          mode="in-out"
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
            <div v-if="headingimage" id="headingimage">
              <img :src="headingimage">
            </div>
            <div class="content-body" :class="{nopadding: isExternal}">
              <div class="iframe-container" v-if="isExternal">
                <iframe id="jupyter" width="100%" :src="externalLink" frameborder="0"/>
              </div>
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
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
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
          sidebar: res.data.story.content.sidebar,
          headingimage: res.data.story.content.headingimage
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
  },
  computed: {
    cssProps() {
      return {
        '--heading-colors': this.color
      }
    }
  }
}
</script>

<style lang="scss">
.container-fluid {
  border-left: 5px solid var(--heading-colors);
  min-height: 100vh;
  transition: all 1s;
}

.expandicon {
  color: black;
  cursor: pointer;

  &:hover {
    color: #d0d0d0;
  }
}

#headingimage {
  text-align: center;
  margin-top: -20%;
}

.contentcontainer {
  padding: 0px;
}

.showsidecontainer {
  transition: all 0.5s;
  animation-delay: 0s;
  position: fixed;
  top: 1rem;
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
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
    border-radius: 0px;
  }
}

.content-body {
  padding: 20px 10%;

  div {
    margin-top: 4px;
  }
}

#jupyter {
  min-width: 100% !important;
  max-width: 100% !important;
  min-height: 100vh !important;
}

#jupyer html {
  max-width: 100vw;
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
  padding: 10% 15% 25% 15%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: left;
  background-color: #f0f6fa;
  //max-width: 980px;
}

.line {
  width: 66px;
  height: 4px;
  border-radius: 2px;
}

.line-centered {
  margin: 0 auto;
  width: 66px;
  height: 4px;
  border-radius: 2px;
}

.expandicon {
  color: '#F0F0F0';
}

.fullwidth {
  flex: 0 0 100%;
  max-width: 100%;
  transition: all 1s;
  transition-delay: 0.8s;
}

h3,
h4 {
  color: var(--heading-colors);
  border-left: 3px solid var(--heading-colors);
  padding-left: 15px;
}

@media (max-width: 992px) {
  .container-fluid {
    border-left: 0px;
  }
}

/* Nice Code to add a line below a header
.content h2:after {
  content: '';
  display: block;
  width: 66px;
  padding-top: 20px;
  border-bottom: 4px solid var(--heading-colors);
}
*/
</style>
