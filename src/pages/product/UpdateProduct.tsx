import { execFile } from "child_process";
import { pid } from "process";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Result } from "../../models/ICategory";
import { IProductss, ProBilgiler } from "../../models/IProductss";
import { categoryList } from "../../services/categoryService";
import { getProductById, productList, productUpdate } from "../../services/productService";
 

function UpdateProduct() {  
    const [catlist, setCatlist] = useState<Result[]>([])
    const [cid, setCid] = useState(0);
    const [productTitle, setProductTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [onSale, setOnSale] = useState(false)
    const [item, setItem] = useState<ProBilgiler>()
    const nav = useNavigate()
    const { pid } = useParams()
    const loc = useLocation()

    useEffect(() => {
        if (loc.state) {
            const itm = loc.state as ProBilgiler
            console.log(itm);
            setItem(itm)
           
        } else {

        }
    }, [])
 
    const fncUpdateProduct = (evt: React.FormEvent) => {
        // evt.preventDefault()
        // productUpdate(pid,cid,productTitle,price,description,onSale).then(res => {
    
        // })
      }
      useEffect(() => {
        categoryList().then(res => {
            const da = res.data.result
            setCatlist(da)
        })
        productList()
    }, [])

    const selectChange = (event: any) => {
        const value = event.target.value;
        setCid(value)
    };
 
    function handleChange(event: any) {
        setCid(event.target.value)
    }
  return (
    <>
      <div className="container m-5">
                <div className="row mb-4">
                    <div className="bg-primary text-white text-center">
                        <h3 >Yeni Ürün</h3>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={fncUpdateProduct}>
                            <div className="mb-3">
                                <label htmlFor="name">Ürün Adı</label>
                                <input value={item?.productTitle} required onChange={(evt) => setProductTitle(evt.target.value)} type="text" name="name" id="name" className="form-control" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="price">Fiyatı</label>
                                <input value={item?.price} required onChange={(evt) => setPrice(evt.target.valueAsNumber)} type="number" name="price" id="price" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category">Kategori   </label>
                                <div className="col-md-4">

                                    <select value={item?.categoryTitle} required name="category" id="category" className="form-control" onChange={handleChange}>
                                        {catlist.map((item, index) =>
                                            <option  value={item.cid}>{item.categoryTitle}</option>
                                        )}
                                    </select>

                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input  onChange={(evt) => setOnSale(evt.target.checked)} className="form-check-input" type="checkbox" name="" id="isApproved" />
                                    <label className="form-check-label" htmlFor="İndirimde">
                                        İndirimde
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description">Açıklama</label>
                                <textarea value={item?.description} required onChange={(evt) => setDescription(evt.target.value)} name="" id="description" className="form-control"></textarea>
                            </div>
                            <div className="mb-3 float-right">
                                <button  role="button" className="nav-link btn btn-primary text-white p-1"  >Kaydet</button>                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    
    </>
  )
}
export default UpdateProduct