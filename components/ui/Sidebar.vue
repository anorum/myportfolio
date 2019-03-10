<template >
  <transition name="slide" mode="in-out">
    <b-col
      md="4"
      cols="12"
      class="text-left sidebarcontainer"
      :style="{backgroundColor: blok.backgroundcolor}"
    >
      <nuxt-link to="/" v-if="blok.backbutton">
        <div class="back mt-4">
          <i class="fas fa-caret-left"></i> Back to Projects
        </div>
      </nuxt-link>
      <div class="sidebar">
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
export default {
  props: ['blok']
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
  transform: translateX(-100%);
}
</style>
