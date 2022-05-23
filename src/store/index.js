import { createStore } from "vuex";
// import { findAnddel, filterhelper } from "./common.js";
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
    curentNode: null,
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

      // findAnddel(state, node, filterhelper);
    },
    SET_NEW_NAME(state, newName) {
      state.newName = newName;
    },
    CHANGE_INPUT_VISIBLE(state) {
      state.inputVisible = !state.inputVisible;
    },
    FIX_CURENT_NODE(state, node) {
      state.curentNode = node;
    },
  },
  actions: {
    DELETE_NODE({ commit }, node) {
      commit("DELETE_NODE", node);
    },
    SET_NEW_NAME({ commit }, newName) {
      commit("SET_NEW_NAME", newName);
    },
    SHOW_INPUT({ commit }) {
      commit("CHANGE_INPUT_VISIBLE");
    },
    FIX_CURENT_NODE({ commit }, node) {
      commit("FIX_CURENT_NODE", node);
    },
  },
});
