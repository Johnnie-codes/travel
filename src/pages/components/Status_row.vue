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
    <td class="p-3">{{ idx + 1 }}</td>
    <td class="p-3" :key="key" v-for="key in rowKeys">
      <div class="truncate flex gap-4" v-if="key == 'status'">
        <p
          v-if="row?.status == 'Started'"
          class="bg-[#00B69B] text-white px-4 py-1 rounded-full"
        >
          {{ row?.status }}
        </p>
        <p
          v-else-if="row?.status == 'On going'"
          class="bg-[#FCBE2D] px-4 py-1 rounded-full text-white"
        >
          {{ row?.status }}
        </p>
        <p
          v-else-if="row?.status == 'Just ended'"
          class="bg-[#ff0000] px-4 py-1 rounded-full text-white"
        >
          {{ row?.status }}
        </p>
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
