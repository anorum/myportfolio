<template>
  <div>
    <b-navbar class="darkgrey">
      <b-navbar-nav class="mr-auto ml-auto">
        <b-nav-item href="https://github.com/anorum">
          <i class="fab fa-github social-img"></i>
        </b-nav-item>
        <b-nav-item href="https://www.linkedin.com/in/alex-norum/">
          <i class="fab fa-linkedin-in social-img"></i>
        </b-nav-item>
        <b-nav-item href="mailto:alexandernorum@gmail.com">
          <i class="fas fa-envelope-square social-img"></i>
        </b-nav-item>
        <b-nav-item href="/about">
          <h6>Resume</h6>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
img {
  max-width: 40px;
}
</style>
