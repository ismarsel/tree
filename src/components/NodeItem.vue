<template>
  <li class="node-list__item item">
    <div class="item__content">
      {{ node.name }}
      <div class="item__icons">
        <span class="item__icons--rename">/</span>
        <span @click="DELETE_NODE(node.name)" class="item__icons--delete">
          X
        </span>
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
  },
  computed: {},
  methods: {
    ...mapActions(["DELETE_NODE"]),
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
