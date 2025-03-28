<script setup>
import { useForm } from "@/components/new_form_builder/useForm";
import NewFormParent from "@/components/NewFormParent.vue";
import { useApiRequest } from "@/composables/useApiRequest";
import { createPermission, createPolicy } from "@/features/privilages/api/permissionsApi";
import { usePrivileges } from "@/features/privilages/store/privilegesStore";
import Button from "@/components/Button.vue";
import { toasted } from "@/utils/utils";
import icons from "@/utils/icons";
import policyForm from "@/features/new policies/form/newPolicyFrom.vue"
import { openModal } from "@customizer/modal-x";






const req = useApiRequest();
const privilegesStore = usePrivileges();

const { submit } = useForm("policyForm");
function create({ values, reset }) {
  console.log(values)
  values.destination={
    countryName:values.countryName,
    startDate: values.startDate,
    endDate: values.endDate,
    numberOfTravelers: 0
  }
  console.log(values)

  req.send(
    () => createPolicy([values]),
    (res) => {
      if (res.success) {
openModal('policyForm')        
        reset();
      }
      toasted(res.success, "policy Created Successfully", res.error);
    }
  );
}
</script>
<template>
  <NewFormParent size="xl" title="Create Policy">
    
    <policyForm />
    <template #bottom>
      <div class="flex justify-end">
        <Button
          class="flex items-center gap-3"
          :pending="req.pending.value"
          type="primary"
          @click.prevent="submit(create)"
        >
          <!-- <i class="pb-[3px]" v-html="icons.plus" /> -->
          Add New policy
        </Button>
      </div>
    </template>
  </NewFormParent>
</template>
