<!--0901메모장-->

<template>
  <div class="post-item">
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p>
    <p>
      <small>작성일: {{ post.date }}</small>
    </p>
    <p>
      <small>작성자: {{ post.writer }}</small>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  props: {
    post: { type: Object, default: () => ({}) },
  },
  inject: ["state"],
};
</script>

<style>
.post-item {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
