import * as axios from 'axios'
const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: { 'API-KEY': 'd3a2fe5d-2794-4fd5-984e-f696982552a3' },
})

export const authAPI = {
   getAuth() {
      return instance.get(`auth/me`).then((response) => response.data)
   },
   login(email, password, rememberMe = false, captcha = null) {
      return instance.post(`auth/login`, { email, password, rememberMe, captcha }).then((response) => {
         return response.data
      })
   },
   logout() {
      return instance.delete(`auth/login`).then((response) => response.data)
   },
}

export const profileAPI = {
   requestProfile(userId) {
      return instance.get('profile/' + userId).then((response) => response.data)
   },
   requestStatus(userId) {
      return instance.get('profile/status/' + userId).then((response) => response.data)
   },
   updateStatus(status) {
      return instance.put('profile/status', { status }).then((response) => response.data)
   },
   savePhoto(photoFile) {
      const formData = new FormData()
      formData.append('image', photoFile)
      return instance
         .put('profile/photo', formData, { headers: { 'Content-type': 'multipart/form-data' } })
         .then((response) => response.data)
   },
   updateProfileInfo(profileInfo) {
      return instance.put('profile', profileInfo).then((response) => response.data)
   },
   getFollowed(userId) {
      return instance.get(`follow/${userId}`).then((response) => response.data)
   },
}

export const usersAPI = {
   requestUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data)
   },
   follow(userId) {
      return instance.post(`follow/${userId}`).then((response) => response.data)
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`).then((response) => response.data)
   },
}

export const securityAPI = {
   getCaptcha() {
      return instance.get('security/get-captcha-url').then((response) => response.data)
   },
}
