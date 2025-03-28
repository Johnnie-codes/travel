<script setup>
// import { openModal } from "@customizer/modal-x";
import { getColumnValue, toasted } from "@/utils/utils";
import CopyIcon from "@/assets/copyIcon.svg";
const props = defineProps({
  rowData: {
    type: Array,
    required: true,
  },
  headKeys: {
    type: Array,
  },
  rowKeys: {
    type: Array,
    required: true,
  },
});
const copyToClipboard = (phone) => {
  navigator.clipboard.writeText(phone);

  toasted(true, "Phone number copied", "");
};

const emit = defineEmits(["row"]);
console.log(props?.rowData);
</script>

<template>
  <tr
    @click.self="emit('row', row)"
    class="bg-white border-b-[0.2px]"
    :key="idx"
    v-for="(row, idx) in rowData"
  >
    <td class="p-3 opacity-80">{{ idx + 1 }}</td>
    <td class="p-3 opacity-80" :key="key" v-for="key in rowKeys">
      <div class="truncate flex gap-4" v-if="key == 'driverNumber'">
        <p class="">{{ row?.driverNumber }}</p>

        <img
          class="cursor-pointer"
          @click="copyToClipboard(row?.driverNumber)"
          :src="CopyIcon"
        />

        <!-- row?.prescription -->
      </div>
      <span v-else>
        {{ getColumnValue(key, row) }}
      </span>
    </td>
    <td
      class="p-3 flex gap-3"
      v-if="headKeys.find((head) => head.toLowerCase() == 'actions')"
    ></td>
  </tr>
</template>
