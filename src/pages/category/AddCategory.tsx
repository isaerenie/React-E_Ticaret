import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { categorySave } from "../../services/categoryService"

function AddCategory() {
    const nav = useNavigate()
    const [categoryTitle, setCategoryTitle] = useState('')
    const fncAddCategory = (evt: React.FormEvent) => {
        evt.preventDefault()
        categorySave(categoryTitle).then(res => {
            if (res.status === 200) {
                toast.success("Yeni Kategori Eklendi", {
                    position: toast.POSITION.TOP_CENTER
                });
                nav('/category')
            } else {
                toast.error("Yeni Kategori  eklenmedi!", {
                    position: toast.POSITION.TOP_CENTER

                });
            }
        })
    }
    return (
        <>
            <div className="container m-5">
                <div className="row mb-4">
                    <div className="bg-primary text-white text-center">
                        <h3 >Yeni Kategori</h3>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={fncAddCategory}>
                            <div className="mb-3">
                                <label htmlFor="name">Kategori Adı</label>
                                <input required onChange={(evt) => setCategoryTitle(evt.target.value)} type="text" name="name" id="name" className="form-control" />
                            </div>
                            <div className="mb-3 float-right">
                                <button role="button" className="nav-link btn btn-primary text-white p-1"  >Kaydet</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddCategory