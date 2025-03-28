<template>
  <div class="w-full p-5 bg-white shadow-lg rounded-lg">
    <div class="text-lg flex justify-between font-bold">
      <h2 class="text-xl font-semibold mb-4">Premium</h2>
      <span>ETB 2,000</span>
    </div>
    <div class="flex flex-col w-full align-middle mb-6">
      <label class="flex h-fit gap-2">
        <img
          src="/src/assets/trending.svg"
          alt="Telebirr Logo"
          class="h-8 mr-2"
        />
        <span class="font-bold">Telebirr</span></label
      >
      <div v-if="selectedBank === 'CBE'">
        <input
          type="text"
          placeholder="Phone Number"
          v-model="phoneNumber"
          class="w-full border py-2 border-gray-300 rounded shadow-sm"
        />
      </div>
    </div>

    <div class="flex mb-4">
      <input
        type="radio"
        id="CBE"
        name="bank"
        value="CBE"
        v-model="selectedBank"
        class="text-blue-600 focus:ring-blue-500 rounded"
      />
      <label for="CBE" class="ml-2 flex items-center">
        <img src="/src/assets/todays.svg" alt="CBE Logo" class="h-6" />
        <span class="ml-2">CBE</span>
      </label>
      <div v-if="selectedBank === 'CBE'" class="mt-2">
        <input
          type="text"
          placeholder="Enter additional information"
          class="p-2 border border-gray-300 rounded shadow-sm flex-1"
        />
      </div>
    </div>

    <div class="flex align-middle flex-col mb-4">
      <input
        type="radio"
        id="CBE"
        name="bank"
        value="CBE"
        v-model="selectedBank"
        class="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label for="CBE" class="ml-2 flex items-center">
        <img src="/src/assets/cbeLogo.png" alt="CBE Logo" class="h-6" />
        <span class="ml-2">CBE</span>
      </label>
      <div v-if="selectedBank === 'CBE'" class="mt-2">
        <input
          type="text"
          placeholder="Enter additional information"
          class="p-2 border border-gray-300 rounded shadow-sm flex-1"
        />
      </div>
    </div>

    <div class="flex align-middle flex-col mb-4">
      <input
        type="radio"
        id="Abyssinia"
        name="bank"
        value="Abyssinia"
        v-model="selectedBank"
        class="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label for="Abyssinia" class="ml-2 flex items-center">
        <img
          src="/src/assets/AbyssiniaLogo.png"
          alt="Abyssinia Logo"
          class="h-6"
        />
        <span class="ml-2">Abyssinia Bank</span>
      </label>
      <div v-if="selectedBank === 'Abyssinia'" class="mt-2">
        <input
          type="text"
          placeholder="Enter additional information"
          class="p-2 border border-gray-300 rounded shadow-sm flex-1"
        />
      </div>
    </div>

    <div class="flex align-middle flex-col mb-4">
      <input
        type="radio"
        id="Awash"
        name="bank"
        value="Awash"
        v-model="selectedBank"
        class="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label for="Awash" class="ml-2 flex items-center">
        <img src="/src/assets/AwashLogo.png" alt="Awash Logo" class="h-6" />
        <span class="ml-2">Awash Bank</span>
      </label>
      <div v-if="selectedBank === 'Awash'" class="mt-2">
        <input
          type="text"
          placeholder="Enter additional information"
          class="p-2 border border-gray-300 rounded shadow-sm flex-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "",
      selectedBank: "",
    };
  },
};
</script>
