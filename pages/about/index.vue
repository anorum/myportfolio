<template>
  <section class="container-fluid" v-editable="page" :style="cssProps">
    <b-row>
      <component
        :key="blok._uid"
        v-for="blok in page.data.story.content.sidearea"
        :is="blok.component"
        :blok="blok"
        v-show="!fullscreen"
        v-on:hideclicked="fullscreen = true"
      ></component>
      <b-col md="8" cols="12" class="contentcontainer" :class="{fullwidth: fullscreen}">
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
          <div class="content aboutcontent">
            <div class="spaced-headers ml-auto mr-auto" v-if="!isExternal">
              <div>
                <component
                  :key="blok._uid"
                  v-for="blok in page.data.story.content.headertext"
                  :is="blok.component"
                  :blok="blok"
                ></component>
                <div class="line mt-4" :style="{backgroundColor: page.data.story.content.color}"></div>
              </div>
            </div>
            <div v-if="headingimage" id="headingimage">
              <img src="http://a.storyblok.com/f/55155/614x768/d9f73dd5eb/alex-7461.jpg">
            </div>
            <div class="content-body">
              <component
                :key="blok._uid"
                v-for="blok in page.data.story.content.body"
                :is="blok.component"
                :blok="blok"
              ></component>
            </div>
          </div>
        </transition>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fullscreen: false
    }
  },
  async asyncData({ app }) {
    return app.$storyapi
      .get('cdn/stories/about', {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft'
      })
      .then(page => {
        console.log(page.data.story.content.sidearea[0].backgroundcolor)
        return {
          page
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
        '--heading-colors': this.page.data.story.content.sidearea[0]
          .backgroundcolor
      }
    }
  }
}
</script>

<style lang="scss">
.aboutcontent {
  h3 {
    border: none;
    color: #0f0f0f;
  }
}

.container-fluid {
  border-left: 5px solid var(--heading-colors);
  min-height: 100vh;
  transition: all 1s;
}

#headingimage {
  text-align: center;
  margin-top: -20% !important;
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

.aboutcontent {
  img {
    max-width: 25vw;
    max-height: 25vh;
    margin-bottom: 20px;
  }

  h3 {
    border: none;
  }

  h4 {
    color: var(--heading-colors) !important;
    border-left: 3px solid var(--heading-colors) !important;
    padding-left: 15px !important;
  }
}

.content-body {
  padding: 20px 10%;

  div {
    margin-top: 4px;
  }
}

.spaced-headers {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: auto;
  padding: 10% 15% 10% 15%;
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
  color: black;
  cursor: pointer;

  &:hover {
    color: #d0d0d0;
  }
}

.footer-area {
  i,
  a {
    color: white;
  }

  i:hover {
    color: #d0d0d0;
  }

  a:hover {
    color: #d0d0d0;
  }
}

.fullwidth {
  flex: 0 0 100%;
  max-width: 100%;
  transition: all 1s;
  transition-delay: 0.8s;
}

.card {
  margin-left: 20px;
}

.line {
  width: 66px;
  height: 4px;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .container-fluid {
    border-left: 0px;
  }
}
</style>
