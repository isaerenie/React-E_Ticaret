import { config } from "process"
import { userConfig } from "../configs/axiosConfig"
import { IJwt } from "../models/IJwt"
import { ILogin } from "../models/ILogin"
import { IUser } from "../models/IUser"




export const userLogin = (username: string, password: string) => {
    const sendData = {
        username: username,
        password: password
    }
    return userConfig.post<IJwt>('user/auth', sendData)
}
export const userRegister = (firstName: string, lastName: string, email: string, password: string) => {
    const sendData = {
        firstName: firstName,
        lastName: firstName,
        email:email,
        password: password,
        enabled: true,
        tokenExpired: true,
        roles: [
        {id: 2, name: 'ROLE_customer'}]

    }
    return userConfig.post<IUser>('user/register', sendData)
}

export const userList = () => {
    return userConfig.get<IUser>('user/list')
}




