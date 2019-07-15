<template>
  <transition name="slide" mode="in-out">
    <b-col
      lg="4"
      cols="12"
      class="text-left sidebarcontainer"
      :style="[getBackground.backgroundpath ? {backgroundColor: blok.backgroundcolor, backgroundImage: 'url(' + getBackground.backgroundpath + ')'} : {backgroundColor: blok.backgroundcolor}]"
    >
      <div class="lock">
        <div class="d-flex justify-content-between mt-4 sidebarcontrols" v-if="blok.backbutton">
          <nuxt-link to="/">
            <div :style="{ color: 'white' }">
              <i class="fas fa-caret-left"></i> Back to Projects
            </div>
          </nuxt-link>
          <div @click="$emit('hideclicked')" v-if="!hideX">
            <i class="fas fa-times closeicon" :style="{ color: 'white' }"></i>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-4 sidebarcontrols" v-if="blok.backblog">
          <nuxt-link to="/Blog">
            <div :style="{ color: 'white' }">
              <i class="fas fa-caret-left"></i> Back to Blog
            </div>
          </nuxt-link>
          <div @click="$emit('hideclicked')">
            <i class="fas fa-times closeicon" :style="{ color: 'white' }"></i>
          </div>
        </div>
      </div>
      <div class="sidebar" :style="{ color: 'white' }">
        <div :style="{backgroundColor: blok.backgroundcolor}">
          <div v-if="blok.logo">
            <img id="logo" :src="blok.logo" />
          </div>
          <div class="title">
            <vue-typed-js :strings="[blok.title]" :typeSpeed="50" :startDelay="1000">
              <h2 class="typing"></h2>
            </vue-typed-js>
          </div>
          <div class="subtitle">
            <p class="lead">{{blok.subtitle}}</p>
          </div>
          <div class="description">
            <component :key="blok._uid" v-for="blok in blok.body" :is="blok.component" :blok="blok"></component>
          </div>
          <div class="footer-area text-center">
            <component
              :key="blok._uid"
              v-for="blok in blok.footer"
              :is="blok.component"
              :blok="blok"
            ></component>
          </div>
        </div>
      </div>
      <div class="footer">
        <my-footer />
      </div>
    </b-col>
  </transition>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    blok: Object,
    hideX: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['getBackground']),
    textColor() {
      var rgb = HEX2RGB(this.blok.backgroundcolor)
      var brightness = 10

      var r = rgb[0]
      var g = rgb[1]
      var b = rgb[2]

      var ir = Math.floor((255 - r) * brightness) - 30
      var ig = Math.floor((255 - g) * brightness) - 30
      var ib = Math.floor((255 - b) * brightness) - 30
      return 'rgb(' + ir + ',' + ig + ',' + ib + ')'
    }
  }
}

function HEX2RGB(hex) {
  'use strict'
  if (hex.charAt(0) === '#') {
    hex = hex.substr(1)
  }
  if (hex.length < 2 || hex.length > 6) {
    return false
  }
  var values = hex.split(''),
    r,
    g,
    b

  if (hex.length === 2) {
    r = parseInt(values[0].toString() + values[1].toString(), 16)
    g = r
    b = r
  } else if (hex.length === 3) {
    r = parseInt(values[0].toString() + values[0].toString(), 16)
    g = parseInt(values[1].toString() + values[1].toString(), 16)
    b = parseInt(values[2].toString() + values[2].toString(), 16)
  } else if (hex.length === 6) {
    r = parseInt(values[0].toString() + values[1].toString(), 16)
    g = parseInt(values[2].toString() + values[3].toString(), 16)
    b = parseInt(values[4].toString() + values[5].toString(), 16)
  } else {
    return false
  }
  return [r, g, b]
}
</script>

<style scoped lang="scss">
.sidebarcontrols {
  .closeicon {
    font-size: 1.3em;
  }
}

.sidebarcontainer {
  background-repeat: repeat;
  background-size: auto;
  background-attachment: fixed;
  min-height: 100vh;
}

.lock {
  position: sticky;
  top: 1rem;
}

#logo {
  max-width: 160px;
}

.footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 33.3%;
  padding: 0px;
  margin: 0px;
}

.sidebar {
  bottom: 0;
  display: block;
  width: 33.333%;
  max-width: none;
  padding: 60px 4% 6%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  position: fixed;
}

.footer-area {
  padding-top: 25px;
}

.sidebar-link {
  padding: 50px;
}

@media (max-width: 992px) {
  .sidebarcontainer {
    min-height: 30vh;
  }

  .typed-element {
    justify-content: center;
  }

  .sidebar {
    position: static;
    text-align: center !important;
    width: 100%;
  }

  .sidebar-back {
    margin-top: 20px;
    position: static;
  }

  .foodmenu {
    justify-content: center;
  }

  .lock {
    position: fixed !important;
    top: 0rem;
    margin: -15px;
    background-color: var(--heading-colors);
    height: 60px;
    z-index: 100;
    width: 100%;
    padding: 0px 15px;
  }

  .footer {
    position: relative;
    width: 100%;
  }
}

.slide-enter-active {
  transition: all 0.8s ease;
}
.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-90%);
}

.line-1 {
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
}

.anim-typewriter {
  animation: typewriter 1s steps(24) 1s 1 normal both,
    blinkTextCursor 800ms steps(44) infinite normal;
}

.typewriter-enter-active {
  animation: typewriter 1s steps(24) 1s 1 normal both,
    blinkTextCursor 800ms steps(44) infinite normal;
}

.typewriter-leave-active {
  animation: typewriter 1s steps(24) 1s 1 normal both reverse,
    blinkTextCursor 800ms steps(44) infinite normal;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
