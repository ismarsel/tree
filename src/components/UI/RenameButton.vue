<template>
  <button class="rename" type="button">
    <svg
      class="rename__svg"
      width="25px"
      height="25px"
      viewBox="0 0 6.3499998 6.3499998"
    >
      <path
        d="M 4.5135398,1.4550781 2.9354148,3.0351563 A 0.26460978,0.26460978 0 0 0 2.8592429,3.1972657 L 2.7791649,4.0664063 A 0.26460978,0.26460978 0 0 0 3.0662742,4.3535157 L 3.9354149,4.2753906 A 0.26460978,0.26460978 0 0 0 4.0994775,4.1992187 L 5.6776024,2.6191405 c 0.1878881,-0.1878871 0.1878873,-0.5015659 0,-0.6894532 L 5.2029929,1.4550781 c -0.187887,-0.1878881 -0.5015659,-0.1878873 -0.6894531,0 z M 4.8592428,1.859375 5.2733054,2.2753906 3.7928368,3.7558595 3.3358053,3.7968751 3.376821,3.3398439 Z"
      />
      <path
        d="m 0.76744594,4.498047 a 0.26495279,0.26495279 0 0 0 0.0253906,0.5292968 H 3.4393209 a 0.26464844,0.26464844 0 1 0 0,-0.5292968 H 0.79283657 a 0.26460978,0.26460978 0 0 0 -0.0253906,0 z"
        style="fill: #ff2876"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "RenameButton",
};
</script>

<style lang="scss" scoped>
.rename {
  display: flex;
  align-items: flex-end;
  padding: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #ff2876;
  }
  &__svg {
    fill: currentColor;
  }
}
</style>
