<template>
  <div @click.self="SHOW_INPUT" class="overlay flex">
    <div class="input-wrapper flex">
      <input
        v-focus
        @keypress.enter="changeName"
        @keydown.esc="SHOW_INPUT"
        type="text"
        class="input"
        v-model="value"
      />
      <div class="btn-group flex">
        <button @click="SHOW_INPUT" class="btn-group__item">esc</button>
        <button @click="changeName" class="btn-group__item">enter</button>
      </div>
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
  data() {
    return {
      value: "",
    };
  },
  directives: {
    focus,
  },
  computed: {
    ...mapGetters(["GET_CURENT_NAME"]),
  },
  methods: {
    ...mapActions(["SHOW_INPUT", "SET_NEW_NAME"]),
    changeName() {
      this.SET_NEW_NAME(this.value);
      this.SHOW_INPUT();
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  z-index: 40;
  background: black;
  opacity: 0.75;
  transition: opacity 0.8s linear;
}
.input-wrapper {
  position: absolute;
  top: 20%;
  width: 300px;
  height: 150px;
  justify-content: space-between;
  margin: 0px auto;
  z-index: 45;
  padding: 25px;
  background: #fefefe;
  border-radius: 4px;
}
.input {
  width: 100%;
  height: 50px;
  padding: 1em;
  font-size: 18px;
}
.btn-group {
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  &__item {
    width: 60px;
    padding: 5px;
    font-weight: 600;
    text-transform: uppercase;
  }
}
</style>
