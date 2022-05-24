<template>
  <ul class="node-list">
    <slot><button>// todo добавить</button></slot>
  </ul>
</template>

<script>
export default {
  name: "NodeList",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.node-list {
  max-width: 500px;
  padding: 1em;
  border: #2c3e50 1px solid;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
}
</style>
