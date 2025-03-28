<script setup>
import { ref, watch } from "vue";
import InputParent from "../new_form_builder/InputParent.vue";
import InputLayout from "./NewInputLayout.vue";

const props = defineProps({
  obj: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    required: true,
  },
  value: [Number, Object, String, Array],
  modelValue: {
    type: [String, Number], // Adjust based on your use case
    default: "",
  },
});

const value = ref(props.modelValue || props.value)
const emit = defineEmits(["update:modelValue"]);

console.log(value.value)
watch(() => props.value, () => {
  value.value = props.value
}, {immediate: true})
</script>

<template>
  <InputParent v-model="value" v-slot="{ setRef, error, attributes }">
    <InputLayout
      :class="$attrs.class + ' relative'"
      :error="error"
      :label="$attrs.label"
    >
      <div class="flex items-center h-full flex-1">
        <slot name="left"></slot>
        <select
          :style="{
            opacity: attributes?.placeholder && !modelValue ? 0.6 : 1,
          }"
          :ref="setRef"
          class="appearance-none flex-1 text-text-clr h-full text-sm"
          :value="value"
          @change="(e) => emit('update:modelValue', e.target.value)"
        >
          <!-- Placeholder Option -->
          <option value="" disabled>
            {{ attributes?.placeholder }}
          </option>
          <!-- Options -->
          <template v-if="!obj">
            <option
              class="text-sm px-4"
              :key="option"
              :value="option"
              :selected="value == option"
              v-for="option in options"
            >
              {{ option }}
            </option>
          </template>
          <template v-else>
            <option
              :key="option.value"
              :value="option.value"
              :selected="value == option.value"
              v-for="option in options"
            >
              {{ option.label }}
            </option>
          </template>
        </select>
        <div class="absolute pointer-events-none top-0 right-0 h-full">
          <slot name="right">
            <div class="h-full ml-auto w-8 flex items-center justify-center">
              <IIcon name="material-symbols:keyboard-arrow-down" />
            </div>
          </slot>
        </div>
      </div>
    </InputLayout>
  </InputParent>
</template>
