<script setup>
import InputError from "./InputError.vue";

const props = defineProps(["label", "error"]);
</script>

<template>
  <div class="flex flex-col items-start gap-1">
    <div  class="flex flex-col gap-1 p-2 box-border rounded-md w-full bg-base-clr-1 border-base-clr3 border ">
      <span
        :title="label"
        class="text-sm font-bold capitalize px-1 truncate"
        v-if="label"
        >{{ label }}</span
      >
      <div
        class="focus-within:border-primary overflow-hidden  bg-base-clr-1 border-base-clr3 text-base rounded-md min-h-9 flex"
        :class="$attrs.class"
      >
        <slot></slot>
      </div>
    </div>
    <InputError :error="error" />
  </div>
</template>

<style>
.custom-input,
.custom-input,
.custom-input {
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;
  padding: 0 0.5rem;
  @apply text-sm;
}

textarea.custom-input {
  padding: 0.5rem;
  resize: none;
  height: 6rem;
}

.custom-input:focus {
  box-shadow: none;
}

.custom-input::placeholder {
  color: theme("colors.dark");
  opacity: 0.6;
}
</style>
