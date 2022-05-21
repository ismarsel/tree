<template>
  <li class="tree-node__item">
    <div class="tree-node__item-name">
      {{ model.name }}
      <span class="tree-node__item-icon">/</span>
      <span class="tree-node__item-icon">X</span>
    </div>
    <tree-node v-if="model.children && model.children.length">
      <tree-node-item
        class="item"
        v-for="child in model.children"
        :key="child.name"
        :model="child"
      />
    </tree-node>
  </li>
</template>

<script>
import { TreeNode } from "@/components/TreeNode.vue";
import { mapState } from "vuex";
export default {
  name: "TreeNodeItem",
  components: {
    TreeNode,
  },
  props: {
    model: Object,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["treeNodes"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.tree-node__item {
  padding-left: 20px;
  &-icon {
    padding: 0 5px;
    border-radius: 4px;
    background-color: #dd584c;
    &:not(:last-child) {
      margin: 0 1em;
    }
  }
}
</style>
