import ApiService from "@/service/ApiService";
import { getQueryFormObject } from "@/utils/utils";

const api = new ApiService(import.meta.env?.v_API_URL);

const path = "/roles";

export function getAllRoles(query = {}) {
  const qr = getQueryFormObject(query);
  return api.addAuthenticationHeader().get(`${path}/all${qr}`);
}

export function createRole(data) {
  return api.addAuthenticationHeader().post(`${path}`, data);
}

export function getRoleById(id) {
  return api.addAuthenticationHeader().get(`${path}/${id}`);
}
export function updateByRoleId(id, data) {
  return api.addAuthenticationHeader().put(`${path}/${id}`, data);
}
