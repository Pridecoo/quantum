<template>
  <li :class="{ active: isVisible }">
    <div class="top">
      <div>{{ question }}</div>
      <div class="control" :class="{ active: isVisible }" @click="showHideParagraph">
        control
      </div>
    </div>

    <transition>
      <p v-if="isVisible">{{ answer }}</p>
    </transition>
  </li>
</template>

<script>
export default {
  props: ['question', 'answer'],
  data() {
    return {
      isVisible: false,
    };
  },

  methods: {
    showHideParagraph() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  max-height: 96px;
  padding: 33.5px 40px;
  background-color: #fff;
  border: 2px solid #6248ff;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s;

  &.active {
    max-height: initial;
  }

  & + li {
    margin-top: 16px;
  }

  .top {
    display: flex;
    justify-content: space-between;
  }

  .control {
    width: 32px;
    height: 32px;
    font-size: 0;
    background-image: url(~@/assets/images/cross.svg);
    background-repeat: no-repeat;
    background-position: center;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &.active {
      transform: rotate(45deg);
    }
  }

  div {
    font-family: 'Museo Sans Cyrl';
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #333333;
  }

  p {
    max-width: 750px;
    margin-top: 25px;
  }

  .v-enter-from,
  .v-leave-to {
    z-index: -1;
    opacity: 0;
    height: 0;
  }

  .v-enter-active {
    transition: all 0.3s ease-in;
  }

  .v-enter-to,
  .v-leave-from {
    z-index: 1;
    opacity: 1;
    height: auto;
  }

  .v-leave-active {
    transition: all 0s ease-out;
  }
}
</style>
