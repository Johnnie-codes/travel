<script setup>
import Button from "@/components/Button.vue";
import FormSubmitButton from "@/components/FormSubmitButton.vue";
import { useForm } from "@/components/new_form_builder/useForm";
import Input from "@/components/new_form_elements/Input.vue";
import InputPassword from "@/components/new_form_elements/InputPassword.vue";
import NewFormLayout from "@/components/NewFormLayout.vue";
import { useApiRequest } from "@/composables/useApiRequest";
import { useAuth } from "@/stores/auth";
import { toasted } from "@/utils/utils";
import { login } from "@/views/api/LoginApi";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const redirecting = ref(true);

const router = useRouter();
const route = useRoute();
const auth = useAuth();
let detiail = localStorage.getItem("userDetail");

function reRoute() {
  if (route.query.redirect && route.query?.from == "other")
    location.href = route.query.redirect;
  else if (route.query.redirect) router.replace(route.query.redirect);
  else router.replace("/");
}

if (detiail) {
  detiail = JSON.parse(detiail);
  auth.setAuth({
    user: detiail,
    accessToken: detiail.token,
  });
  reRoute();
} else {
  redirecting.value = false;
}

const loginReq = useApiRequest();
function handleLogin({ values }) {
  if (loginReq.pending.value) return;

  loginReq.send(
    () => login(values),
    (res) => {
      if (res.success) {
        auth.setAuth({
          user: res.data,
          accessToken: res.data?.token,
        });
        localStorage.setItem("userDetail", JSON.stringify(res.data));
        reRoute();
      }
      toasted(res.success, "Successfully Loggedin", res.error);
    }
  );
}
</script>
<template>  
  <div class="login-signup">  
    <h1 class="pb-8 font-sans font-bold text-center"
    style="font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 700; line-height: 21.94px; letter-spacing: -0.5px; text-underline-position: from-font; text-decoration-skip-ink: none;">
    Login to Continue
</h1>

<NewFormLayout v-slot="{ submit }" id="login-form">
                    <div class="flex flex-col gap-4">
                      <Input
                        label="Email Address"
                        name="email"
                        validation="required|email"
                        :attributes="{ placeholder: 'Email' }"
                      />
                      <InputPassword
                        label="Password"
                        name="password"
                        validation="required"
                        :attributes="{ placeholder: 'Password' }"
                      />
                      <div class="flex justify-end items-center gap-2">
                        <p class="font-normal text-primary cursor-pointer">
                          Forgot Password?
                        </p>
                      </div>
                      <Button
                        class="bg-primary text-white mb-4 w-full"
                        :pending="loginReq.pending.value"
                        @click.prevent="submit(handleLogin)"
                      >
                        Login
                      </Button>
                    
                    </div>
                  </NewFormLayout>

    <button @click="handleGoogleLogin" class="google-button">  
      Continue with Google  
    </button>  
    <p class="mt-4 text-center">
                        Don't have an account? 
                        <RouterLink to="/phoneinput" class="text-primary font-bold"> Create one now.</RouterLink>
                      </p>
  </div>  
</template>  


<style scoped>  
.login-signup {
  width: 380px; /* Set width to 380px */
  margin: auto; /* Center the form horizontally */
  padding: 20px; /* Padding of 8px top/bottom and 16px left/right */
}
h1 {  
  text-align: center;  
  font-size: 1.5em; /* Smaller font size */  
  margin-bottom: 15px; /* Reduced bottom margin */  
}  

label {  
  display: block;  
  margin-bottom: 5px; /* Reduced bottom margin */  
  font-size: 0.9em; /* Smaller font size */  
}  

input {  
  width: 100%;  
  padding: 8px; /* Reduced padding */  
  margin-bottom: 15px; /* Reduced bottom margin */  
  border: 1px solid #ccc;  
  border-radius: 4px;  
  font-size: 0.9em; /* Smaller font size */  
}  

.login-button {  
  width: 100%;  
  padding: 10px; /* Reduced padding */  
  background: #c62828;  
  color: white;  
  border: none;  
  border-radius: 4px;  
  cursor: pointer;  
  font-size: 0.9em; /* Smaller font size */  
  margin-bottom: 10px; /* Reduced bottom margin */  
}  

.google-button {  
  width: 100%;  
  padding: 10px; /* Reduced padding */  
  background: #FDEDEE;  
  color: #616161;  
  border: none;  
  border-radius: 4px;  
  font-size: 0.9em; /* Smaller font size */  
}  
</style>  