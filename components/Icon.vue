<template>
  <a :href="blok.link" class="w-inline-block">
    <i :class="blok.iconclass"></i>
  </a>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
.social-img {
  margin-right: 9px;
  margin-bottom: 8px;
  margin-left: 9px;
  padding-right: 0;
  padding-left: 0;
}

i {
  cursor: pointer;
  color: white;
}
i:hover {
  color: #d0d0d0 !important;
}

a:hover {
  color: #d0d0d0 !important;
}
</style>
