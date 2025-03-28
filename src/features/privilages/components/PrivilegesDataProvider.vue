<script setup>
import { usePrivileges } from "../store/privilegesStore";
import { getAllPermissions } from "../api/permissionsApi";
import { usePagination } from "@/composables/usePagination";

const privilegesStore = usePrivileges();

const pagination = usePagination({
  store: privilegesStore,
  cb: getAllPermissions,
});

if (privilegesStore.privileges.length == 0) {
  pagination.send();
}
</script>
<template>
  <slot
    :pending="pagination.pending.value"
    :error="pagination.error.value"
    :privileges="privilegesStore.privileges"
  />
</template>
