import ApiService from '@/service/ApiService';
import { getQueryFormObject } from '@/utils/utils';

const api = new ApiService(import.meta.env?.v_API_URL)


const path = '/passengers';

export function getPassenger(id) {
	// const qr = getQueryFormObject(query)
	return api.addAuthenticationHeader().get(`${path}/all`)
}

export function createPassengers(data) {
	return api.post(`${path}`, data)
}
