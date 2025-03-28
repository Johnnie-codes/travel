<script setup>
import Button from "@/components/Button.vue";
import Form from "@/components/new_form_builder/Form.vue";
import Input from "@/components/new_form_elements/Input.vue";
import Select from "@/components/new_form_elements/Select.vue";

import router from "@/router";
import { computed, reactive, ref, watch } from "vue";
import { createpremium } from "../api/QuotationApi";
import InputParent from "@/components/new_form_builder/InputParent.vue";
import { genId } from "@/utils/utils";

const props = defineProps({
  pending: {
    type: Boolean,
    default: false,
  },
  onSubmit: {
    type: Function,
  },
});

// Define reactive state
const formData = reactive({
  coverrequiredFor: "",
  startDate: "",
  endDate: "",
  numberOfTravelers: "",
  travelerAges: "",
});

const destinations = [
  "Africa_Asia",
  "Israel",
  "Schengen",
  "WorldWideBasic",
  "WorldWidePlus",
  "WorldWideExtra",
  "PilgrimageBasic",
  "PilgrimagePlus",
  "PilgrimageExtra",
  "StudentEurope",
  "StudentWorldWide",
];
console.log(destinations);
function submitForm({ values }) {
  console.log(values);

  props.onSubmit && props.onSubmit(values);
}

const numberOfTravelers = ref(0);

const travlersAges = ref([]);
const travlersAgesValues = ref([]);

const validNumberOfTravlers = computed(() => {
  return numberOfTravelers.value > 10 ? 10 : numberOfTravelers.value;
});

const thisAge = computed(() => {
  return (id) => travlersAges.value.find((el) => el.id == id);
});

watch(numberOfTravelers, () => {
  travlersAges.value = [];
  for (let i = 0; i < validNumberOfTravlers.value; i++) {
    travlersAges.value.push({
      id: genId.next().value,
      age: "",
    });
  }
});

watch(
  travlersAges,
  () => {
    travlersAgesValues.value = travlersAges.value.map((el) => el.age);
  },
  { deep: true }
);
</script>

<template>
  <Form v-slot="{ submit }" class="flex flex-col gap-6" id="quotation-form">
    <Select
      name="coverRequiredFor"
      validation="required"
      v-model="formData.coverrequiredFor"
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

    <div class="grid grid-cols-2 gap-3">
      <Input
        name="startDate"
        validation="required"
        :value="formData.startDate || ''"
        label="Trip Start Date"
        :attributes="{ placeholder: 'Enter Trip Start Date ', type: 'date' }"
      />
      <Input
        name="endDate"
        validation="required"
        label="Trip End Date"
        :attributes="{ placeholder: 'Enter Trip End Date', type: 'date' }"
      />
    </div>

    <Input
      v-model="numberOfTravelers"
      name="numberOfTravelers"
      label="NumberofTravelers "
      validation="required|num"
      :attributes="{ type: 'text', placeholder: 'Enter Number of Travelers' }"
    />

    <div
      v-if="validNumberOfTravlers > 0"
      class="grid grid-cols-2 gap-6 col-span-2"
    >
      <InputParent
        v-slot="{ setRef }"
        v-model="travlersAgesValues"
        name="travelerAges"
        validation="required"
      >
        <div class="box-border grid grid-cols-2 gap-6 col-span-2" :ref="setRef">
          <Input
            v-model="age.age"
            :key="age.id"
            :skip="true"
            v-for="(age, idx) in travlersAges"
            name="Ageoftraveler1"
            :label="`Age of traveler ${idx + 1}`"
            validation="required|num"
            :attributes="{
              type: 'text',
              placeholder: `Enter Age of traveler ${idx + 1}`,
            }"
          />
        </div>
      </InputParent>
    </div>
    <Button
      @click.prevent="submit(submitForm)"
      :pending="pending"
      type="primary"
      >Get Quotations</Button
    >
  </Form>
</template>
