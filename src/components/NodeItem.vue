<template>
  <li class="node-list__item item">
    <div class="item__content">
      {{ node.name }}
      <div class="item__icons">
        <span class="item__icons--rename">/</span>
        <span class="item__icons--delete">X</span>
      </div>
    </div>
    <ul v-if="node.children && node.children.length">
      <node-item
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
      />
    </ul>
  </li>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NodeItem",
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["treeNodes"]),
    isFolder() {
      return this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  padding-left: 10px;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__icons {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
