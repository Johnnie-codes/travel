<script setup>
import Table from "@/components/Table.vue";
import TablePage from "@/components/TablePage.vue";
import DataTable from "@/components/tables/DataTable.vue";
import { ref } from "vue";
import { getPassenger } from "../api/PassengerApi";
import { usePassenger } from "../store/passengerStore";
import { removeUndefined } from "@/utils/utils";
import { usePagination } from "@/composables/usePagination";
import { useApiRequest } from "@/composables/useApiRequest";

import Button from "@/components/Button.vue";


const passenger = usePassenger();








const hasActions = ref(false);
const hasFooter = ref(true);
const textMessage = ref("");


const pagination = usePagination({
  cb: getPassenger
})

</script>

<template>
  <TablePage>



    <Table
      :pending="pagination.pending.value"
      :headers="{
        head: [ 
        'first Name',
          'last Name',
          'date Of Birth',
          'age',
          'passport Number',
          'telephone',
          'policy',
          'actions',
        ],
        row: [
          'firstName',
          'lastName',
          'dateOfBirth',
          'age',
          'passportNumber',
          'telephone',
          'policy',
        ],
      }"
      :rows="pagination.data.value || []"
      
      
    
    >
     
    </Table>
  </TablePage>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=DM Sans");
@import url("https://fonts.googleapis.com/css?family=Ubuntu");

h3 {
  font-family: "Ubuntu";
  font-size: 14px;
  font-weight: 400;
  color: #343c6a;
}
</style>
