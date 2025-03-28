<script setup>
import SubTitle from "@/components/SubTitle.vue";
import Table from "@/components/Table.vue";
import TableRowSkeleton from "@/components/TableRowSkeleton.vue";
import CopyPhoneNumber from "@/features/policies/components/CopyPhoneNumber.vue";
import { ref } from "vue";
const entries = ref([
  {
    fullName: "John Doe",
    driverNumber: "945343243",
    provider: "yango",
    tripId: "YN24356925",
    claimFor: "Claim for",
    requestedAt: "This will be a description...",
    status: "Active",
  },
  {
    fullName: "John Doe",
    driverNumber: "945343243",
    provider: "yango",
    tripId: "YN24356925",
    claimFor: "Claim for",
    requestedAt: "This will be a description...",
    status: "Active",
  },
  {
    fullName: "John Doe",
    driverNumber: "945343243",
    provider: "yango",
    tripId: "YN24356925",
    claimFor: "Claim for",
    requestedAt: "This will be a description...",
    status: "Active",
  },
  {
    fullName: "John Doe",
    driverNumber: "945343243",
    provider: "yango",
    tripId: "YN24356925",
    claimFor: "Claim for",
    requestedAt: "This will be a description...",
    status: "Active",
  },
]);
</script>
<template>
  <div class="flex flex-col gap-5">
    <SubTitle title="6 New Claims">
      <template #header>
        <div
          class="border border-secondary rounded-md px-3 py-4 font-bold text-secondary"
        >
          All Claims
        </div>
      </template>
    </SubTitle>
    <div class="flex flex-col gap-4">
      <Table
        :headers="{
          head: [
            'Claim Requester ',
            'Requester Number',
            'Provider',
            'Trip ID',
            'Claim for',
            'Registered At',
            'status',
          ],
          row: [
            'fullName',
            'driverNumber',
            'provider',
            'tripId',
            'claimFor',
            'requestedAt',
            'status',
          ],
        }"
        :rowCom="CopyPhoneNumber"
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
