<template>
  <div @click.self="SHOW_INPUT" class="overlay">
    <div class="input-wrapper">
      <input
        v-focus
        @keypress.enter="SHOW_INPUT"
        type="text"
        class="input"
        :value="GET_CURENT_NAME"
      />
    </div>
  </div>
</template>

<script>
const focus = {
  mounted: (el) => el.focus(),
};
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RenameInput",
  directives: {
    focus,
  },
  computed: {
    ...mapGetters(["GET_CURENT_NAME"]),
  },
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
