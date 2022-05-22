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
    inputVisible: false,
  },
  getters: {
    GET_TREE_NODE: (state) => {
      return state.treeNodes;
    },
    GET_INPUT_VISIBLE: (state) => {
      return state.inputVisible;
    },
  },
  mutations: {
    DELETE_NODE(state, node) {
      state.treeNodes = state.treeNodes.filter((n) => n.name != node.name);
    },
    SET_NEW_NAME(state, newName) {
      state.newName = newName;
    },
    inputOpenClose(state) {
      state.inputVisible = !state.inputVisible;
    },
  },
  actions: {
    DELETE_NODE({ commit }, node) {
      commit("DELETE_NODE", node);
    },
    SET_NEW_NAME({ commit }, newName) {
      commit("SET_NEW_NAME", newName);
    },
    inputOpenClose({ commit }) {
      commit("inputOpenClose");
    },
  },
});
