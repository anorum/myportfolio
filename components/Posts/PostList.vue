<template>
  <b-row>
    <b-col v-for="post in posts" :key="post.id" cols="12">
      <PostCard
        :id="post.slug"
        :title="post.content.title"
        :description="post.content.description"
        :image="post.content.image"
        :body="post.content.body"
      ></PostCard>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ['posts']
}
</script>

<style>
</style>
