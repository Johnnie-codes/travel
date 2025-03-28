import AddRole from "@/features/roles/pages/AddRole.vue";
import RoleIndex from "@/features/roles/pages/RoleIndex.vue";
import Roles from "@/features/roles/pages/Roles.vue";
import UpdateRole from "@/features/roles/pages/UpdateRole.vue";

export default [
  {
    path: "/roles",
    name: "Role",
    component: RoleIndex,
    children: [
      {
        path: "",
        name: "Roles",
        component: Roles,
        meta: {
          requiresAuth: true,
          permissions: [],
        },
      },
      {
        path: "/add_role",
        name: "Add Role",
        component: AddRole,
        meta: {
          requiresAuth: true,
          permissions: [],
        },
      },
      {
        path: "/update_role/:roleUuid",
        name: "Upadet Role",
        component: UpdateRole,
        meta: {
          requiresAuth: true,
          permissions: [],
        },
      },
    ],
  },
];
