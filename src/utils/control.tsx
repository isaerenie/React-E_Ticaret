import { IJwt } from "../models/IJwt"
import { IUser } from "../models/IUser"
import { decrypt } from "./encdecrypt"

export const control = () : IJwt | null => {
    // remember control
    console.log('control')
    const stRemember = localStorage.getItem('user')
    if ( stRemember ) {
        sessionStorage.setItem('user', stRemember)
    }
    const stEncData = sessionStorage.getItem('user')
    if ( stEncData ) {
        try {
            const stDdata = decrypt(stEncData)
            const jwt = JSON.parse(stDdata) as IJwt
            return jwt
        } catch (error) {
            sessionStorage.removeItem('user')
        }
    }
    return null
}
