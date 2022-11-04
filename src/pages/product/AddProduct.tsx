import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Result } from "../../models/ICategory";
import { ProBilgiler } from "../../models/IProductss";
import { categoryList } from "../../services/categoryService";
import { productList, productSave } from "../../services/productService";

function AddProduct() {
    const [catlist, setCatlist] = useState<Result[]>([])
    const [cid, setCid] = useState(0);
    const [productTitle, setProductTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [onSale, setOnSale] = useState(false)
    const nav = useNavigate()

    const fncAddProduct = (evt: React.FormEvent) => {
        evt.preventDefault()
        productSave(cid, productTitle, description, price, onSale).then(res => {
            if (res.status === 200) {
                toast.success("Yeni Ürün Eklendi", {
                    position: toast.POSITION.TOP_CENTER
                });
                nav('/products')
            } else {
                toast.error("Ürün elenmedi!", {
                    position: toast.POSITION.TOP_CENTER

                });
            }
            console.log(res.data);

        })
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
        // const catlst = catlist.map((item) => {
    //     return (
    //         <option key={item.cid} value={item.cid}>{item.categoryTitle}</option>
    //     )
    // });
    return (
        <>
            <div className="container m-5">
                <div className="row mb-4">
                    <div className="bg-primary text-white text-center">
                        <h3 >Yeni Ürün</h3>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={fncAddProduct}>
                            <div className="mb-3">
                                <label htmlFor="name">Ürün Adı</label>
                                <input required onChange={(evt) => setProductTitle(evt.target.value)} type="text" name="name" id="name" className="form-control" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="price">Fiyatı</label>
                                <input required onChange={(evt) => setPrice(evt.target.valueAsNumber)} type="number" name="price" id="price" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category">Kategori   </label>
                                <div className="col-md-4">

                                    <select required name="category" id="category" className="form-control" onChange={handleChange}>
                                        {catlist.map((item, index) =>
                                            <option  value={item.cid}>{item.categoryTitle}</option>
                                        )}
                                    </select>

                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input onChange={(evt) => setOnSale(evt.target.checked)} className="form-check-input" value="adfas" type="checkbox" name="" id="isApproved" />
                                    <label className="form-check-label" htmlFor="İndirimde">
                                        İndirimde
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description">Açıklama</label>
                                <textarea required onChange={(evt) => setDescription(evt.target.value)} name="" id="description" className="form-control"></textarea>
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
export default AddProduct