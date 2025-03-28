<script setup>
import BaseIcon from "@/components/base/BaseIcon.vue";
import Button from "@/components/Button.vue";
import Dropdown from "@/components/Dropdown.vue";
import SubTitle from "@/components/SubTitle.vue";
import Table from "@/components/Table.vue";
import TableRowSkeleton from "@/components/TableRowSkeleton.vue";
import { openModal } from "@customizer/modal-x";
import { mdiChevronDownBoxOutline } from "@mdi/js";
import { inject, ref, watch } from "vue";
const props = defineProps({
  inputData: {
    type: String,
    default: "",
  },
  search: {
    type: String,
    default: "",
  },
});
watch(
  () => props.search,
  (newValue) => {
    console.log(newValue, "jjjj");
  }
);

const entries = ref([
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
  {
    fullName: "Abebe beso ",
    date: "05-08-2024",
    contactPerson: "Mohammed Kedir",
    phoneNumber: "945343243",
    status: "Active",
  },
]);

const search = inject("search", "");

watch(search, (newValue) => {
  console.log(newValue, "kkk");
});
</script>
<template>
  <div class="flex flex-col gap-5 p-5 bg-white rounded-md">
    <SubTitle title="4 providers">
      <template #header>
        <Button
          @click="openModal('AddProvider')"
          class="bg-primary text-white p-2 rounded-md"
          >Add New Provider</Button
        >
      </template>
    </SubTitle>
    <div class="flex flex-col gap-4">
      <Table
        :headers="{
          head: [
            'Provider Full Name',
            'Registered',
            'Contact Person',
            'Contact Person Number',
            'Status',
            'actions',
          ],
          row: ['fullName', 'date', 'contactPerson', 'phoneNumber', 'status'],
        }"
        :rows="entries"
        :Fallback="TableRowSkeleton"
      >
        <template #actions="{ row }">
          <Dropdown v-slot="{ setRef, toggleDropdown }">
            <Button @click="toggleDropdown">
              <div class="flex gap-2">
                More
                <img src="@/assets/blackDropDown.svg" />
              </div>
            </Button>
            <div
              class="flex shadow-lg border p-2 rounded flex-col gap-2 bg-white"
              :ref="setRef"
            >
              <button
                title="Edit Package"
                class="bg-white mx-1 p-1 flex items-center gap-2 rounded-lg hover:shadow-xl duration-200"
                @click=""
              >
                <div class="flex flex-row">
                  <span>Edit</span>
                </div>
              </button>
              <button
                @click=""
                title="Edit"
                class="bg-white p-1 rounded-lg hover:shadow-xl duration-200"
              >
                <div class="flex flex-row">
                  <span>Deactivate</span>
                </div>
              </button>
              <button
                title="Beneficiary Modal"
                class="bg-white mx-1 p-1 rounded-lg hover:shadow-xl duration-200"
                @click=""
              >
                <div class="flex flex-row whitespace-nowrap">
                  <span>API Configurations </span>
                </div>
              </button>
            </div>
          </Dropdown>
        </template>
      </Table>
    </div>
  </div>
</template>
