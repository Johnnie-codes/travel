<script setup>
import Button from "@/components/Button.vue";
import { useApiRequest } from "@/composables/useApiRequest";
import Input from "@/components/new_form_elements/Input.vue";
import InputPassword from "@/components/new_form_elements/InputPassword.vue";
import NewFormLayout from "@/components/NewFormLayout.vue";
import { removeUndefined, toasted } from "@/utils/utils";
import { signup } from "@/views/api/LoginApi";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import Select from "@/components/new_form_elements/Select.vue";
// import Datepicker from "vue3-datepicker"; // Import the date picker component
import { usePagination } from "@/composables/usePagination";
import { getAllRoles } from "@/features/roles/api/rolesApi";
import { useRoles } from "@/features/roles/store/rolesStore";
const props = defineProps({
    search: String
})
const rolesStore = useRoles()
const pagination = usePagination({
    store: rolesStore,
    auto: false,
    cb: (data) => getAllRoles(removeUndefined({ ...data, search: props.search }))
})
const req = useApiRequest()

if (rolesStore.role.length == 0) {
    pagination.send()
}

watch(() => props.search, () => {
    pagination.send()
})
// Use Router for navigation
const router = useRouter();
// Create API request instance
const signupReq = useApiRequest();

// Form data for binding user input
const formData = ref({
    firstName: '',
    fatherName: '',
    grandFatherName: '',
    dateOfBirth: '', // Date of Birth field
    email: '',
    telephone: '',
    password: '',
    confirmPassword: '', // New field for password confirmation
    gender: '',
    title: '',
    roleUuid: '',
});

// Handle form submission
function handleSignup({ values }) {
    if (signupReq.pending.value) return;

    // Check if passwords match
    if (values.password !== values.confirmPassword) {
        toasted(false, "Error", "Passwords do not match");
        return;
    }

    // API request to sign up
    signupReq.send(
        () => signup(values),
        (res) => {
            if (res.success) {
                toasted(res.success, "Successfully Signed Up", res.error);
                router.push("/signin"); // Redirect to login after successful signup
            }

        }
    );
}
</script>

<template>
<div class="bg-white">
    <div class="py-6 px-40">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10 col-12">
                <div class=" ">
                    <div class="">
                        <div class="text-center mb-3">
                            <h3 class="font-bold">Signup to continue</h3>
                        </div>
                        <NewFormLayout v-slot="{ submit }" id="signup-form">
                            <div class="grid-form">
                                <!-- Each field now takes full width -->
                                <!-- First Name -->
                                <div class="form-group w-100">
                                    <Input label="First Name" name="firstName" v-model="formData.firstName"
                                        validation="required" :attributes="{ placeholder: 'First Name' }" />
                                </div>
                                <!-- Father Name -->
                                <div class="form-group w-100">
                                    <Input label="Father Name" name="fatherName" v-model="formData.fatherName"
                                        validation="required" :attributes="{ placeholder: 'Father Name' }" />
                                </div>
                                <!-- Grandfather Name -->
                                <!-- <div class="form-group w-100">
                                    <Input label="Grandfather Name" name="grandFatherName"
                                        v-model="formData.grandFatherName" validation="required"
                                        :attributes="{ placeholder: 'Grandfather Name' }" />
                                </div> -->
                                <!-- Date of Birth -->
                                <!-- <div class="form-group w-100">
                                    <Input label='Date of Birth' name="dateOfBirth" v-model="formData.dateOfBirth"
                                        :attributes="{
                                            placeholder: 'Select Date',
                                            type: 'date'
                                        }" />
                                </div> -->
                                <!-- Email Address -->
                                <div class="form-group w-100">
                                    <Input label="Email Address" name="email" type="date" v-model="formData.email"
                                        validation="required|email" :attributes="{ placeholder: 'Email' }" />
                                </div>
                                <!-- Telephone -->
                                <div class="form-group w-100">
                                    <Input label="Telephone" name="telephone" v-model="formData.telephone"
                                        validation="required" :attributes="{ placeholder: 'Telephone' }" />
                                </div>
                                <!-- Password -->
                                <div class="form-group w-100">
                                    <Input label="Password" name="password" v-model="formData.password"
                                        validation="required" :attributes="{ placeholder: 'Password' }" />
                                </div>
                                <!-- Confirm Password -->
                                <div class="form-group w-100">
                                    <Input label="Confirm Password" name="confirmPassword"
                                        v-model="formData.confirmPassword" validation="required"
                                        :attributes="{ placeholder: 'Confirm Password' }" />
                                </div>
                                <!-- Gender -->
                                <!-- <div class="form-group w-100">
                                    <Select name="gender" label="Gender" v-model="formData.gender"
                                        validation="required" :options="['Female', 'Male']"
                                        :attributes="{ type: 'text', placeholder: 'Select Gender' }" />
                                </div> -->
                                <!-- Role UUID -->
                                <div class="form-group w-100">
                                    <Select :obj="true" v-model="formData.roleUuid" label="Role"
                                        name="roleUuid"
                                        :options="rolesStore.role.map(el => ({ label: el.roleName, value: el.roleUuid }))"
                                        validation="required"
                                        :attributes="{ type: 'text', placeholder: 'Select role' }" />
                                </div>
                            </div>
                            <!-- Sign Up Button at the bottom -->
                            <div class="text-center mt-3">
                                <Button class="bg-[#800005] text-white w-full py-2 rounded-lg"
                                    :pending="signupReq.pending.value" @click.prevent="submit(handleSignup)">
                                    Continue
                                </Button>
                            </div>
                        </NewFormLayout>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<style scoped>
.page-header {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.page-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
}

.container {
    z-index: 1;
}

.card {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.logo {
    width: 40px;
    margin-bottom: 10px;
}

h3.font-bold {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
}

.grid-form {
    display: grid;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
}

.form-group .datepicker {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    box-sizing: border-box;
}


input,
select,
.datepicker-input {
    /* Added custom class to target Datepicker */
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 0.9rem;
}

input:focus,
select:focus,
.datepicker-input:focus {
    /* Added focus style for Datepicker */
    outline: none;
    border-color: #3498db;
}

button.bg-primary {
    background-color: #3498db;
    color: white;
    font-size: 0.9rem;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
}

button.bg-primary:hover {
    background-color: #2980b9;
}

@media (max-width: 768px) {
    .grid-form {
        grid-template-columns: 1fr;
        /* Single column layout for mobile */
    }

    .logo {
        width: 40px;
    }

    h3.font-bold {
        font-size: 1.15rem;
    }
}
</style>
