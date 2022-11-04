import { siteConfig } from "../configs/axiosConfig"
import { IOrders } from "../models/IOrders"
import { IProductss, ProBilgiler } from "../models/IProductss"
 

export const productSave = (cid:number,productTitle:string,description:string,price:number,onSale:boolean) => {
    const sendParams = {
        cid: cid,
        productTitle: productTitle,
        description: description,
        price: price,
        onSale: onSale
    }

    return siteConfig.post<IProductss>("product/save",sendParams)
}
 
export const productList = () => {
    return siteConfig.get<IProductss>("product/list")
}

export const productDelete = (pid:number) => {
    console.log(pid);
    
    return siteConfig.delete<IProductss>("product/delete/"+pid)
}
export const catprolist = (cid:number) => {
     console.log(cid);
     
    return siteConfig.get<IProductss>('product/getcatprolist/'+cid)
}

export const productUpdate = (pid:number,cid:number ,productTitle:string,description:string,price:number,onSale:boolean ) => {
    const sendData = {
        pid:pid,
        productTitle:productTitle,
        cid:cid,
        description:description,
        onSale:onSale,
        price:price
    }
    return siteConfig.post<IProductss>("product/update" , sendData )
}

export const getProductById = (pid:number) => {
    console.log(pid);
    
   return siteConfig.get<IProductss>('product/getProductById/'+pid)
}