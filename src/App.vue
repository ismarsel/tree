<template>
  <div class="container">
    <node-list>
      <node-item
        v-for="(node, index) in GET_TREE_NODE"
        :key="index"
        :node="node"
        :index="index"
      />
    </node-list>
  </div>
  <rename-input
    v-if="GET_INPUT_VISIBLE"
    @keypress.enter="SET_NEW_NAME($event.target.value)"
  />
</template>

<script>
import NodeList from "@/components/NodeList.vue";
import NodeItem from "@/components/NodeItem.vue";
import RenameInput from "@/components/RenameInput.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    NodeList,
    NodeItem,
    RenameInput,
  },
  computed: {
    ...mapGetters(["GET_TREE_NODE", "GET_INPUT_VISIBLE"]),
  },
  methods: {
    ...mapActions(["SET_NEW_NAME", "DELETE_NODE"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
