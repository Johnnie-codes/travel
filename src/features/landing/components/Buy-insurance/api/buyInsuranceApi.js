import ApiService from "@/service/ApiService";
const api =new ApiService
const path ='/travel'


export function createPassenger(data){


    return api.addAuthenticationHeader().post(`/passengers`)
}
export function createPayment(id) {
    return api.addAuthenticationHeader().post(`/payments/initiate/${id}`)
  }
  