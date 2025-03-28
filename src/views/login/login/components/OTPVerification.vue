<template>
    <div class="otp-verification">
        <div class="container py-3">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10 col-12">
                    <div class="card shadow-lg rounded-lg p-4">
                        <div class="card-body">
                            <!-- Back Button -->
                            <div class="back-button mb-3">
                                <Button @click="goBack" class="bg-secondary text-white py-2 px-4 rounded-lg">Back</Button>
                            </div>

                            <h3 class="font-bold text-center">Enter OTP Code</h3>
                            <p class="text-center">We sent the code to your phone number.</p>

                            <!-- OTP Code Input -->
                            <div class="form-group">
                                <Input label="OTP Code" v-model="otpCode" placeholder="Enter OTP" />
                            </div>

                            <!-- Verify Button -->
                            <div class="text-center mt-3">
                                <Button @click="verifyOTP" class="bg-primary text-white w-full py-2 rounded-lg">Verify OTP</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from "@/components/Button.vue";
import Input from "@/components/new_form_elements/Input.vue";
import { useRouter } from 'vue-router';

const otpCode = ref('');
const router = useRouter();

// Get the phone number from the query parameters
const phoneNumber = router.currentRoute.value.query.phone;

// Function to navigate back to phone input
function goBack() {
  router.push('/phoneinput');
}

// Function to verify OTP
function verifyOTP() {
  if (!otpCode.value) {
    alert("Please enter the OTP");
    return;
  }

  // Simulate verifying OTP and navigate to signup page
  router.push('/signup');
}
</script>

<style scoped>
.otp-verification {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f6f9; /* Light background for contrast */
}

.container {
    width: 100%;
    max-width: 600px; /* Consistent with other pages */
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

h3.font-bold {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
}

p.text-center {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 1rem;
}

input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 0.9rem;
}

input:focus {
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

button.bg-secondary {
    background-color: #95a5a6; /* Gray color */
    color: white;
    font-size: 0.9rem;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
}

button.bg-secondary:hover {
    background-color: #7f8c8d; /* Darker gray on hover */
}

@media (max-width: 768px) {
    .container {
        padding: 10px; /* Responsive padding */
    }

    h3.font-bold {
        font-size: 1.15rem;
    }

    button.bg-primary {
        font-size: 0.85rem;
    }

    button.bg-secondary {
        font-size: 0.85rem;
    }
}
</style>
