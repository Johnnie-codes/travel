<script setup>
import { useQuotaion } from "../quotaion/store/quotaionStore";
import PassemgerForm from "./form/PassemgerForm.vue";

const props = defineProps({
  next: {
    type: Function,
    required: true,
  },
});

const quotationStore = useQuotaion();
function submit(values) {
  quotationStore.setPassenger(values);
  props.next && props.next();
}
</script>

<template>
  <PassemgerForm
    :passenger="quotationStore.quotation.passenger"
    :onSubmit="submit"
  />
</template>
