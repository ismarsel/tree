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
  },
  getters: {
    GET_NODE_OF_TREE: (state) => {
      return state.treeNodes;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
