<template>
  <div class="container">
    <node-list>
      <node-item
        v-for="(node, index) in GET_TREE_NODE"
        :key="index"
        :node="node"
      />
    </node-list>
  </div>
</template>

<script>
import NodeList from "@/components/NodeList.vue";
import NodeItem from "@/components/NodeItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    NodeList,
    NodeItem,
  },
  computed: {
    ...mapGetters(["GET_TREE_NODE"]),
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
