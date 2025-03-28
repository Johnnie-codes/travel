<script setup>
import NewFormParent from "@/components/NewFormParent.vue";
import UserForm from "../components/form/UserForm.vue";
import UserDataProvider from "../components/UserDataProvider.vue";
import { useForm } from "@/components/new_form_builder/useForm";
import { useUser } from "../store/userStore";
import { useApiRequest } from "@/composables/useApiRequest";
import { createUser } from "../api/userApi";
import { toasted } from "@/utils/utils";
import Button from "@/components/Button.vue";
import icons from "@/utils/icons";
const { submit } = useForm("userForm");
const user = useUser();
const req = useApiRequest();

function create({ values, reset }) {
  values.userStatus = "ACTIVE";
  req.send(
    () => createUser(values),
    (res) => {
      if (res.success) {
        user.add(res.data);
        reset();
      }
      toasted(res.success, "User Created Successfully", res.error);
    }
  );
}
</script>
<template>
  <NewFormParent class="!p-0" size="xl" title="Add Role">
    <UserDataProvider v-slot="{ pending, providers, roles }">
      <UserForm v-if="!pending" :providers="providers" :roles="roles" />
      <div
        class="w-full h-full flex font-bold text-4xl items-center justify-center"
        v-else
      >
        <p>...Loading</p>
      </div>
    </UserDataProvider>
    <template #bottom>
      <div class="flex items-center justify-end">
        <Button
          :pending="req.pending.value"
          @click.prevent="submit(create)"
          type="primary"
          class="gap-2 m-2 flex items-center"
        >
          <i class="pb-1" v-html="icons.plus" />
          Add User
        </Button>
      </div>
    </template>
  </NewFormParent>
</template>
