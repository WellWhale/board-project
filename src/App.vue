<template>
  <div class="container">
    <h3>초간단 게시판</h3>
    <p v-if="!user">로그인 후 이용해주세요.</p>
    <div v-else>
      <PostForm v-on:add-post="addPost">
        <template v-slot:header>
          <div>Header</div>
        </template>

        <template v-slot:default>
          <p>이름없는 slot</p>
        </template>

        <template v-slot:footer>
          <div>&copy;since 1998</div>
        </template>
      </PostForm>
      <hr />
      <PostList v-bind:posts="posts" />
    </div>

    <a v-on:click="kakaoLogin">
      <img src="./assets/kakao_logo.png" />
    </a>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue"; // 등록 화면
import PostList from "./components/PostList.vue"; // 목록 화면

export default {
  name: "App",
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      user: "",
      posts: [],
      state: {
        uid: "",
      },
    };
  },
  methods: {
    addPost(payload) {
      this.posts.push({
        id: this.posts.length + 1,
        title: payload.title,
        content: payload.content,
        date: new Date().toLocaleDateString(),
      });
    },
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          console.log(res);
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          const email = kakao_account.email;

          alert("로그인 성공!");

          this.user = { id: email, name: nickname };
          this.state.uid = nickname || "로그인유저";
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
  },
  provide() {
    return {
      state: this.state,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
