<template>
  <li class="node-list__item item">
    <div class="item__content" :class="{ bold: isFolder }">
      {{ node.name }}
      <div class="item__icons">
        <span @click="onRename(node)" class="item__icons--rename"> / </span>
        <span @click="onDelete(node)" class="item__icons--delete"> X </span>
      </div>
    </div>
    <ul v-if="isFolder">
      <node-item
        v-for="(child, subIndex) in node.children"
        :key="subIndex"
        :node="child"
        :index="subIndex"
        :parent="node"
      />
    </ul>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NodeItem",
  data() {
    return {};
  },
  props: {
    node: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    parent: {
      type: Object,
      required: false,
    },
  },
  computed: {
    isFolder() {
      return this.node.children && this.node.children.length >= 0;
    },
  },
  methods: {
    ...mapActions(["SHOW_INPUT", "DELETE_NODE", "FIX_CURENT_NODE"]),
    onDelete(node) {
      this.$emit("onDelete", node);
      this.DELETE_NODE(node);
    },
    onRename(node) {
      this.FIX_CURENT_NODE(node);
      this.SHOW_INPUT();
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
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    cursor: pointer;
    & > span {
      width: 25px;
      height: 25px;
      text-align: center;
      border: 1px #000 solid;
    }
  }
}
.bold {
  font-weight: bold;
}
</style>
