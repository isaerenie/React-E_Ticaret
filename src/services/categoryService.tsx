import { siteConfig } from "../configs/axiosConfig"
import { ICategory, Result } from "../models/ICategory"
import { IOrders } from "../models/IOrders"
import { IProductss } from "../models/IProductss"
 

export const categorySave = (categoryTitle:string) => {
    const sendParams = {
        categoryTitle:categoryTitle
    }

    return siteConfig.post<ICategory>("category/save",sendParams)
}
 
export const categoryList = () => {
    return siteConfig.get<ICategory>("category/list")
}
export const categoryUpdate = () => {
    return siteConfig.get<ICategory>("category/update")
}
export const categoryDelete = (cid:number) => {
  
    return siteConfig.delete<ICategory>("category/delete/"+cid)
}

