import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { IOrders, OrderList } from "../models/IOrders"
import { ProBilgiler } from "../models/IProductss"
import { categoryList } from "../services/categoryService"
import { listAll } from "../services/orderService"
import { userList } from "../services/userService"
import { control } from "../utils/control"

function Dashboard() {
    const [userCount, setUserCount] = useState(0)
    const [products, setProducts] = useState<OrderList[]>([])
    const rol = control()!.result.authorities[0].authority
    const navigate = useNavigate()
    const gotoDetail = (item: OrderList) => {
        navigate('/details/' + item, { state: item })
      }
    const getOrderList = () => {
        listAll().then(res => {
            if (res.data) {
                const arr = res.data.result
                console.log(arr)
                setProducts(arr)
            }
        })

    }

    useEffect(() => {
        getOrderList()
    }, [])
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card text-center bg-primary text-white mb-3">
                            <div className="card-body">
                                <h3>Müşeriler</h3>
                                <h4 className="display-4"> <i className="fa fa-user"></i>  </h4>
                                <a href="" className="btn btn-outline-light btn-sm">Yönetim</a>
                            </div>
                        </div>
                        <div className="card text-center bg-success text-white mb-3">
                            <div className="card-body">
                                <h3>Ürünler</h3>
                                <h4 className="display-4"> <i className="fa fa-folder-open"></i>  </h4>
                                <a href="/products" className="btn btn-outline-light btn-sm">Yönetim</a>
                            </div>
                        </div>
                        <div className="card text-center bg-info text-white mb-3">
                            <div className="card-body">
                                <h3>KAtegoriler</h3>
                                <h4 className="display-4"> <i className="fa fa-folder-open"></i>  </h4>
                                <a href="/category" className="btn btn-outline-light btn-sm">Yönetim</a>
                            </div>
                        </div>
                        <div className="card text-center bg-warning text-white mb-3">
                            <div className="card-body">
                                <h3>Siparirşler</h3>
                                <h4 className="display-4"> <i className="fa fa-shopping-basket"></i>  </h4>
                                <a href="" className="btn btn-outline-light btn-sm">Yönetim</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">

                        <div className="accordion" id="accordionExample">
                            <div className="card mb-3">
                                <div className="card-header" id="headingOne">
                                    <button type="button" data-toggle="collapse" data-target="#collapseOne" className="btn btn-link btn-block text-left text-decoration-none link-dark">
                                        En son Siparişler
                                    </button>
                                </div>

                                <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                    <table className="table mb-0">
                                        <thead className="table-secondary">
                                            <tr>
                                                <td>Sipariş Id</td>
                                                <td>Email</td>
                                                <td>Fiyat</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((item, index) =>
                                                <tr>
                                                    <td>{item.oid}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.price}</td>

                                                    <td className="text-right">
                                                    <button onClick={() => gotoDetail(item)} className="btn btn-success btn-sm"> <i className="fa fa-caret-right"></i>Detay</button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}
export default Dashboard