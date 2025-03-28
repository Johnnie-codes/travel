import AddPrivilege from "@/features/privilages/pages/AddPrivilege.vue";
import PrivilegeIndex from "@/features/privilages/pages/PrivilegeIndex.vue";
import Pivilages from "@/features/privilages/pages/Privileges.vue";
import UpdatePrivilege from "@/features/privilages/pages/UpdatePrivilege.vue";
export default [
  {
    path: "/privileges",
    name: "PrivilegeIndex",
    component: PrivilegeIndex,
    children: [
      {
        path: "",
        name: "Privileges",
        component: Pivilages,
        meta: {
          requiresAuth: true,
          permissions: [],
        },
      },
      {
        path: "/add_privilege",
        name: "Add Privileges",
        component: AddPrivilege,
        meta: {
          requiresAuth: true,
          permissions: [],
        },
      },
      {
        path: "/update_privilege/:privilegeUuid",
        name: "Update Privileges",
        component: UpdatePrivilege,
        meta: {
          requiresAuth: true,
          permissions: [],
        },
      },
    ],
  },
];
