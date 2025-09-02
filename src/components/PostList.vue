<!--0901메모장-->

<template>
  <h3>{{ msg }}</h3>
  <p v-if="posts.length == 0">첫 게시글을 작성해주세요.</p>
  <p v-else>
    <PostItem v-bind:key="post.id" v-for="post in posts" v-bind:post="post" />
  </p>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  data() {
    return {
      msg: "게시글 목록",
    };
  },
  props: {
    posts: { type: Array, default: () => [] },
  },
  components: {
    PostItem,
  },
};
</script>

<style></style>
