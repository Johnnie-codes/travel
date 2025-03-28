<template>
  <div class="phone-input-container">
      <div class="container py-3">
          <div class="row justify-content-center">
              <div class="col-lg-8 col-md-10 col-12">
                  <div class="card shadow-lg rounded-lg p-4">
                      <div class="card-body">
                          <div class="text-center mb-3">
                              <img class="logo mb-2" src="@/assets/lion.svg" alt="logo" />
                              <h3 class="font-bold">Enter Your Phone Number</h3>
                              <p class="text-center">We will send you a verification code.</p>
                          </div>
                          <!-- Phone Number Input Form -->
                          <div class="form-group">
                              <Input label="Phone Number" v-model="phoneNumber" placeholder="Enter your phone number" />
                          </div>

                          <div class="text-center mt-3">
                              <Button @click="sendOTP" class="bg-primary text-white w-full py-2 rounded-lg">Send OTP</Button>
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

const phoneNumber = ref('');
const router = useRouter();

// Function to send OTP (simulate API call)
function sendOTP() {
  if (!phoneNumber.value) {
      alert("Please enter a valid phone number");
      return;
  }

  // Simulate sending OTP and navigate to OTP verification
  router.push('/verify-otp');
}
</script>

<style scoped>
.phone-input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f6f9; /* Set a background color for better contrast */
}

.container {
  width: 100%;
  max-width: 600px; /* Limit the container width to match the signup form */
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

input,
select {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 0.9rem;
}

input:focus,
select:focus {
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
  .container {
      padding: 10px;
  }

  h3.font-bold {
      font-size: 1.15rem;
  }

  button.bg-primary {
      font-size: 0.85rem;
  }
}
</style>
