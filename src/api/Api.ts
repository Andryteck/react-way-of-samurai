import axios from "types-axios";


const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        headers: {
            'API-KEY': '18300c65-a005-4e58-817e-a7be6c453c64'
        }
    }
)

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUsers(userId: number) {
        return instance.post(`/follow/${userId}`, {})
        // .then(response => {
        //     return response.data
        // })
    },
    unfollowUsers(userId: number) {
        return instance.delete(`/follow/${userId}`)
        // .then(response => {
        //     return response.data
        // })
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const authAPI = {

    me() {
        return instance.get(`/auth/me`)
    },
    login(email: string, password: string, rememberMe = false, captcha = null) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    },
    savePhoto(photoFile: any) {
        let formData = new FormData()
        formData.append('image',photoFile)

        return instance.put(`profile/photo/`, formData, {
            headers: {
               'Content-type': "multipart/form-data"
            }
        })
    }

}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.put('security/get-captcha-url')
    }
}


