import { useState, useEffect, SetStateAction } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import 'react-dropdown/style.css';
import { ProBilgiler } from "../../models/IProductss"
import { categoryList } from "../../services/categoryService"
import { productDelete, productList, productSave } from "../../services/productService"
import { toast } from "react-toastify";
import { Result } from "../../models/ICategory";
import { control } from "../../utils/control";

function Products() {
  const user = control()!.result.authorities[0].authority

  const [cid, setCid] = useState(0);
  const [productTitle, setProductTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [onSale, setOnSale] = useState(false)
  const [catlist, setCatlist] = useState<Result[]>([])
  const [products, setProducts] = useState<ProBilgiler[]>([])
  const navigate = useNavigate()

  const gotoImage = (item: ProBilgiler) => {
    navigate('/imager/' + item.pid, { state: item })
  }

  const gotoDetail = (item: ProBilgiler) => {
    navigate('/details/' + item.pid, { state: item })
  }
  const gotoUpdate = (item: ProBilgiler) => {
    navigate('/update/' + item.pid, { state: item })
  }

  useEffect(() => {
    productList().then(res => {
      const arr = res.data.result
      setProducts(arr)
      productList()
    })
    categoryList().then(res => {
      const da = res.data.result
      setCatlist(da)
    })
    productList()
  }, [])

  const fncAddProduct = (evt: React.FormEvent) => {
    evt.preventDefault()
    productSave(cid, productTitle, description, price, onSale).then(res => {

    })
  }
  const catlst = catlist.map((item, index) => {
    return (
      <option key={index} value={item.cid}> {item.categoryTitle}</option>
    )
  });

const nav=useNavigate()
  const fncDelete = (item: ProBilgiler) => {
    productDelete(item.pid).then(res => {
      console.log(res.data)
      if (res.status) {
        toast.success("Ürün Silindi", {
          position: toast.POSITION.TOP_CENTER
        });   
        window.location.href = '/products'
      } else {
        toast.error("Ürün Silinemedi!", {
          position: toast.POSITION.TOP_CENTER

        });
      }
      
      productList()
    })
  }
  const user1 = control()!.result.authorities[0].authority
  return (
    <>
      <div className="bg-secondary text-white p-2 text-center">
        <div className="container">
          <h1 className="h5"> Ürünler</h1>
        </div>
      </div>
      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            {user1 === 'ROLE_admin' &&
              <div className="col-md-4">
                <NavLink className="btn btn-success" to='/addproduct'><i className="fa fa-plus"></i> Ürün Ekle</NavLink>
              </div>
            }
            <div className="col-md-4 ml-auto">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Ürün Ara" />
                <div className="input-group-append">
                  <button className="btn btn-primary">Arama</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-3">
        <div className="row">
          <div className="col">
            <table className="table mb-0">
              <thead className="table-secondary">
                <tr>
                  <td>id</td>
                  <td>Ürün Resmi</td>
                  <td>Ürün Adı</td>
                  <td>Fiyatı</td>
                  <td>Kategori</td>
                  <td></td>
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
                    <td> {item.price}TL</td>
                    <td> {item.categoryTitle}</td>
                    {user === 'ROLE_admin'
                      ?
                      <>
                        <td className="text-right">
                          <button onClick={() => gotoImage(item)} className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Resim Ekle</button>
                        </td>
                        <td className="text-right">
                          <button onClick={() => gotoUpdate(item)} className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Güncelle</button>
                        </td>
                        <td>
                          <td><button onClick={() => fncDelete(item)} className='btn btn-danger btn-sm'>Sil</button></td>
                        </td>
                      </>
                      :
                      <>
                      </>
                    }
                    <td className="text-right">
                      <button onClick={() => gotoDetail(item)} className="btn btn-success btn-sm"> <i className="fa fa-caret-right"></i>Detay</button>
                    </td>
                    <td className="text-right">

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
export default Products;
