import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { IUser } from "../models/IUser"
import { userList, userRegister } from "../services/userService"

function Register() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()
    const sendFnc = (evt: React.FormEvent) => {
        evt.preventDefault()

        userRegister(firstName, lastName, email, password).then(res => {
            if (res.status) {
                toast.success("Kayıt başarılı", {
                    position: toast.POSITION.TOP_CENTER
                     
                  });
                  
                  window.location.href = '/register'
            }else{
                toast.error("Kayıt başarısız!", {
                    position: toast.POSITION.TOP_CENTER
                  });
            }
            console.log(res.data);
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
        })
        
    }


    return (
        <div className="container my-5">
            <div className="row justify-content-center ">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header text-center h4 p-3">Kayıt</div>
                        <div className="card-body">
                            <form onSubmit={sendFnc}>
                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-sm-3 col-form-label">Ad</label>
                                    <div className="col-sm-9">
                                        <input required onChange={(evt) => setFirstName(evt.target.value)} type="text" className="form-control" id="firstName" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="password" className="col-sm-3 col-form-label">Soyad</label>
                                    <div className="col-sm-9">
                                        <input required onChange={(evt) => setLastName(evt.target.value)} type="text" className="form-control" id="lastName" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input required onChange={(evt) => setEmail(evt.target.value)} type="email" className="form-control" id="email" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="password" className="col-sm-3 col-form-label">Şifre</label>
                                    <div className="col-sm-9">
                                        <input required onChange={(evt) => setPassword(evt.target.value)} type="password" className="form-control" id="password" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-9 offset-sm-3">
                                        <button className="btn btn-primary"><i className="fa fa-check"></i> Kayıt </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register