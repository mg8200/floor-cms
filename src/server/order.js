import axios from "axios"
import {
    serverIndex
} from "./serverIndex"
axios.defaults.baseURL = serverIndex;

// 获取待审核的数量
export async function auditOrderCount() {
    const {
        data: res
    } = await axios.get(`/order/auditOrderCount`)
    return res
}