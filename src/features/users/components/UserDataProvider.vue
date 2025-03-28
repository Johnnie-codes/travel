<script setup>
import { useUser } from "../store/userStore";
import { getAllUsers } from "../api/userApi";
import { allRequest } from "@/utils/utils";
import { useApiRequest } from "@/composables/useApiRequest";
import { getAllRoles } from "@/features/roles/api/rolesApi";
import { useRoles } from "@/features/roles/store/rolesStore";
const usersStore = useUser();
const roleStore = useRoles();
const userApi = useApiRequest();

function fetchMore() {
  userApi.send(
    () =>
      allRequest({
        roles: getAllRoles(),
        users: getAllUsers(),
      }),
    (res) => {
      if (res.success) {
        roleStore.set(res.data?.roles);
        usersStore.set(res.data?.users);
      }
    }
  );
}
if (!usersStore.getAll().length && !roleStore.getAll().length) {
  fetchMore();
}
</script>
<template>
  <slot
    :pending="userApi.pending.value"
    :error="userApi.error.value"
    :roles="roleStore.roles"
    :users="usersStore.users"
  />
</template>
