import ApiService from '@/service/ApiService';
import { getQueryFormObject } from '@/utils/utils';

const api = new ApiService()

const path = '/insurance';

export function createpremium(data) {
    // const qr = getQueryFormObject(query)
    return api.addAuthenticationHeader().post(`${path}/calculate`, data)
}


