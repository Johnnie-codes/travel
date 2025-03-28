<script setup>
import Button from "@/components/Button.vue";
import DefaultPage from "@/components/DefaultPage.vue";
import Table from "@/components/Table.vue";
import TableRowSkeleton from "@/components/TableRowSkeleton.vue";
import { useApiRequest } from "@/composables/useApiRequest";
import icons from "@/utils/icons";
import { toasted } from "@/utils/utils";
import { useUser } from "../store/userStore";
import UserDataProvider from "../components/UserDataProvider.vue";
import { removeUser } from "../api/userApi";

const removeReq = useApiRequest();
const userStore = useUser();

function remove(id) {
  removeReq.send(
    () => removeUser(id),
    (res) => {
      if (res.success) {
        userStore.remove(id);
      }
      toasted(res.success, "Removed Successfully", res.error);
    }
  );
}
</script>

<template>
  <DefaultPage>
    <template #more>
      <Button @click="$router.push('/add_user')" type="primary"
        >Add New User</Button
      >
    </template>
    <UserDataProvider v-slot="{ users, pending }">
    
      <Table
        :pending="pending"
        :headers="{
          head: ['User Name', 'Phone Number', 'Provider Name', 'actions'],
          row: ['firstName', 'mobilePhone', 'providerUuid'],
        }"
        :rows="users"
        :Fallback="TableRowSkeleton"
      >
        <template #actions="{ row }">
          <div class="flex gap-4 items-center">
            <button
              class="size-8 shadow-md rounded-full bg-accent flex justify-center items-center"
              @click="$router.push(`/update_user/${row?.userUuid}`)"
            >
              <i v-html="icons.edit" />
            </button>
            <button @click="remove(row?.userUuid)">delete</button>
          </div>
        </template>
      </Table>
    </UserDataProvider>
  </DefaultPage>
</template>
