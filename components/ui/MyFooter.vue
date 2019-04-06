<template>
  <div class="footernav">
    <ul class="mr-auto ml-auto">
      <li>
        <a href="https://github.com/anorum" target="_blank">
          <i class="fab fa-github social-img"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/alex-norum/" target="_blank">
          <i class="fab fa-linkedin-in social-img"></i>
        </a>
      </li>
      <li>
        <a href="mailto:alexandernorum@gmail.com" target="_blank">
          <i class="fas fa-envelope-square social-img"></i>
        </a>
      </li>
      <li>
        <nuxt-links :blok="{linktitle: 'Resume', path: '/about' }"></nuxt-links>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
img {
  max-width: 40px;
}

.footernav {
  display: flex;
}

ul {
  display: flex;
  list-style: none;
  padding: 0px;
}

li {
  padding: 0 15px 0 15px;
}

i {
  font-size: 1.2em;
}
</style>
