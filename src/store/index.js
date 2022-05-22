import { createStore } from "vuex";

export default createStore({
  state: {
    treeNodes: [
      {
        name: "Dir 1",
        children: [
          {
            name: "Dir 1-1",
            children: [{ name: "File 1-1-1" }],
          },
          { name: "File 1-2" },
        ],
      },
      {
        name: "Dir 2",
        children: [
          {
            name: "Dir 2-1",
            children: [],
          },
          { name: "File 2-2" },
        ],
      },
      { name: "File 2" },
    ],
    newName: "",
  },
  getters: {
    GET_TREE_NODE: (state) => {
      return state.treeNodes;
    },
  },
  mutations: {
    DELETE_NODE(state, node) {
      state.treeNodes = () => {
        const buff = [];
        for (let element of state.treeNodes) {
          
        }
      };
    },
  },
  actions: {
    DELETE_NODE({ commit }, node) {
      commit("DELETE_NODE", node);
    },
  },
});
