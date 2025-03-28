<script setup>
import Input from "@/components/new_form_elements/Input.vue";
import Select from "@/components/new_form_elements/Select.vue";
import Textarea from "@/components/new_form_elements/Textarea.vue";
import NewFormLayout from "@/components/NewFormLayout.vue";
</script>
<template>
  <NewFormLayout :inner="false" id="providerForm">
    <Input
      label="Provider Full Name "
      name="firstName"
      :attributes="{
        placeholder: 'Provider Full Name ',
      }"
      validation="required"
    />
    <Input
      label="Contact Person Name "
      name="phoneNumber"
      :attributes="{
        placeholder: 'Contact Person Name ',
      }"
      validation="required"
    />

    <Input
      label="Contact Person Number"
      name="phoneNumber"
      :attributes="{
        placeholder: 'Contact Person Number',
      }"
      validation="required|phone"
    />

    <Input
      label="Status"
      name="status"
      :attributes="{
        placeholder: 'Status',
      }"
    />
    <div class="col-span-2">
      <Textarea
        label="Memo"
        name="memo"
        :attributes="{
          placeholder: 'Memo',
        }"
      />
    </div>
  </NewFormLayout>
</template>
