<template>
  <div @click.self="inputOpenClose" class="overlay">
    <div class="input-wrapper">
      <input @keypress.enter="inputOpenClose" type="text" class="input" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RenameInput",
  methods: {
    ...mapActions(["inputOpenClose"]),
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  background: black;
  opacity: 0.75;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 400;
  transition: opacity 0.8s linear;
}
.input-wrapper {
  position: absolute;
  top: 0px;
  left: 50%;
  background: #ffffff;
  box-shadow: 1px 1px 11px #444;
  z-index: 450;
  padding: 25px;
}
.input {
  width: 100%;
}
</style>
