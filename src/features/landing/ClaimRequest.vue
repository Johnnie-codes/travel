<template>
    <navWhite />
    <div class="bg-[#FFF6F4] flex flex-col items-center w-full h-fit">
      <div class="w-full">
        <img class="w-full object-fill" :src="girlWriting" alt="" />
      </div>
      <div class="w-5/6 bg-[#FFF6F4] h-full flex flex-col gap-6 py-16">
        <span class="font-bold text-4xl text-[#4C3F3F]">Request Claim </span>
        <div class="flex flex-col gap-9">
          <div class="w-full p-4 bg-white rounded-md h-full flex flex-col gap-4">
            <Input
              name="Policy Number"
              validation="required"
              label="Policy Number"
              :attributes="{
                placeholder: 'Enter Policy Number ',
                type: 'number',
              }"
            />
            <div class="grid grid-cols-3 gap-3">
              <Select
                name="Destination"
                validation="required"
                label="Destination"
                :attributes="{
                  placeholder: 'Enter Destination ',
                  type: 'number',
                }"
              /><Input
                name="Trip Start Date"
                validation="required"
                label="Trip Start Date"
                :attributes="{
                  placeholder: 'EnterTrip Start Date ',
                  type: 'date',
                }"
              /><Input
                name="Trip End Date"
                validation="required"
                label="Trip End Date"
                :attributes="{
                  placeholder: 'Enter Trip End Date ',
                  type: 'Date',
                }"
              />
            </div>
            <Button class=" w-full bg-primary h-20 rounded-md font-bold text-lg text-white"> Submit Claim Request</Button>
          </div>
        </div>
      </div>
    </div>
    <about />
    <footers />
  </template>
    <script setup>
  import Input from "@/components/new_form_elements/Input.vue";
  import about from "./components/Home/about.vue";
  import girlWriting from "@/assets/girlWriting.svg";
  import navWhite from "./components/Home/navWhite.vue";
  import footers from "./components/Home/footer.vue"
  import Select from "@/components/new_form_elements/Select.vue";
  import Button from "@/components/Button.vue";
  </script>