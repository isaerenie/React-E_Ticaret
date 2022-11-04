import { useState, useEffect, SetStateAction } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { ProBilgiler } from "../../models/IProductss"
import { categoryDelete, categoryList, categorySave } from "../../services/categoryService"
import { productSave } from "../../services/productService"
import { toast } from "react-toastify";
import { ICategory, Result } from "../../models/ICategory"
import { control } from "../../utils/control"
function Category() {

  const navigate = useNavigate()
  const user = control()!.result.authorities[0].authority
  const gotoUpdate = (item: Result) => {
    navigate('/update/' + item.cid, { state: item })
  }

  const [categories, setcategories] = useState<Result[]>([])
  const [categoryTitle, setCategoryTitle] = useState('')
  useEffect(() => {
    categoryList().then(res => {
      const da = res.data.result
      setcategories(da)
    })
  }, [])
  const fncAddCategory = (evt: React.FormEvent) => {
    evt.preventDefault()
    categorySave(categoryTitle).then(res => {

      categoryList()
    })
  }

  const fncDelete = (cid: number) => {
    console.log(cid);

    categoryDelete(cid).then(res => {
      console.log(res.data.status)
      if (res.status) {
        toast.success("Kategori Silindi", {
          position: toast.POSITION.TOP_CENTER
        });
        window.location.href = '/category'
      } else {
        toast.error("Kategori Silinemedi!", {
          position: toast.POSITION.TOP_CENTER

        });
      }
    })
  }
  const user1=control()!.result.authorities[0].authority
  return (
    <>
      <div className="bg-secondary text-white p-2 text-center">
        <div className="container">
          <h1 className="h5"> Kategoriler</h1>
        </div>
      </div>
      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            {user1 === 'ROLE_admin' &&
              <div className="col-md-4">
                <NavLink className="btn btn-success" to='/addcategory'>
                  <i className="fa fa-plus"></i> Kategori Ekle
                </NavLink>
              </div>
            }
            <div className="col-md-4 ml-auto">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Kategori    Ara" />
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
                  <td>Kategori Adı</td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, index) =>
                  <tr key={index}>
                    <td>{item.cid}</td>
                    <td>{item.categoryTitle}</td>
                    {user === 'ROLE_admin'
                      ?
                      <>
                        <td className="text-right">
                          <button onClick={() => gotoUpdate(item)} className="btn btn-success btn-sm"> <i className="fa fa-caret-right"></i>Güncelle</button>
                        </td>
                        <td className="text-right">
                          <NavLink onClick={() => fncDelete(item.cid)} className='btn btn-danger btn-sm' to='/category'>
                            Sil
                          </NavLink>
                        </td>
                      </>
                      :
                      <>
                      </>
                    }
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
export default Category;