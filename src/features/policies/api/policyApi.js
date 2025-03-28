import ApiService from "@/service/ApiService";
import { getQueryFormObject } from "@/utils/utils";

const api = new ApiService(import.meta.env?.v_API_URL_PERMISSIONS);

const path = "/passengers";

export function getAllPermissions(query = {}) {
  const qr = getQueryFormObject(query);
  return api.addAuthenticationHeader().get(`${path}/list${qr}`);
}

export function createPermission(data) {
  return api.addAuthenticationHeader().post(`${path}`, data);
}
export function createPolicy(data) {
  return api.addAuthenticationHeader().post(`/passengers/create`, data);
}

export function removePermission(id) {
  return api.addAuthenticationHeader().delete(`${path}/${id}`);
}

export function getPermissionById(id) {
  return api.addAuthenticationHeader().get(`${path}/${id}`);
}

export function updatePermission(id, data) {
  return api.addAuthenticationHeader().put(`${path}/${id}`, data);
}
