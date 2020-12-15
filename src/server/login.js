import axios from "axios"
import {
    serverIndex
} from "./serverIndex"
axios.defaults.baseURL = serverIndex;

// 登录
export async function login(username, password) {
    const {
        data: res
    } = await axios.post(`/user/cmsLogin`, {
        username,
        password
    })
    return res
}