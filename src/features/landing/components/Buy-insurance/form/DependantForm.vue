<script setup>
import Button from "@/components/Button.vue";
import Form from "@/components/new_form_builder/Form.vue";
import Input from "@/components/new_form_elements/Input.vue";
import Select from "@/components/new_form_elements/Select.vue";

const props = defineProps({
  passenger: Object,
  onSubmit: Function,
});

function submitForm({ values, reset }) {
  props.onSubmit && props.onSubmit({
    ...values,
    ...(props.passenger || {})
  });
}
</script>

<template>
  <Form v-slot="{ submit }" class="flex flex-col gap-6" id="quotation-form">
    <Input
      name="firstName"
      validation="required"
      :value="passenger?.firstName || ''"
      label="First Name"
      :attributes="{ placeholder: 'Enter First Name ' }"
    />

    <Input
      name="lastName"
      validation="required"
      :value="passenger?.lastName || ''"
      label="Last Name"
      :attributes="{ placeholder: 'Enter Last Name ' }"
    />
    <Input
      name="passportNumber"
      validation="required"
      :value="passenger?.passportNumber || ''"
      label="Passport Number"
      :attributes="{ placeholder: 'Enter Passport Number ' }"
    />
    <div class="grid grid-cols-2 gap-3">
      <Input
        name="dateOfBirth"
        validation="required"
        :value="passenger?.dateOfBirth || ''"
        label="Birth Date "
        :attributes="{ placeholder: 'Birth Date ', type: 'date' }"
      />
      <Select
        name="relationship"
        :options="['Father', 'Mother', 'Child', 'Spouse', 'Other']"
        validation="required"
        :value="passenger?.relationship || ''"
        label="Relationship "
        :attributes="{ type: 'text', placeholder: 'Relationship' }"
      />
    </div>
    <Input
      name="chronicIllness"
      validation="required"
      :value="passenger?.dateOfBirth || ''"
      label="Cronic illness"
      :attributes="{ placeholder: 'Chronic Illness ' }"
    />
    <div class="flex justify-end" >
      <Button
        @click.prevent="submit(submitForm)"
        type="primary"
      >
        Add
      </Button>
    </div>
  </Form>
</template>