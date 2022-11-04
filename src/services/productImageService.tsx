import { siteConfig } from "../configs/axiosConfig"
import { IProductImage } from "../models/IProductImage"



export const imageList = (pid: number) => {
    return siteConfig.get<IProductImage>('image/list/' + pid)
}

export const imageDelete = (iid: number) => {
    return siteConfig.get<IProductImage>('image/delete/' + iid)
}
export const imageAdd = (pid: number, file: string) => {
    const sendData = {
        pid: pid,
        file: file
    }
    return siteConfig.post<IProductImage>('image/add/',sendData)
}