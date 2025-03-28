<script setup>
import SubTitle from "@/components/SubTitle.vue";
import Table from "@/components/Table.vue";
import TableRowSkeleton from "@/components/TableRowSkeleton.vue";
import { ref } from "vue";
import CopyPhoneNumber from "../components/CopyPhoneNumber.vue";
import Button from "@/components/Button.vue";
const entries = ref([
  {
    tripID: "gerfra123",
    passangerName: "Girma Lelisa",
    driverName: "Mohammed Kedir",
    Duration: "30 days",
    policyNumber: "LI2907502",
    startingDate: "12 12 2024",
  },
  {
    tripID: "gerfra123",
    passangerName: "Girma Lelisa",
    driverName: "Mohammed Kedir",
    Duration: "30 days",
    policyNumber: "LI2907502",
    startingDate: "12 12 2024",
  },
  {
    tripID: "gerfra123",
    passangerName: "Girma Lelisa",
    driverName: "Mohammed Kedir",
    Duration: "30 days",
    policyNumber: "LI2907502",
    startingDate: "12 12 2024",
  },
  {
    tripID: "gerfra123",
    passangerName: "Girma Lelisa",
    driverName: "Mohammed Kedir",
    Duration: "30 days",
    policyNumber: "LI2907502",
    startingDate: "12 12 2024",
  },
]);
// import Title from "@/components/title.vue";
</script>
<template>
  <div class="flex flex-col gap-5 bg-white rounded-md p-5">
    <SubTitle title="13 Trips">
      <template #header>
        <div class="flex gap-5">
          <Button @click="$router.push('/newpolicy')"
            class="border flex gap-2 border-primary rounded-md whitespace-nowrap items-center font-bold text-primary"
          >
            new Policy<img src="@/assets/dropDown.svg" />
          </Button>
         
        </div>
      </template>
    </SubTitle>
    <div class="flex flex-col gap-4">
      <Table
        :headers="{
          head: [
            'Trip ID',
            'Passenger Name',
            'Destination',
            'duration',
            'PolicyNumber',
            // 'premium amount',
          ],
          row: [
            'tripID',
            'passangerName',
            'Duration',
            'policyNumber',
            'startingDate',
          ],
        }"
        :rows="entries"
        :Fallback="TableRowSkeleton"
      >
        <template #actions="{ row }">
          <Button
            v-if="row.quantity > 0"
            @click.stop="addMed(row)"
            class="text-sm"
            size="xs"
            :type="row.quantity > 0 ? 'secondary' : 'primary'"
          >
            Add
          </Button>
        </template>
      </Table>
    </div>
  </div>
</template>
