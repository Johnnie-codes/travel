<script setup>
import Button from "@/components/Button.vue";
import Form from "@/components/new_form_builder/Form.vue";
import Input from "@/components/new_form_elements/Input.vue";

const props = defineProps({
  passenger: Object,
  onSubmit: Function,
});

function submitForm({ values }) {
  props.onSubmit && props.onSubmit(values);
}

console.log(props.passenger);
</script>

<template>
  <Form v-slot="{ submit }" class="flex flex-col gap-6" id="quotation-form">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-4">
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
        <div class="grid grid-cols-2 gap-3">
          <Input
            name="dateOfBirth"
            validation="required"
            :value="passenger?.dateOfBirth || ''"
            label="Birth Date "
            :attributes="{ placeholder: 'Birth Date ', type: 'date' }"
          />
          <Input
            name="passportNumber"
            validation="required"
            :value="passenger?.passportNumber || ''"
            label="Passport Number "
            :attributes="{ placeholder: 'Passport Number' }"
          />
        </div>
        <Input
          name="telephone"
          validation="required|phone"
          :value="passenger?.telephone || ''"
          label="Telephone "
          :attributes="{ placeholder: 'Telephone' }"
        />
        <Input
          name="email"
          validation="required|email"
          :value="passenger?.email || ''"
          label="Email "
          :attributes="{ placeholder: 'Email' }"
        />
        <div class="grid grid-cols-2 gap-3">
          <Input
            name="citizenship"
            validation="required"
            :value="passenger?.citizenship || 'Ethiopian'"
            label="Citizenship"
            :attributes="{ placeholder: 'Citizenship ' }"
          />
          <Input
            name="city "
            validation="required"
            :value="passenger?.city || ''"
            label="City  "
            :attributes="{ placeholder: 'City ' }"
          />
          <Input
            name="woreda"
            validation="required"
            :value="passenger?.woreda || ''"
            label="Woreda "
            :attributes="{ placeholder: 'Woreda ' }"
          />
          <Input
            name="houseNumber"
            validation="required"
            :value="passenger?.houseNumber || ''"
            label="House Number "
            :attributes="{ placeholder: 'House Number' }"
          />
        </div>
        <Input
          name="chronicIllness"
          validation="required"
          :value="passenger?.chronicIllness || ''"
          label="Chronic Illness (If Any)"
          :attributes="{ placeholder: 'Select Chronic Illness' }"
        />
      </div>
      <Button
        @click.prevent="submit(submitForm)"
        type="primary"
      >
        Add
      </Button>
    </div>
  </Form>
</template>
