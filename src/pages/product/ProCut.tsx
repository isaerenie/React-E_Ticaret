import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Result } from "../../models/ICategory"
import { ProBilgiler } from "../../models/IProductss"
import { catprolist, productSave } from "../../services/productService"
import { control } from "../../utils/control"

function ProCut() {
    const user = control()!.result.authorities[0].authority
    const navigate = useNavigate()
    const [products, setProducts] = useState<ProBilgiler[]>([])
    const { cid } = useParams()
    //  const loc = useLocation()
    useEffect(() => {
        catprolist(Number(cid!)).then(res => {
            const arr = res.data.result
            setProducts(arr)
        })
    }, [])
    const gotoDetail = (item: ProBilgiler) => {
        navigate('/details/' + item.pid, { state: item })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-8">
                       <div className="row">
                       {products.map((item, index) =>
                            <div className="col-md-4 m-3">
                                <div className="card">
                                    <img src={item.file} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h6 className="card-title">{item.productTitle}</h6>
                                        <p className="card-text text-center"><span className="badge bg-primary">{item.price}</span></p>
                                        <button onClick={() => gotoDetail(item)} className="btn btn-success btn-sm"> <i className="fa fa-caret-right"></i>Detay</button>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProCut