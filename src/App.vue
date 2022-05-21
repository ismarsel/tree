<template>
  <div class="container">
    <tree-node v-for="(item, index) in GET_NODE_OF_TREE" :key="index">
      <tree-node-item :model="item" />
    </tree-node>
    <p v-for="(node, index) of GET_NODE_OF_TREE" :key="index">
      {{ node.name }}
    </p>
  </div>
</template>

<script>
import TreeNode from "@/components/TreeNode.vue";
import TreeNodeItem from "@/components/TreeNodeItem.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    TreeNode,
    TreeNodeItem,
  },
  computed: {
    ...mapState(["treeNodes"]),
    ...mapGetters(["GET_NODE_OF_TREE"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
