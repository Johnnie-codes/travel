<script setup>
import { useRouter } from 'vue-router'; // Import useRouter
import policyFormPdf from './policyForm.pdf.vue';
import Button from '@/components/Button.vue';
// import { closeModal } from '@customizer/modal-x';

const props = defineProps({
	data: {
		type: Object,
		required: true
	}
});

const router = useRouter(); // Get the router instance

console.log(props.data);

// Method to navigate and close modal
const goToNext = () => {
	closeModal(true); // Close the modal
	router.push('/signNow'); // Navigate to the next page
};
</script>

<template>
	<div class="w-full h-full bg-black/50">
		<policyFormPdf
		v-bind="data"
		/>
		<div class='fixed z-10 bottom-2 right-2 flex items-center gap-4'>
		

			
	

			<Button class="bg-yellow-500 shadow-xl border border-white" @click="closeModal()">
				close 
			</Button>
		</div>
	</div>
</template>