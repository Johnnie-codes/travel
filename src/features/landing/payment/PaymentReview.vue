<template>
  <div
    class="relative w-full self-start justify-center flex gap-2 flex-col rounded-lg"
  >
    <div class="bg-[#4C3F3F] h-full p-5 flex rounded-xl flex-col gap-2 border">
      <span class="text-xl text-white font-bold">Insurance</span>

      <div class="p-4 gap-4 flex flex-col bg-white">
        <div>
          <div class="flex border-b p-2 justify-between bg-[#4C3F3F]">
            <span class="P-6 font-thin text-white">Destination</span>
            <span class="font-thin text-white">Paris, France</span>
          </div>
          <div class="flex p-2 justify-between bg-[#4C3F3F]">
            <span class="P-6 font-thin text-white">10 days</span>
            <span class="P-6 font-thin text-white">Duration</span>
          </div>
        </div>

        <div class="bg-[#4C3F3F] h-full flex flex-col gap-2 p-2 rounded-l border">
          <div class="flex justify-between">
            <span class="text-xl text-white font-bold mb-4">Passengers</span>
            <span>2</span>
          </div>
          <div>
            <div
              class="flex text-white bg-[#635252] p-2 justify-between items-center font-semibold text-md"
            >
              <div class="flex gap-2 font-semibold text-md">
                <span>1</span>
                <span>Semere Tsadik</span>
              </div>
              <div class="flex gap-2">
                <button>E</button>
                <button>W</button>
              </div>
            </div>
            <div
              class="flex text-white bg-[#635252] p-2 justify-between items-center"
            >
              <div class="flex gap-2 font-semibold text-md">
                <span>2</span>
                <span>Birhane Araya</span>
              </div>
              <div class="flex gap-2">
                <button>E</button>
                <button>W</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PDF Button -->
      <div class="bg-white h-full p-4 flex flex-col items-center align-middle gap-6 border">
        <div class="w-full h-11 items-center flex gap-4">
          <button class="font-semibold text-md h-full rounded w-full border-2">
            Add New Traveler
          </button>
        </div>

        <!-- PDF Open Button -->
        <a href="/path-to-your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
          <button class="bg-blue-500 text-white font-semibold px-4 py-2 rounded">
            Show PDF
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
