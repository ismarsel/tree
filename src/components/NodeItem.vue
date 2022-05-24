<template>
  <li class="node-list__item item">
    <div class="item__content" :class="{ bold: isFolder }">
      <component :is="iconComponent" />{{ node.name }}
      <div class="item__icons">
        <rename-button @click="onRename(node)" class="icon" />
        <delete-button v-if="!parent" @click="onDelete(index)" class="icon" />
        <delete-button
          v-else
          @click="onChidDelete(parent, index)"
          class="icon"
        />
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
import DeleteButton from "./UI/DeleteButton.vue";
import RenameButton from "./UI/RenameButton.vue";
import IconFolder from "./UI/IconFolder.vue";
import IconFile from "./UI/IconFile.vue";
export default {
  name: "NodeItem",
  data() {
    return {};
  },
  components: {
    DeleteButton,
    RenameButton,
    IconFolder,
    IconFile,
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
    iconComponent() {
      return this.isFolder ? "icon-folder" : "icon-file";
    },
  },
  methods: {
    ...mapActions([
      "SHOW_INPUT",
      "DELETE_NODE",
      "DELETE_CHILD_NODE",
      "FIX_CURENT_NODE",
    ]),
    onDelete(index) {
      this.DELETE_NODE(index);
    },
    onChidDelete(parent, index) {
      this.FIX_CURENT_NODE(parent);
      this.DELETE_CHILD_NODE(index);
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
  position: relative;
  padding-left: 10px;
  &__wrapper {
    display: flex;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__icons {
    width: 65px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-left: auto;
  }
}
.bold {
  font-weight: bold;
}
</style>
