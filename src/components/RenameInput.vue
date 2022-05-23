<template>
  <div @click.self="SHOW_INPUT" class="overlay">
    <div class="input-wrapper">
      <input @keypress.enter="SHOW_INPUT" type="text" class="input" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RenameInput",
  methods: {
    ...mapActions(["SHOW_INPUT"]),
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 400;
  background: black;
  opacity: 0.75;
  transition: opacity 0.8s linear;
}
.input-wrapper {
  position: absolute;
  top: 0px;
  left: 50%;
  z-index: 450;
  padding: 25px;
  background: #ffffff;
  box-shadow: 1px 1px 11px #444;
}
.input {
  width: 100%;
}
</style>
