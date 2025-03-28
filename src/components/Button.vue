<script setup>
const props = defineProps({
  pending: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "sm",
  },
  type: {
    type: String,
  },
});
</script>
<template>
  <button
    v-ripple
    :class="[$style?.[size], $style?.[type]]"
    class="px-4 py-1 relative rounded capitalize"
  >
    <slot v-if="!pending"></slot>
    <p v-else class="absolute inset-0 backdrop-blur-lg bg-inherit flex justify-center items-center" >
      <IIcon icon="svg-spinners:gooey-balls-2" />
    </p>
  </button>
</template>

<style>
.__ripple {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.__ripple .__ripple_child {
  z-index: -1;
  position: absolute;
  width: 0px;
  height: 0px;
  background-color: #ddd;
  border-radius: 99999px;
  transform: translate3d(-50%, -50%, 0);
  pointer-events: none;
}

.__ripple_animation {
  top: var(--y);
  left: var(--x);
  animation: ripple 0.4s ease-out;
}

@keyframes ripple {
  100% {
    width: var(--btnWidth);
    height: var(--btnWidth);
    opacity: 0;
  }
}
</style>
<style module>
.xs {
  width: auto;
  height: auto;
}

.sm {
  min-width: 3.6rem;
  min-height: 2.5rem;
}

.md {
  min-width: 6.8rem;
  min-height: 2.5rem;
}

.lg {
  min-width: 6.8rem;
  min-height: 2.5rem;
}

.secondary {
  @apply bg-secondary text-white;
}

.primary {
  @apply bg-primary text-white;
}
</style>
