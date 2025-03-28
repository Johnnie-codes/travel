<script setup>
import Card from "@/components/Card.vue";
import { ref } from "vue";
import premium from "@/assets/premium.svg";
import today from "@/assets/todays.svg";
import policy from "@/assets/policy.svg";
import policy2 from "@/assets/policy2.svg";
import Table from "@/components/Table.vue";
import TableRowSkeleton from "@/components/TableRowSkeleton.vue";
import Status_row from "./components/Status_row.vue";
import { chartData } from "@/components/charts/ChartDatas";
const data = ref([
  {
    title: "Total Premium",
    Image: premium,
    amount: "10,293",
    today: today,
    percent: "8.5%",
  },
  {
    title: "Total Policies ",
    Image: policy,
    amount: "10,293",
    today: today,
    percent: "8.5%",
  },
  {
    title: "Total Policies ",
    Image: policy2,
    amount: "10,293",
    today: today,
    percent: "8.5%",
  },
]);
const entries = ref([
  {
   
    totalTrips: "YT298563",
    passenger: "Mohammed Kedir",
    driverNumber: "945343243",
    driver: "Mohammed Kedir",
    policyNumber: "LI2907502",
    status: "Started",
  },
  {
   
    totalTrips: "YT298563",
    passenger: "Mohammed Kedir",
    driverNumber: "945343243",
    driver: "Mohammed Kedir",
    policyNumber: "LI2907502",
    status: "On going",
  },
  {
   
    totalTrips: "YT298563",
    passenger: "Mohammed Kedir",
    driverNumber: "945343243",
    driver: "Mohammed Kedir",
    policyNumber: "LI2907502",
    status: "Just ended",
  },
]);
const TotalNumberOfPremiumOptions = ref(
  chartData.TotalNumberOfInsuredPersonsByInstitutionOptions
);
const TotalNumberOfPremium = ref(
  chartData.TotalNumberOfInsuredPersonsByInstitution
);
</script>
<template>
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-3 gap-4">
      <Card :data="data" />
    </div>
    <div class="flex flex-col gap-6 bg-white rounded-md p-4">
      <div class="flex justify-between">
        <p class="font-bold">Active Trips</p>
        <p class="font-bold">(43 Trips)</p>
      </div>
      <Table
        :headers="{
          head: [
            // 'Company',
            'TripId',
            'Passenger Name',
            'Driver Phone Number',
            'Driver Name',
            'Policy Number',
            'Status',
          ],
          row: [
            // 'company',
            'totalTrips',
            'passenger',
            'driverNumber',
            'driver',
            'policyNumber',
            'status',
          ],
        }"
        :rowCom="Status_row"
        :rows="entries"
        :Fallback="TableRowSkeleton"
      >
      </Table>
    </div>
    <div class="grid gap-4 grid-cols-7 pr-8">
      <div class="col-span-2 bg-white rounded-lg p-4 flex flex-col gap-4">
        <p class="font-bold leading-5">Invoice Logs</p>
        <div class="flex flex-col gap-2 border-b pb-4">
          <p class="bg-primary rounded text-white w-fit px-2 py-1">
            16 Aug, 2024
          </p>
          <div class="flex gap-4">
            <div class="border-r pr-8">
              <p class="text-xs">Budget</p>
              <p class="font-bold">$98,450</p>
            </div>
            <div>
              <p class="text-xs">Budget</p>
              <p class="font-bold">$98,450</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 border-b pb-4">
          <p class="bg-primary rounded text-white w-fit px-2 py-1">
            16 Aug, 2024
          </p>
          <div class="flex gap-4">
            <div class="border-r pr-8">
              <p class="text-xs">Budget</p>
              <p class="font-bold">$98,450</p>
            </div>
            <div>
              <p class="text-xs">Budget</p>
              <p class="font-bold">$98,450</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full col-span-5 bg-white p-4 rounded-[10px]">
        <span class="text-lg text-ellipsis flex"> Premium </span>
        <span class="leading-6 text-2xl">ETB 63,489.50</span>
        <p class="text-xs">Total Premium</p>
        <apexchart
          type="area"
          height="200"
          :options="TotalNumberOfPremiumOptions"
          :series="TotalNumberOfPremium"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
