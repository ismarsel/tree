<template>
  <li class="node-list__item item">
    <div class="item__content">
      {{ node.name }}
      <div class="item__icons">
        <span @click="onRename(this.node)" class="item__icons--rename">
          /
        </span>
        <span @click="onDelete" class="item__icons--delete"> X </span>
      </div>
    </div>
    <ul v-if="node.children && node.children.length">
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NodeItem",
  data() {
    return {
      papa: null,
    };
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
    ...mapGetters(["GET_TREE_NODE"]),
  },
  methods: {
    ...mapActions([
      "SHOW_INPUT",
      "SET_PARENT_NODE",
      "DELETE_NODE",
      "FIX_CURENT_NODE",
    ]),
    onDelete() {
      this.$emit("onDelete", this.node);
      console.log(`излишки >>>${this.node.name}`);
      this.DELETE_NODE(this.node);
    },
    onRename(x) {
      this.FIX_CURENT_NODE(x);
      this.SHOW_INPUT();
    },
    onChildDelete() {
      console.log(this.GET_TREE_NODE);
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
    cursor: pointer;
    & > span {
      width: 25px;
      height: 25px;
      text-align: center;
      border: 1px #000 solid;
    }
  }
}
</style>
