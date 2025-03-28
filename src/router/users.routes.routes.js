import AddUser from "@/features/users/pages/AddUser.vue";
import UpdateUser from "@/features/users/pages/UpdateUser.vue";
import UserIndex from "@/features/users/pages/UserIndex.vue";
import Users from "@/features/users/pages/Users.vue";

export default [
  {
    path: "/users",
    name: "User",
    component: UserIndex,
    children: [
      {
        path: "",
        name: "Users",
        component: Users,
        meta: {
          requiresAuth: true,
          permissions: [],
        },
      },
      {
        path: "/add_user",
        name: "Add User",
        component: AddUser,
        meta: {
          requiresAuth: true,
          permissions: [],
        },
      },
      {
        path: "/update_user/:userUuid",
        name: "Upadet User",
        component: UpdateUser,
        meta: {
          requiresAuth: true,
          permissions: [],
        },
      },
    ],
  },
];
