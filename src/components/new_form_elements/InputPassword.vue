<script setup>
  import { ref } from 'vue';
  import Input from './Input.vue'

  const props = defineProps({
    attributes: {
      type: Object,
    }
  })

  const text = ref(props.attributes?.type == 'text' ? true : false)

  function toggleType() {
    text.value = !text.value
  }

</script>

<template>
  <Input :attributes="{
    ...attributes,
    type: text ? 'text' : 'password'
  }" >
    <template #left>
      <div class="h-full w-12 grid place-items-center border-r">
        <IIcon
          @click="toggleType"
          :name="text ? 'solar:eye-linear' : 'solar:eye-closed-outline'"
        />
      </div>
    </template>
  </Input>
</template>