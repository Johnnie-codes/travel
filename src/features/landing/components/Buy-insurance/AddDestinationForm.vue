<script setup>
import { useQuotaion } from '../quotaion/store/quotaionStore';
import DestinationForm from './form/DestinationForm.vue';

const props = defineProps({
	next: {
		type: Function,
		required: true
	}
})

const quotaionStore = useQuotaion()
function submit(values) {
	quotaionStore.setDestination(values)
	props.next && props.next()
}
</script>

<template>
	<DestinationForm 
		:destination="quotaionStore.quotation.destination"
		:onSubmit="submit"
	/>
</template>