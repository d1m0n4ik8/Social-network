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
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get('profile/' + userId).then((response) => response.data)
   },
}

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data)
   },
   follow(userId) {
      return instance.post(`follow/${userId}`).then((response) => response.data)
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`).then((response) => response.data)
   },
}