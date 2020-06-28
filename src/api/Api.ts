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
    getProfile(userId:number) {
       return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)

    }
}

export const authAPI = {
    me() { return  instance.get(`/auth/me`, {})
    }
}

