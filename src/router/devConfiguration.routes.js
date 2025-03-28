import ApiIndex from "@/features/ApiConfigurations/index.vue";
import ApiConfig from "@/features/ApiConfigurations/apiConfiguration.vue";
import providerConfig from "@/features/ProviderConfiguration/providerConfigurations.vue";
import providerConfigIndex from "@/features/ProviderConfiguration/index.vue";
import smsConfig from "@/features/SmsConfiguration/pages/smsConfiguration.vue";
import smsConfigIndex from "@/features/SmsConfiguration/pages/index.vue";
import DocumentCms from "@/features/documentCms/documentCms.vue";
import DocumentCmsIndex from "@/features/documentCms/index.vue";


export default [
  {
    path: "/api_configuration",
    name: "ApiIndex",
    component: ApiIndex,
    children: [
      {
        path: "",
        name: "ApiConfig",
        component: ApiConfig,
      },
    ],
  },
  {
    path: "/provider_configuration",
    name: "providerConfigIndex",
    component: providerConfigIndex,
    children: [
      {
        path: "",
        name: "providerConfig",
        component: providerConfig,
      },
    ],
  },
  {
    path: "/sms_configuration",
    name: "smsConfigIndex",
    component: smsConfigIndex,
    children: [
      {
        path: "",
        name: "smsConfig",
        component: smsConfig,
      },
    ],
  },
  {
    path: "/document_cms",
    name: "",
    component: DocumentCmsIndex,
    children: [
      {
        path: "",
        name: "DocumentCms",
        component: DocumentCms,
      },
    ],
  },
  
];
