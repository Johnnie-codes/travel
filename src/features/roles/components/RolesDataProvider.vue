<script setup>
import { usePagination } from "@/composables/usePagination";
import { getAllRoles } from "../api/rolesApi";
import { useRoles } from "../store/rolesStore";
import { watch } from "vue";
import { removeUndefined } from "@/utils/utils";

const props = defineProps({
  search: String,
});

const roles = useRoles();

const pagination = usePagination({
  store: roles,
  cb: (data) =>
    getAllRoles({ ...data, ...removeUndefined({ search: props.search }) }),
  auto: false,
});

if (!roles.roles.length) {
  pagination.send();
}

watch(
  () => props.search,
  () => {
    pagination.send();
  }
);
</script>
<template>
  <slot
    :roles="roles.roles"
    :pending="pagination.pending.value"
    :error="pagination.error.value"
  />
</template>
