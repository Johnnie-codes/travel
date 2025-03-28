<script setup>
import { Input, Textarea } from "@/components/new_form_elements";
import { Form } from "@/components/new_form_builder";
import { watch } from "vue";
import UserDataProvider from "../UserDataProvider.vue";
import Select from "@/components/new_form_elements/Select.vue";
import InputPassword from "@/components/new_form_elements/InputPassword.vue";

const props = defineProps({
  users: {
    type: Object,
    required: false,
  },
  roles: {
    type: Array,
  },
  providers: {
    type: Array,
  },
});
</script>
<template>
  <Form class="grid grid-cols-3 gap-4" :inner="false" id="userForm" v-slot="{}">
    <div class="grid grid-cols-10 col-span-3 gap-4">
      <div>
        <Select
          class="col-span-1 items-center"
          name="title"
          :options="['MR', 'MRS']"
          label="Title"
          validation="required"
          :attributes="{
            placeholder: 'Title',
            type: 'text',
          }"
          :value="props.users?.title || 'MR'"
        />
      </div>
      <div class="col-span-3">
        <Input
          class="col-span-3"
          name="firstName"
          validation="required"
          label="First Name"
          :value="props.users?.firstName || ''"
          :attributes="{
            placeholder: 'First Name',
          }"
        />
      </div>
      <div class="col-span-3">
        <Input
          name="fatherName"
          validation="required"
          label="Father Name"
          :value="props.users?.fatherName || ''"
          :attributes="{
            placeholder: 'Father Name',
          }"
        />
      </div>
      <div class="col-span-3">
        <Input
          name="grandFatherName"
          validation="required"
          label="GarndFather Name"
          :value="props.users?.grandFatherName || ''"
          :attributes="{
            placeholder: 'GrandFather Name',
          }"
        />
      </div>
    </div>
    <Input
      name="email"
      validation="required|email"
      label="Email"
      :value="props.users?.email || ''"
      :attributes="{
        placeholder: 'Email',
      }"
    />
    {{ console.log(props.roles) }}
    <Select
      :obj="true"
      name="roleUuid"
      :options="
        props.roles.map((el) => ({
          label: el.roleName,
          value: el.roleUuid,
        }))
      "
      label="Select Role"
      validation="required"
      :attributes="{
        placeholder: 'Roles',
        type: 'text',
      }"
    />
    <Select
      :obj="true"
      name="providerUuid"
      :options="
        (props.providers || []).map((el) => ({
          label: el.providerName,
          value: el.providerUuid,
        }))
      "
      label="Select Provider"
      validation="required"
      :attributes="{
        placeholder: 'Providers',
        type: 'text',
      }"
    />
    <Input
      name="mobilePhone"
      validation="required|phone"
      label="Phone Number"
      :value="props.users?.mobilePhone || ''"
      :attributes="{
        placeholder: 'Phone Number',
      }"
    />
    <Select
      name="gender"
      :options="['MALE', 'FEMALE']"
      label="Gender"
      validation="required"
      :attributes="{
        placeholder: 'Gender',
        type: 'text',
      }"
      :value="props.users?.gender"
    />

    <InputPassword
      label="New Password"
      name="password"
      :attributes="{
        placeholder: 'New Password',
      }"
      validation="required"
    />

    <InputPassword
      label="Confirm Password"
      name="confirmPassword"
      :skip="true"
      :attributes="{
        placeholder: 'Confirm Password',
      }"
      validation="required|equalTo-password"
    />
  </Form>
</template>
