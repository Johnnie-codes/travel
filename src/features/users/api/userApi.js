import ApiService from "@/service/ApiService";
import { getQueryFormObject } from "@/utils/utils";

const api = new ApiService(import.meta.env?.v_API_URL_PERMISSIONS);

const path = "/auth/users";

export function getAllUsers(query = {}) {
  const qr = getQueryFormObject(query);
  return api.addAuthenticationHeader().get(`${path}/all${qr}`);
}

export function createUser(data) {
  return api.addAuthenticationHeader().post(`${path}/signup`, data);
}

export function removeUser(id) {
  return api.addAuthenticationHeader().delete(`${path}/${id}`);
}

export function getUserByID(id) {
  return api.addAuthenticationHeader().get(`${path}${id}`);
}

export function updateUser(id) {
  return api.addAuthenticationHeader().put(`${path}${id}`, data);
}
