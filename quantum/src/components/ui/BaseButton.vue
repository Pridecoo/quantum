<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>

  <a href="" v-else :class="mode">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '#',
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
button,
a {
  display: inline-block;
  min-height: 54px;
  padding: 20px 64px;
  font-family: 'Museo Sans Cyrl';
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #fff;
  background-color: #4f62f6;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: #7181fc;
  }

  &:active {
    background-color: #354bf4;
  }

  &:disabled {
    color: #828282;
    background-color: #e0e0e0;
  }
}

.small {
  min-height: 0;
  padding: 13px 24px;
  font-size: 14px;
  letter-spacing: 0;
}
</style>
