<script setup>
import { mdiMagnify } from "@mdi/js";
import BaseIcon from "./base/BaseIcon.vue";
import { provide, ref, watch } from "vue";
import icons from "@/utils/icons";
import Dropdown from "./Dropdown.vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
  title: {
    Type: String,
  },
});
function logout() {
  localStorage.removeItem("userDetail");
  window.location.href = "/login";
}
const inputData = ref("");
const emit = defineEmits(["update:modelValue"]);

watch(inputData, () => {
  emit("update:modelValue", inputData.value);
});
</script>
<template>
  <div class="flex justify-between items-center px-4 py-2">
    <div class="flex gap-4">
      <button @click="$router.go(-1)">
        <i v-html="icons.back" />
      </button>
      <span class="font-bold">{{ props.title }}</span>
    </div>
    <div class="flex gap-4 items-center">
      <div class="flex gap-2 bg-base-clr2 h-8 px-2 items-center rounded">
        <BaseIcon :path="mdiMagnify" :size="20" />
        <input
          class="border-0 focus:ring-0 bg-transparent placeholder:text-xs"
          placeholder="Search for something"
          v-model="inputData"
          @keydown.enter="emit('sendData', { data: inputData })"
        />
      </div>
      <img src="@/assets/setting.svg" />
      <img src="@/assets/notification.svg" />

      <Dropdown v-slot="{ setRef, toggleDropdown }">
        <button @click="toggleDropdown" class="flex items-center gap-4">
          <img class="w-8 h-8" src="@/assets/profile.svg" />
        </button>
        <div
          class="flex shadow-lg border p-2 mt-6 rounded flex-col gap-2 w-60 bg-white"
          :ref="setRef"
        >
          <button
            title="Edit Package"
            class="mx-1 flex justify-center bg-accent font-bold p-2 items-center gap-2 rounded-lg hover:shadow-xl duration-200"
          >
            <div class="flex flex-row">
              <span>Change password</span>
              <!-- <Icon icon="tabler:edit" class="text-sm" /> -->
            </div>
          </button>
          <button
            @click="logout()"
            title="Edit"
            class="bg-white p-1 rounded-lg hover:shadow-xl duration-200"
          >
            <div
              class="flex flex-row justify-center rounded-lg font-bold bg-accent p-2"
            >
              <span>Logout</span>
              <!-- <Icon icon="tabler:file" class="text-sm" /> -->
            </div>
          </button>
        </div>
      </Dropdown>
    </div>
  </div>
</template>
