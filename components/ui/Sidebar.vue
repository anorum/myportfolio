<template >
  <transition name="slide" mode="in-out" appear>
    <b-col
      md="4"
      cols="12"
      class="text-left sidebarcontainer"
      :style="[getBackground.backgroundpath ? {backgroundColor: blok.backgroundcolor, backgroundImage: 'url(' + getBackground.backgroundpath + ')'} : {backgroundColor: blok.backgroundcolor}]"
    >
      <div class="d-flex justify-content-between mt-4" v-if="blok.backbutton">
        <nuxt-link to="/">
          <div class="back" :style="{ color: textColor }">
            <i class="fas fa-caret-left"></i> Back to Projects
          </div>
        </nuxt-link>
        <div @click="$emit('hideclicked')">
          <i class="fas fa-times" :style="{ color: textColor }"></i>
        </div>
      </div>
      <div class="sidebar" :style="{ color: textColor }">
        <div class="title">
          <h2>{{ blok.title }}</h2>
        </div>
        <div class="subtitle">
          <p class="lead">{{blok.subtitle}}</p>
        </div>
        <div class="description">
          <component :key="blok._uid" v-for="blok in blok.body" :is="blok.component" :blok="blok"></component>
        </div>
        <div class="footer-area">
          <component :key="blok._uid" v-for="blok in blok.footer" :is="blok.component" :blok="blok"></component>
        </div>
      </div>
    </b-col>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['blok'],
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
.sidebarcontainer {
  background-repeat: repeat;
  background-size: auto;
  background-attachment: fixed;
  min-height: 100vh;
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

@media (max-width: 768px) {
  .sidebarcontainer {
    min-height: 30vh;
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
</style>
