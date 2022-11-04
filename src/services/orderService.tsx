import { siteConfig } from "../configs/axiosConfig"
import { IOrders } from "../models/IOrders"
import { IProductss } from "../models/IProductss"

export const listAll = () => {
    return siteConfig.get<IOrders>("orders/listAll")
}

export const orderDelete = (oid:number) => {
    return siteConfig.delete<IOrders>('/orders/delete/' + oid)
}
export const  orderAdd= ( email:string, pid:number) => {
    const sendParams = {
        email,pid
    }
    console.log(sendParams);
    
    return siteConfig.post<IOrders>("orders/save",sendParams)
}

 
export const  getOrdersByEmail= ( email:string) => {
    console.log('list order serv');
    const sendParams = {
        email
    }
    return siteConfig.get<IOrders>("orders/getOrdersByEmail/",{params:sendParams})
}
 