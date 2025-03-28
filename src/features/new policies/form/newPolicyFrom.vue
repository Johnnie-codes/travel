<script setup>
import { Form, Input } from "@/components/new_form_elements";
import { reactive, watch } from "vue";

const props = defineProps({
  privilege: Object,
  onSubmit: {
    type: Function,
  },
});

const formData = reactive({
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  passportNumber: '',
  telephone: '',
  destination: {
    countryName: '',
    startDate: '',
    endDate: '',
    numberOfTravelers: 1 // Start with 1 traveler by default
  },
});

// This will hold the duplicated traveler form data
const travelersData = reactive([]);

const initializeTravelers = () => {
  travelersData.length = 0; // Clear existing travelers data
  for (let i = 0; i < formData.destination.numberOfTravelers-1; i++) {
    travelersData.push({ firstName: '', lastName: '' });
  }
};

// Watch for changes in numberOfTravelers and update the travelers data
watch(() => formData.destination.numberOfTravelers, (newVal) => {
  initializeTravelers();
});

// Initialize travelers on component setup
initializeTravelers();
</script>

<template>
<Form
  class="grid grid-cols-3 gap-4 grid-rows-3"
  :inner="false"
  id="policyForm"
  v-slot="{}"
>
  <Input
    name="firstName"
    validation="required"
    label="First Name"
    :value="formData.firstName || ''"
    :attributes="{ placeholder: 'Enter first name' }"
  />
  <Input
    name="lastName"
    validation="required"
    label="Last Name"
    :value="formData.lastName || ''"
    :attributes="{ placeholder: 'Enter last name' }"
  />
  <Input
    name="dateOfBirth"
    validation="required"
    label="Date of Birth"
    :value="formData.dateOfBirth || ''"
    :attributes="{ 
      type:'date',
      placeholder: 'Enter date of birth' }"
  />
  <Input
    name="passportNumber"
    validation="required"
    label="Passport Number"
    :value="formData.passportNumber || ''"
    :attributes="{ placeholder: 'Enter passport number' }"
  />
  <Input
    name="telephone"
    validation="required"
    label="Telephone"
    :value="formData.telephone || ''"
    :attributes="{ placeholder: 'Enter telephone number' }"
  />
  <Input
    name="countryName"
    validation="required"
    label="Destination Country"
    :value="formData.destination?.countryName || ''"
    :attributes="{ placeholder: 'Enter destination country' }"
  />
  <Input
    name="startDate"
    validation="required"
    label="Start Date"
    :value="formData.destination?.startDate || ''"
    :attributes="{ type: 'date', placeholder: 'Enter start date' }"
  />
  <Input
    name="endDate"
    validation="required"
    label="End Date"
    :value="formData.destination?.endDate || ''"
    :attributes="{ type: 'date', placeholder: 'Enter end date' }"
  />
  <Input
    name="numberOfTravelers"
    validation="required"
    label="Number of Travelers"
    v-model="formData.destination.numberOfTravelers"
    :attributes="{ type: 'number', min: 1, placeholder: 'Enter number of travelers' }"
  />

  <div v-for="(traveler, index) in travelersData" :key="index" class="col-span-3">
    <h3>Traveler {{ index + 2 }}</h3>
    <div class="grid grid-cols-3 gap-4 grid-rows-3">
    <Input
    name="firstName"
    validation="required"
    label="First Name"
    :value="formData.firstName || ''"
    :attributes="{ placeholder: 'Enter first name' }"
  />
  <Input
    name="lastName"
    validation="required"
    label="Last Name"
    :value="formData.lastName || ''"
    :attributes="{ placeholder: 'Enter last name' }"
  />
  <Input
    name="dateOfBirth"
    validation="required"
    label="Date of Birth"
    :value="formData.dateOfBirth || ''"
    :attributes="{ placeholder: 'Enter date of birth' }"
  />
  <Input
    name="passportNumber"
    validation="required"
    label="Passport Number"
    :value="formData.passportNumber || ''"
    :attributes="{ placeholder: 'Enter passport number' }"
  />
  <Input
    name="telephone"
    validation="required"
    label="Telephone"
    :value="formData.telephone || ''"
    :attributes="{ placeholder: 'Enter telephone number' }"
  />
  <Input
    name="countryName"
    validation="required"
    label="Destination Country"
    :value="formData.destination?.countryName || ''"
    :attributes="{ placeholder: 'Enter destination country' }"
  />
  <Input
    name="startDate"
    validation="required"
    label="Start Date"
    :value="formData.destination?.startDate || ''"
    :attributes="{ type: 'date', placeholder: 'Enter start date' }"
  />
  <Input
    name="endDate"
    validation="required"
    label="End Date"
    :value="formData.destination?.endDate || ''"
    :attributes="{ type: 'date', placeholder: 'Enter end date' }"
  />
</div>
  </div>
</Form>
</template>