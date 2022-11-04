import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { OrderList } from "../models/IOrders";
import { getOrdersByEmail, orderDelete } from "../services/orderService";
 
import { control } from "../utils/control";

function Orders() {

    const [products, setProducts] = useState<OrderList[]>([])
    
    const navigate = useNavigate()
    const useris = control()!.result.username 
    console.log(useris);
    const gotoDetail = (item: OrderList) => {
        navigate('/details/' + item.pid, { state: item })
      }
      const getOrderList=()=>{ 
        getOrdersByEmail(useris).then(res => {
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
    const fncDelete = (item:OrderList) => {
        orderDelete(item.oid).then(res => {
          if (res.status) {
          
            toast.success("Ürün Silindi", {
              position: toast.POSITION.TOP_CENTER
              
            });
          
          } else {
            toast.error("Ürün Silinemedi!", {
              position: toast.POSITION.TOP_CENTER
    
            });
          }
          getOrderList()
        })
      }

    return (
        <>
            <div className="bg-secondary text-white p-2">
                <div className="container">
                    <h1 className="h5 text-center"><i className="fa fa-caret-right"></i> Siparişler</h1>
                </div>

            </div>
            <div className="container my-3">
                <div className="row">
                    <div className="col">
                        <table className="table mb-0">
                            <thead className="table-secondary">
                                <tr>
                                    <td>id</td>
                                    <td>Ürün Resmi</td>
                                    <td>Ürün Adı</td>
                                    <td>Açıklama</td>
                                    <td>Fiyatı</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.pid}</td>
                                        <td>
                                            <img src={item.file} className="img-fluid" width="50" alt="" />
                                        </td>
                                        <td>{item.productTitle}</td>
                                        <td> {item.description}</td>
                                        <td> {item.price}</td>
                                        <td className="text-right">
                      <button onClick={() => gotoDetail(item)} className="btn btn-primary btn-sm">   Detay</button>
                    </td>
                                        <td className="text-right">
                                            <button onClick={()=> fncDelete(item) } className="btn btn-danger btn-sm">   Sil</button>

                                        </td>
                                    </tr>

                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <nav>
                            <ul className="pagination justify-content-end">
                                <li className="page-item disabled">
                                    <a href="" className="page-link">Previous</a>
                                </li>

                                <li className="page-item">
                                    <a href="" className="page-link">1</a>
                                </li>
                                <li className="page-item">
                                    <a href="" className="page-link">2</a>
                                </li>
                                <li className="page-item">
                                    <a href="" className="page-link">3</a>
                                </li>
                                <li className="page-item">
                                    <a href="" className="page-link">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Orders

