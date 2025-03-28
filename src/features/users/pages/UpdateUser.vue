<script setup>
import { useForm } from "@/components/new_form_builder/useForm";
import { useUser } from "../store/userStore";
import { useRoute } from "vue-router";
import { useApiRequest } from "@/composables/useApiRequest";
import { getUserByID, updateUser } from "../api/userApi";
import { toasted } from "@/utils/utils";
import NewFormParent from "@/components/NewFormParent.vue";
import UserForm from "../components/form/UserForm.vue";
import UserDataProvider from "../components/UserDataProvider.vue";
import { ref } from "vue";
import Button from "@/components/Button.vue";

const { submit } = useForm("userForm");
const userStore = useUser();

const route = useRoute();
const userUuid = route.params.userUuid;

const user = ref(userStore.users.find((el) => el.userUuid == userUuid) || {});
const req = useApiRequest();

if (!Object.keys(user.value).length) {
  req.send(
    () => getUserByID(userUuid),
    (res) => {
      if (res.success) {
        user.value = res.data;
      }
    }
  );
}

function update({ values }) {
  req.send(
    () => updateUser(userUuid, values),
    (res) => {
      toasted(res.success, "Successfully Updated", res.error);
      if (res.success) {
        userStore.update(userUuid, { ...user, ...values });
      }
    }
  );
}
</script>
<template>
  <NewFormParent size="xl" title="Update Users">
    <UserDataProvider v-slot="{ providers, roles }">
      <UserForm :users="user" :providers="providers" :roles="roles" />
    </UserDataProvider>

    <template #bottom>
      <div class="flex justify-end p-2 px-4">
        <Button
          class="flex items-center gap-3 bg-primary"
          :pending="!req.pending.value"
          type="primary"
          @click.prevent="submit(update)"
        >
          Update Privilege
        </Button>
      </div>
    </template>
  </NewFormParent>
</template>
