<script setup>
import DataTable from "./DataTable.vue";
import { inject, ref, useAttrs, watch } from "vue";
import GenericTableRow from "./GenericTableRow.vue";
import TableRowSkeleton from "./TableRowSkeleton.vue";

const emit = defineEmits([
  "row",
  "action:certificate",
  "action:delete",
  "action:review",
  "action:suspend",
  "action:edit",
  "bottom",
]);

const props = defineProps({
  showPagination: {
    type: Boolean,
    default: true,
  },
  rowCom: Object,
  actionHide: String,
  headers: {
    type: [Array, Object],
    required: true,
  },
  rows: {
    type: Array,
    default: [],
  },
  firstCol: { type: Boolean, default: false },
  placeholder: String,
  photoRow: Object,
  cells: Object,
  actions: Array,
  exceptions: Array,
  length: Number,
  Fallback: {
    type: Object,
    default: TableRowSkeleton,
  },
  pending: Boolean,
});

function toUpper(str) {
  let words = str.split(" ");
  if (words.length == 0) return str;

  for (let i = 1; i < words.length; i++) {
    words[0] += words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }

  return words[0];
}

const spec = ref({ head: [], row: [] });

function format() {
  if (Array.isArray(props.headers)) {
    spec.value.head = props.headers;

    const res = props.headers.reduce((state, el) => {
      const temp = el.toLowerCase();
      state.push(toUpper(temp));
      return state;
    }, []);

    spec.value.row = res.filter((el) => el != "modify");
  } else {
    spec.value.head = props.headers?.head || [];
    spec.value.row = props.headers?.row || [];
  }
}

format();

watch(
  () => props.headers,
  () => {
    format();
  }
);

const nextPage = inject("next", null);
const previousPage = inject("previous", null);
</script>
<template>
  <DataTable
    :firstCol="props.firstCol"
    class="bg-table-clr border border-white/10"
    :headers="spec.head"
  >
    <template v-if="rowCom">
      <component
        :is="rowCom"
        v-bind="{
          cells: cells,
          headKeys: spec.head,
          rowData: rows,
          rowKeys: spec.row,
        }"
      />
    </template>
    <template v-else>
      <GenericTableRow
        @row="(row) => emit('row', row)"
        :firstCol="props.firstCol"
        :head-keys="spec.head"
        :row-data="rows"
        :row-keys="spec.row"
        :cells="cells"
      >
        <template v-if="firstCol" #select="{ row }">
          <slot name="select" :row="row" />
        </template>
        <template #actions="{ row }">
          <slot name="actions" :row="row" />
        </template>
      </GenericTableRow>
      <tr v-if="!rows?.length && !pending">
        <td :colspan="spec.head.length + 1">
          <p class="text-center p-2 font-semibold text-lg">
            {{ placeholder ? placeholder : "No Data Found" }}
          </p>
        </td>
      </tr>
    </template>
    <template v-if="pending">
      <component
        :cols="spec.head.length + 1"
        :key="num"
        v-for="num in 25"
        :is="Fallback"
      />
    </template>
  </DataTable>
</template>
