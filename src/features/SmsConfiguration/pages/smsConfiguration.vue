<script setup>
import SubTitle from "@/components/SubTitle.vue";
import Table from "@/components/Table.vue";
import Dropdown from "@/components/Dropdown.vue";
import TableRowSkeleton from "@/components/TableRowSkeleton.vue";
import CopyPhoneNumber from "@/features/policies/components/CopyPhoneNumber.vue";
import { openModal } from "@customizer/modal-x";
import { mdiChevronDownBoxOutline } from "@mdi/js";
import { ref, watch } from "vue";




const entries = ref([
  {
    fullName: "Trip Started",
    sendingTime:
      "Your trip has started, and you’re insured by Lion Insurance SC under our Personal Accident Insurance. Your policy number is: &&Policy_Number. Have a safe and pleasant ride! Visit claim/lioninsurance.com for any claim.",
    reciever: "yango",
    provider: "yango",
    tripId: "YN24356925",
    claimFor: "Claim for",
    requestedAt: "This will be a description...",

    status: "Active",
  },
  {
    fullName: "Trip Ended",
    sendingTime:
      "Your trip has ended, and your insurance policy with Lion Insurance SC under our Personal Accident Insurance has now expired. We hope you had a safe journey! If you need to make a claim, visit claim/lioninsurance.com.",
    reciever: "yango",
    driverNumber: "945343243",
    provider: "yango",
    tripId: "YN24356925",
    claimFor: "Claim for",
    requestedAt: "This will be a description...",
    status: "Active",
  },
  {
    fullName: "Claim Submitted",
    sendingTime:
      "Your claim has been successfully submitted. A Lion Insurance SC claims officer will be assigned to your case and will contact you or your designated contact person shortly. Thank you for your patience!",
    reciever: "yango",
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
    <SubTitle>
   
        <template #header>
        <Button
          @click="openModal('NewSms')"
          class="bg-primary text-white p-2 rounded-md"
          >New Sms</Button
        >
      
      </template>
    </SubTitle>

    <div class="flex flex-col gap-4">
      <Table
        :headers="{
          head: ['Trigger', 'Messages', 'provider', 'Actions'],
          row: ['fullName', 'sendingTime', 'reciever'],
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
                title="Edit "
                class="bg-white mx-1 p-1 flex items-center gap-2 rounded-lg hover:shadow-xl duration-200"
                @click=""
              >
                <div class="flex flex-row">
                  <span>Edit</span>
                </div>
              </button>
             
              <button
                title="Block"
                class="bg-white mx-1 p-1 rounded-lg hover:shadow-xl duration-200"
                @click=""
              >
                <div class="flex flex-row whitespace-nowrap">
                  <span>Block </span>
                </div>
              </button>
            </div>
          </Dropdown>
        </template>
      </Table>
    </div>
  </div>
</template>
