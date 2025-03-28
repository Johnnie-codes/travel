export default [
  // {
  //   path: "/",
  //   icon: "humbleicons:clock",
  //   name: "Dashboard",
  //   meta: {
  //     requiresAuth: true,
  //     permissions: [],
  //   },
  //   type: "",
  // },
  {
    path: "/policies",
    icon: "fa-solid:list-ul",
    name: "Policies",
    meta: {
      requiresAuth: true,
      permissions: [],
    },
    type: "",
  },
  {
    path: "/newpolicy",
    icon: "fa-solid:list-ul",
    name: "New Policies",
    meta: {
      requiresAuth: true,
      permissions: [],
    },
    type: "",
  },
  {
    path: "/passengers",
    icon: "fa-solid:list-ul",
    name: "Passengers",
    meta: {
      requiresAuth: true,
      permissions: [],
    },
    type: "",
  },
  // {
  //   path: "/providers",
  //   icon: "basil:present-outline",
  //   name: "Providers",
  //   meta: {
  //     requiresAuth: true,
  //     permissions: [],
  //   },
  //   type: "",
  // },
  {
    path: "/claims",
    icon: "mdi:event-note-outline",
    name: "Claims",
    meta: {
      requiresAuth: true,
      permissions: [],
    },
    type: "Claim Management",
  },
  // {
  //   path: "/api_configuration",
  //   icon: "material-symbols-light:event-note",
  //   name: "ApiConfig",
  //   meta: {
  //     requiresAuth: true,
  //     permissions: [],
  //   },
  //   type: "Dev Configurations",
  // },
  // {
  //   path: "/provider_configuration",
  //   icon: "ph:clipboard",
  //   name: "Provider Configuration",
  //   meta: {
  //     requiresAuth: true,
  //     permissions: [],
  //   },
  //   type: "Dev Configurations",
  // },
  // {
  //   path: "/sms_configuration",
  //   icon: "fluent:people-chat-20-filled",
  //   name: "SMS Configuration",
  //   meta: {
  //     requiresAuth: true,
  //     permissions: [],
  //   },
  //   type: "Dev Configurations",
  // },
  // {
  //   path: "/document_cms",
  //   icon: "material-symbols-light:folder",
  //   name: "Document CMS",
  //   meta: {
  //     requiresAuth: true,
  //     permissions: [],
  //   },
  //   type: "Dev Configurations",
  // },
  {
    path: "/users",
    icon: "ph:users",
    name: "Users",
    meta: {
      requiresAuth: true,
      permissions: [],
    },
    type: "User Managements",
  },
  {
    path: "/roles",
    icon: "simple-icons:authelia",
    name: "Roles",
    meta: {
      requiresAuth: true,
      permissions: [],
    },
    type: "User Managements",
  },
  {
    path: "/privileges",
    icon: "material-symbols:passkey",
    name: "Privileges",
    meta: {
      requiresAuth: true,
      permissions: [],
    },
    type: "User Managements",
  },
];
