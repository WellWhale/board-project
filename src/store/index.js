// 0902메모장

import { createStore } from "vuex";

export default createStore({
  state: {
    boardList: [
      {
        id: 1,
        title: "게시글 1번",
        content: "1번 내용",
        date: new Date().toLocaleDateString(),
        writer: "user01",
      },
    ],
    logId: "", // 로그인 정보 저장
  },
  mutations: {
    // 동기방식
    addBoard(state, post) {
      state.boardList.push(post);
    },
    setId(state, id) {
      state.logId = id;
    },
  },
  actions: {
    // 비동기방식
    saveBoard({ commit }, post) {
      commit("addBoard", post);
    },
  },
  getters: {
    getBoardList(state) {
      return state.boardList;
    },
    getBoardNo(state) {
      return state.boardList.length + 1;
    },
    getLogId(state) {
      return state.logId;
    },
  },
});

  // actions: {
  //   async fetchProductList({ commit }) {
  //     await axios("/api/productList") // ← 여기서 서버로 "가져온다"
  //       .then((result) => {
  //         // console.log(result.data);
  //         commit("SET_PRODUCTS", result.data); // ← 가져온 걸 state에 "저장해라" (뮤테이션 실행)
  //       });
  //   },
  // },
