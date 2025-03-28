<script setup>
import Table from "@/components/Table.vue";
import DependantForm from "./form/DependantForm.vue";
import { ref, computed } from "vue";
import { genId, secondDateFormat, toasted } from "@/utils/utils";
import { usePassenger } from "@/features/passenger/store/passengerStore";
import { useQuotaion } from "../quotaion/store/quotaionStore";
import Button from "@/components/Button.vue";
import { useApiRequest } from "@/composables/useApiRequest";
import { createPassengers } from "@/features/passenger/api/PassengerApi";

const quotaionStore = useQuotaion();

function submit(values) {
  console.log(values);
  const idx = quotaionStore.quotation.dependents.findIndex(
    (el) => el.id == values.id
  );

  if (idx == -1) {
    quotaionStore.quotation.dependents.unshift({
      id: genId.next().value,
      ...values,
    });
  } else {
    quotaionStore.quotation.dependents.splice(idx, 1, {
      id: genId.next().value,
      ...values,
    });
  }
}

const req = useApiRequest();
function send() {
  if (
    (quotaionStore.quotation.dependents.length + 1) !=
    quotaionStore.quotation.destination.numberOfTravelers
  ) {
    toasted(false, "", "Fill All The passengers");
    return;
  }

  if (req.pending.value) return;

  req.send(
    () =>
      createPassengers({
        ...quotaionStore.quotation.passenger,
        referenceCode: quotaionStore.quotation.summery.referenceCode,
        destination: quotaionStore.quotation.destination,
        dependents: quotaionStore.quotation.dependents,
      }),
    (res) => {
      toasted(res.success, 'Successfully Created!', res.error)
    }
  );
}

const active = ref(1);
// Computed property to merge dependants and passengers
const thisPass = computed(
  () => (id) => quotaionStore.quotation.dependents.find((el) => el.id == id)
);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2 border-b pb-2">
      <button
        :key="pass"
        @click="active = pass"
        v-for="pass in parseInt(
          quotaionStore.quotation.destination?.numberOfTravelers
        ) - 1 || 0"
        :class="[active == pass && 'bg-secondary text-white']"
        class="px-4 py-2 rounded-md cursor-pointer"
      >
        Paggenger {{ pass }}
      </button>
    </div>
    <template
      :key="pass"
      v-for="pass in parseInt(
        quotaionStore.quotation.destination?.numberOfTravelers
      ) - 1 || 0"
    >
      <KeepAlive>
        <component
          v-if="active == pass"
          :is="DependantForm"
          :passenger="thisPass(pass) || {}"
          :onSubmit="submit"
        />
      </KeepAlive>
    </template>
    <div class="border-t flex items-stretch py-2">
      <Button :pending="req.pending.value" @click="send" type="secondary" class="w-full"> Submit </Button>
    </div>
  </div>
</template>

<style>
.dep-form th,
.dep-form td {
  padding: 0.5rem !important;
}
</style>
