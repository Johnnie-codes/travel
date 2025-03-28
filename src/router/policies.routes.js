import PolicyIndex from "@/features/policies/pages/index.vue";
import Policies from "@/features/policies/pages/Policies.vue";
import Providers from "@/features/providers/pages/providers.vue";
import ProviderIndex from "@/features/providers/pages/index.vue";
import ClaimIndex from "@/features/claims/pages/index.vue";
import Claims from "@/features/claims/pages/claims.vue";
import newpolicy from "@/features/new policies/newpolicy.vue";
import passenger from "@/features/passenger/pages/passenger.vue";
import PassengerIndex from "@/features/passenger/pages/passengerIndex.vue";


export default [
  {
    path: "/policies",
    name: "PoliciesIndex",
    component: PolicyIndex,
    children: [
      {
        path: "",
        name: "Policy",
        component: Policies,
      },
    ],
  },
  {
    path: "/newpolicy",
    name: "newpolicy",
    component: newpolicy,
    children: [
      {
        path: "",
        name: "newpolicy",
        component: newpolicy,
      },
    ],
  },
  {
    path: "/passengers",
    name: "Passengers",
    component: PassengerIndex,
    children: [
      {
        path: "",
        name: "passenger",
        component: passenger,
      },
    ],
  },
  {
    path: "/providers",
    name: "providerIndex",
    component: ProviderIndex,
    children: [
      {
        path: "",
        name: "Provider",
        component: Providers,
      },
    ],
  },
  // {
  //   path: "/claims",
  //   name: "ClaimIndex",
  //   component: ClaimIndex,
  //   children: [
  //     {
  //       path: "",
  //       name: "Claims",
  //       component: Claims,
  //     },
  //   ],
  // },
];
