<template>  
    <section class="contact-section">  
      <h2 class="contact-title">Contact us now and let us provide the perfect insurance</h2>  
      
      <form @submit.prevent="handleSubmit" class="contact-form">  
        <input   
          type="email"   
          v-model="email"   
          placeholder="Enter Email Address"   
          class="input-field"  
          required  
        />  
        <textarea   
          v-model="message"   
          placeholder="Message"   
          class="input-field message-field"  
          required  
        ></textarea>  
        <button type="submit" class="send-button">Send</button>  
      </form>  
    </section>  
  </template>  
  
  <script setup>  
  import { ref } from 'vue';  
  
  const email = ref('');  
  const message = ref('');  
  
  const handleSubmit = () => {  
    // Handle form submission logic here  
    console.log('Email:', email.value);  
    console.log('Message:', message.value);  
    // Clear the form  
    email.value = '';  
    message.value = '';  
  };  
  </script>  
  
  <style scoped>  
  .contact-section {  
    background-color: #3b2e2e; /* Dark background */  
    color: white;  
    padding: 60px 20px;  
    text-align: center;  
  }  
  
  .contact-title {  
    font-size: 24px;  
    margin-bottom: 30px;  
  }  
  
  .contact-form {  
    display: flex;  
    flex-direction: column;  
    gap: 20px; /* Spacing between inputs */  
    max-width: 400px; /* Max width for the form */  
    margin: 0 auto; /* Center the form */  
  }  
  
  .input-field {  
    padding: 12px;  
    border: none;  
    border-radius: 5px;  
    font-size: 16px;  
  }  
  
  .message-field {  
    height: 100px; /* Height for the message area */  
  }  
  
  .send-button {  
    background-color: #6f4c4c; /* Button color */  
    color: white;  
    border: none;  
    padding: 12px 20px;  
    border-radius: 5px;  
    cursor: pointer;  
    font-size: 16px;  
    transition: background-color 0.3s ease;  
  }  
  
  .send-button:hover {  
    background-color: #e63946; /* Change color on hover */  
  }  
  </style>