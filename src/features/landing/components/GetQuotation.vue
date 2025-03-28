<script setup>
import QuotaionForm from "./quotaion/form/QuotaionForm.vue";
import { useQuotaion } from "./quotaion/store/quotaionStore";
import { useApiRequest } from "@/composables/useApiRequest";
import { createpremium } from "./quotaion/api/QuotationApi";
import { useRouter } from "vue-router";
import { toasted } from "@/utils/utils";

const quotaionStore = useQuotaion();
const router = useRouter()
const req = useApiRequest();

function submit(values) {
  req.send(
    () => createpremium(values),
    (res) => {
      if (res.success) {;
        quotaionStore.setSummery(res.data);
        quotaionStore.setDestination(values)
      } else {
        toasted(false, '', res.error || "Submission failed. Please try again.");
      }
    }
  );
}
</script>
<template>
  <QuotaionForm :pending="req.pending.value" :onSubmit="submit" />
</template>