import axios from "axios"
const zlpudevAPI = axios.create({
  baseURL: "https://zlpu-dev-103172.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return zlpudevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_cswd_list(payload) {
  return zlpudevAPI.get(`/api/v1/cswd/`)
}
function api_v1_cswd_create(payload) {
  return zlpudevAPI.post(`/api/v1/cswd/`, payload)
}
function api_v1_cswd_retrieve(payload) {
  return zlpudevAPI.get(`/api/v1/cswd/${payload.id}/`)
}
function api_v1_cswd_update(payload) {
  return zlpudevAPI.put(`/api/v1/cswd/${payload.id}/`, payload)
}
function api_v1_cswd_partial_update(payload) {
  return zlpudevAPI.patch(`/api/v1/cswd/${payload.id}/`, payload)
}
function api_v1_cswd_destroy(payload) {
  return zlpudevAPI.delete(`/api/v1/cswd/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return zlpudevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return zlpudevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_vferw_list(payload) {
  return zlpudevAPI.get(`/api/v1/vferw/`)
}
function api_v1_vferw_create(payload) {
  return zlpudevAPI.post(`/api/v1/vferw/`, payload)
}
function api_v1_vferw_retrieve(payload) {
  return zlpudevAPI.get(`/api/v1/vferw/${payload.id}/`)
}
function api_v1_vferw_update(payload) {
  return zlpudevAPI.put(`/api/v1/vferw/${payload.id}/`, payload)
}
function api_v1_vferw_partial_update(payload) {
  return zlpudevAPI.patch(`/api/v1/vferw/${payload.id}/`, payload)
}
function api_v1_vferw_destroy(payload) {
  return zlpudevAPI.delete(`/api/v1/vferw/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return zlpudevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return zlpudevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return zlpudevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return zlpudevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return zlpudevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return zlpudevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return zlpudevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return zlpudevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return zlpudevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return zlpudevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return zlpudevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cswd_list,
  api_v1_cswd_create,
  api_v1_cswd_retrieve,
  api_v1_cswd_update,
  api_v1_cswd_partial_update,
  api_v1_cswd_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_vferw_list,
  api_v1_vferw_create,
  api_v1_vferw_retrieve,
  api_v1_vferw_update,
  api_v1_vferw_partial_update,
  api_v1_vferw_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
