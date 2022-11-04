import { useState, useEffect, SetStateAction } from "react"
import { IUser } from "../models/IUser"
import { userList } from "../services/userService"




function Customer() {

    const [userx, setUserx] = useState<IUser[]>([])
    useEffect(() => {
        userList().then(res => {
            const da = res.data as IUser
            console.log(da);
            
        })
    }, [])

    const customlst = userx.map((item) => {
        console.log(item.email);
        return (
            <td>{item.firstName}</td>        
        )
      });
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
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4 ml-auto">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Müşteri ara  Ara" />
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
                                </tr>
                            </thead>
                            <tbody>
                            
                            
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

            <div className="modal fade" id="newProductModal">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">New Product</h5>
                            <button className="close" data-bs-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form  >
                                <div className="mb-3">
                                    <label htmlFor="name">Ürün Adı</label>
                                    <input required type="text" name="name" id="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price">Fiyatı</label>
                                    <input required type="number" name="price" id="price" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description">Description</label>
                                    <textarea required name="" id="description" className="form-control"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="customFile">Image</label>
                                    <div className="form-file">
                                        <input type="file" name="" className="form-file-input" id="customFile" />
                                        <label className="form-file-label" htmlFor="customFile">
                                            <span className="form-file-text">Choose File</span>
                                            <span className="form-file-button">Browse</span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Customer;