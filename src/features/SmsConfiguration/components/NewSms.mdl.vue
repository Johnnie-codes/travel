<script setup>
import FormSubmitButton from "@/components/FormSubmitButton.vue";
import { useForm } from "@/components/new_form_builder/useForm";
import NewFormModal from "@/components/NewFormModal.vue";
import NewFormParent from "@/components/NewFormParent.vue";
import SmsForm from "./SmsForm.vue";
const { submit } = useForm("providerForm");
</script>
<template>
  <NewFormModal
    name="NewSms"
    class="flex justify-center min-h-full w-full overflow-scroll inset-0"
  >
    <NewFormParent title="Adding New Sms">
     <SmsForm />
      <template #bottom>
        <FormSubmitButton
          @click.prevent="submit(submitProvider)"
          class="col-span-2 rounded-full"
          btn-text="Continue"
        />
      </template>
    </NewFormParent>
  </NewFormModal>
</template>
