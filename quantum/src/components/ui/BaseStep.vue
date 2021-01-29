<template>
  <li :class="mode">
    <div>
      {{ headline }}
    </div>

    <p>{{ content }}</p>
  </li>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    headline: {
      type: String,
      required: true,
      default: 'Headline',
    },
    content: {
      type: String,
      required: true,
      default: 'Your content text.',
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  position: relative;
  transform-style: preserve-3d;
  max-width: 483px;
  padding: 23px 32px 32px;
  background-color: #fff;
  border: 2px solid #6248ff;
  border-radius: 30px;

  &::marker {
    font-family: 'Museo Sans Cyrl';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #6248ff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 42%;
    left: calc(50% + 132px);
    width: 100%;
    height: 100%;
    border-top: 3px dotted #6248ff;
    border-right: 3px dotted #6248ff;
    border-radius: 0 30px 0 0;
    transform: translateZ(-1px);
  }

  &.right {
    margin-left: auto;
    margin-top: -50px;

    &::after {
      top: 50%;
      left: initial;
      right: calc(50% + 132px);
      border-top: 3px dotted #6248ff;
      border-left: 3px dotted #6248ff;
      border-right: none;
      border-radius: 30px 0 0 0;
    }
  }

  & + & {
    margin-top: -30px;
  }

  &:last-of-type {
    &::after {
      content: none;
    }
  }
}

div {
  font-family: Museo Sans Cyrl;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
}

p {
  margin-top: 24px;
}
</style>
