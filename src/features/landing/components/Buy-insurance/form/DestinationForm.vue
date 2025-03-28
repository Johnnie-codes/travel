<script setup lang="ts">
import Button from "@/components/Button.vue";
import Form from "@/components/new_form_builder/Form.vue";
import Input from "@/components/new_form_elements/Input.vue";
import Select from "@/components/new_form_elements/Select.vue";

const props = defineProps({
  destination: Object,
  onSubmit: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <Form v-slot="{ submit }" id="destinationForm" class="flex flex-col gap-4">
    <Select
      :value="destination?.coverRequiredFor || ''"
      name="coverRequiredFor"
      validation="required"
      label="Destination"
      :attributes="{ type: 'text', placeholder: 'Enter Destination ' }"
      :options="[
        'Africa_Asia',
        'Israel',
        'Schengen',
        'WorldWideBasic',
        'WorldWidePlus',
        'WorldWideExtra',
        'PilgrimageBasic',
        'PilgrimagePlus',
        'PilgrimageExtra',
        'StudentEurope',
        'StudentWorldWide',
      ]"
    />
    <Select
      :options="['Ethiopia']"
      :value="destination?.countryName || 'Ethiopia'"
      name="countryName"
      validation="required"
      label="Country Name"
      :attributes="{
        type: 'text',
        placeholder: 'Select Your Destination',
      }"
    />

    <Input
      :value="destination?.numberOfTravelers"
      name="numberOfTravelers"
      validation="required|num"
      label="Number Of Travelers"
      :attributes="{ placeholder: 'Enter Number Of Travlers ' }"
    />
    <div class="col-span-2 grid grid-cols-2 gap-3">
      <Input
        :value="destination?.startDate || ''"
        name="startDate"
        validation="required"
        label="Trip Start Date"
        :attributes="{ placeholder: 'Enter Trip Start Date ', type: 'date' }"
      />
      <Input
        :value="destination?.endDate || ''"
        name="endDate"
        validation="required"
        label="Trip End Date"
        :attributes="{ placeholder: 'Enter Trip End Date', type: 'date' }"
      />
    </div>
    <Input
      :value="destination?.purposeOfTravel || ''"
      name="purposeOfTravel"
      validation="required"
      label="Purpose Of Travel"
      :attributes="{ placeholder: 'Enter Your Purpose Of Travlers ' }"
    />
    <Input
      :value="destination?.travelAirline || ''"
      name="travelAirline"
      validation="required"
      label="Travel Airline"
      :attributes="{ placeholder: 'Enter Travel Airline ' }"
    />
    <Input
      :value="destination?.destinationAddress || ''"
      name="destinationAddress"
      validation="required"
      label="Destination Address"
      :attributes="{ placeholder: 'Enter Destination Address' }"
    />
    <Input
      :value="destination?.phoneToDestination || ''"
      name="phoneToDestination"
      validation="required|phone"
      label="Phone To Destination"
      :attributes="{ placeholder: 'Enter Phone To Destination' }"
    />
    <Button
      type="primary"
      @click.prevent="submit(({ values }) => onSubmit(values))"
    >
      Add Destination
    </Button>
  </Form>
</template>
