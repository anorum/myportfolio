<template>
  <b-col md="4" cols="12" class="text-left sidebarcontainer">
    <div class="sidebar">
      <slot name="maintitle"></slot>
      <slot name="subtitle"></slot>
      <slot name="description"></slot>
      <div class="footer-area">
        <slot name="footer"></slot>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.sidebarcontainer {
  background-repeat: repeat;
  background-size: auto;
  background-attachment: fixed;
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

.social-img {
  margin-right: 9px;
  margin-bottom: 8px;
  margin-left: 9px;
  padding-right: 0;
  padding-left: 0;
}

.sidebar-link {
  padding: 50px;
}

@media (max-width: 768px) {
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
</style>
