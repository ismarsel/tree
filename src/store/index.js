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
    GET_CURENT_NAME: (state) => {
      return state.curentNode.name;
    },
  },
  mutations: {
    DELETE_NODE(state, index) {
      state.treeNodes.splice(index, 1);
    },
    DELETE_CHILD_NODE(state, index) {
      state.curentNode.children.splice(index, 1);
    },
    SET_NEW_NAME(state, newName) {
      state.curentNode.name = newName;
    },
    CHANGE_INPUT_VISIBLE(state) {
      state.inputVisible = !state.inputVisible;
    },
    FIX_CURENT_NODE(state, node) {
      state.curentNode = node;
    },
  },
  actions: {
    DELETE_NODE({ commit }, index) {
      commit("DELETE_NODE", index);
    },
    DELETE_CHILD_NODE({ commit }, index) {
      commit("DELETE_CHILD_NODE", index);
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
