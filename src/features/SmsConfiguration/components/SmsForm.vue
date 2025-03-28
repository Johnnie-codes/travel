<script setup>
import Input from "@/components/new_form_elements/Input.vue";
import Select from "@/components/new_form_elements/Select.vue";
import Textarea from "@/components/new_form_elements/Textarea.vue";
import NewFormLayout from "@/components/NewFormLayout.vue";
import { ref } from 'vue';
import NewInputLayout from "@/components/new_form_elements/NewInputLayout.vue";
</script>
<template>
  <NewFormLayout :inner="false" id="SmsForm">
    <div class="grid grid-cols-2 gap-2">
    <Select
      label="Provider "
      name="firstName"
      :attributes="{
        placeholder: 'Select a Provider  ',
      }"
      validation="required"
    />
    <Input
      label="Select a trigger "
      name="phoneNumber"
      :attributes="{
        placeholder: 'Claim Settled ',
      }"
      validation="required"
    />
  </div>
  </NewFormLayout>
 <div class="  w-full gap-4 flex flex-col">
  <span class=""> Message</span>
  <div class="w-full flex flex-col border rounded-md border-orange-500  gap-4 p-3 h-80 ">
    <div class="flex justify-between  gap-2">
    <button class="border bg-[#FFF0E6]"><div class="p-1 gap-1  flex text-xs  "><img src="/src/assets/circlePlus.svg" class=""> Insert claim page link</div></button>  
    <button class="border bg-[#FFF0E6]"><div class="p-1 gap-1  flex text-xs"><img src="/src/assets/circlePlus.svg" class=""> Insert active policy number</div></button>  
    <button class="border bg-[#FFF0E6]"><div class="p-1 gap-1  flex text-xs"><img src="/src/assets/circlePlus.svg" class=""> Insert expired policy number</div></button>  
    </div>
    <div  class=" w-full h-full">
      <NewInputLayout
     class="border-none"
      
      name="Message"
      :attributes="{
       
        placeholder: 'Write the SMS copy... ',
      }"
      validation="required"
    />
    </div>

    

  </div>
 </div>
</template>
