<template>
  <section class="container-fluid">
    <b-row>
      <Sidebar
        :blok="{backblog: true, title: post.title, subtitle: post.description, backgroundcolor: '#1B253E'}"
        v-on:hideclicked="fullscreen = true"
        v-show="!fullscreen"
      />
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
        <b-col lg="8" cols="12" class="contentcontainer" :class="{fullwidth: fullscreen}">
          <div class="content">
            <div class="spaced-headers ml-auto mr-auto">
              <div>
                <h1>{{ post.title }}</h1>
              </div>
            </div>
            <div v-if="post.image" id="headingimage">
              <img :src="post.image" />
            </div>
            <div class="content-body">
              <component
                :key="blok._uid"
                v-for="blok in post.body"
                :is="blok.component"
                :blok="blok"
              ></component>
            </div>
          </div>
        </b-col>
      </transition>
    </b-row>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      fullscreen: false,
      windowWidth: 0
    }
  },
  async asyncData(context) {
    let {
      data: {
        story: { content: post }
      }
    } = await context.app.$storyapi.get(
      'cdn/stories/blog/' + context.params.blogid,
      {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft'
      }
    )
    console.log(post)

    return { post }
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
    isMobile() {
      return this.windowWidth <= 500
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  border-left: 5px solid #1b253e;
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

.projectbutton {
  background-color: var(--btn-color-darkened);
  border: 1px solid var(--btn-color-darkened);
  width: 250px;
  transition: all 0.3s;
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
  z-index: 1000;
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
.nopadding {
  padding: 0px !important;
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

@media (max-width: 992px) {
  .container-fluid {
    border-left: 0px;
  }

  .content img {
    text-align: center;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
  }
}
</style>