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

// import { createStore } from "vuex";
// import axios from "axios";

// export default createStore({
//   // 여기가 실제 데이터 창고
//   state: () => ({
//     products: [], // 목록 데이터
//   }),

//   // 컴포넌트에서 쓰기 좋은 읽기 전용 인터페이스
//   getters: {
//     productList(state) {
//       return state.products; // ← ProductList.vue가 여기로 목록을 "읽는다"
//     },
//   },

//   // state를 실제로 변경 하는곳, 동기방식
//   mutations: {
//     SET_PRODUCTS(state, list) {
//       state.products = list; // ← 여기서 목록이 state에 "저장된다"
//     },
//   },

//   // 비동기방식, 성공/실패에 따라 mutations 호출
//   actions: {
//     async fetchProductList({ commit }) {
//       await axios("/api/productList") // ← 여기서 서버로 "가져온다"
//         .then((result) => {
//           // console.log(result.data);
//           commit("SET_PRODUCTS", result.data); // ← 가져온 걸 state에 "저장해라" (뮤테이션 실행)
//         });
//     },
//   },
// });

//
//
//
//
//

// <template>
//   <div class="container">
//     <h1 class="h1">상품 목록</h1>
//     <hr />
//     <table class="table table-hover">
//       <thead>
//         <tr>
//           <th>상품번호</th>
//           <th>상품이름</th>
//           <th>상품가격</th>
//           <th>배송료</th>
//           <th>카테고리</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr
//           v-on:click="goDetail(list.id)"
//           v-bind:key="list.id"
//           v-for="list in productList"
//           style="cursor: pointer"
//         >
//           <td>{{ list.id }}</td>
//           <td>{{ list.product_name }}</td>
//           <td>{{ list.product_price }}</td>
//           <td>{{ list.delivery_price }}</td>
//           <td>{{ list.tags }}</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </template>

// <script>
// export default {
//   computed: {
//     productList() {
//       return this.$store.getters.productList;
//     },
//   },
//   mounted() {
//     this.$store.dispatch("fetchProductList");
//   },
// };
// </script>
