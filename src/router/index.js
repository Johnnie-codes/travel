import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/Home.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import Index from "@/features/policies/pages/index.vue";
import Policies from "@/features/policies/pages/Policies.vue";

import policiesRoutes from "./policies.routes";

import devConfigurationRoutes from "./devConfiguration.routes";
import privilegesRoutes from "./privileges.routes";
import rolesRoutes from "./roles.routes";
import usersRoutesRoutes from "./users.routes.routes";
import OTPVerification from "@/views/login/login/components/OTPVerification.vue";
import phoneInput from "@/views/login/login/components/phoneInput.vue";
import SignupForm from "@/views/login/login/components/SignupForm.vue";
import signin from "@/views/login/login/pages/signin.vue";
import Home from "@/features/landing/components/Home/home.vue";
import Landing from "@/features/ClaimPortal/landing.vue";
import BuyInsurance from "@/features/landing/components/Buy-insurance/buyInsurance.vue";
import QoutaionReview from "@/features/landing/qoutaionReview.vue";
import Signin from "@/views/login/login/pages/signin.vue";
import Signup from "@/views/login/login/pages/signup.vue";
import PhoneInput from "@/views/login/login/components/phoneInput.vue";
import Payment from "@/features/landing/payment/Payment.vue";
import TermsAndPolicies from "@/features/landing/TermsAndPolicies.vue";
import RenewPolicy from "@/features/landing/renewPolicy.vue";
import ClaimRequest from "@/features/landing/ClaimRequest.vue";
import PdfPagePdf from "@/components/PdfPage.pdf.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.v_API_URI),
  routes: [
    {
      path: '/pdf',
      component: PdfPagePdf
    },
    {
      path: "/main",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "policies",
          component: Policies,
        },

        // ...policiesRoutes,
        // ...devConfigurationRoutes,
        ...privilegesRoutes,
        ...rolesRoutes,
        ...usersRoutesRoutes,
      ],
    },
    {
      path: "/",
      component: Home,
     
    },
    {
      path: "/home",
      component: Home,
     
    },
    {
      path: "/Terms",
      component: TermsAndPolicies,
     
    },
    {
      path: "/renew",
      component: RenewPolicy,
     
    },
    {
      path: "/claims",
      component: ClaimRequest,
     
    },
    {
      path: "/login",
      // component: Login,

    },
    {
      path: "/Payment",
      component: Payment,

    },
    {
      path: "/QoutaionReview",
      component: QoutaionReview,

    },
    {
      path: "/BuyInsurance/:referenceId",
      component: BuyInsurance,

    },
    {
      path: "/signin",
      component: Signin,
    },
    {
      path: "/signup",
      component: Signup,
    },
    {
      path: '/phoneinput',
      name: 'phoneInput',
      component: PhoneInput,
    },
    { path: '/verify-otp', component: OTPVerification },
  ],
});

export default router;
