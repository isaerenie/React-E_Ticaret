import { title } from "process";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ICategory, Result } from "../models/ICategory";
import { ProBilgiler } from "../models/IProductss";
import { categoryList } from "../services/categoryService";
import { productList } from "../services/productService";
import ProCut from "./product/ProCut";

function SiteHome() {
    const navigate = useNavigate()
    const [catlist, setCatlist] = useState<Result[]>([])
    const [products, setProducts] = useState<ProBilgiler[]>([])
    useEffect(() => {
        categoryList().then(res => {
            const da = res.data.result
            setCatlist(da)
        })
        categoryList()
    }, [])

    const gotoDetail = (item: ProBilgiler) => {
        navigate('/details/' + item.pid, { state: item })
    }
    const gotoProCut = (item: Result) => {
        navigate('/procut/' + item.cid, { state: item })
    }
    useEffect(() => {
        productList().then(res => {
            const arr = res.data.result
            setProducts(arr)
        })
    }, [])
    return (

        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        {catlist.map((item, index) =>
                             
                               
                                    <ul className=" nav bg-light flex-column p-1 border ">
                                        <li className="nav-item ">
                                            <a onClick={() => gotoProCut(item)} className="nav-link btn-outline-primary text-black text-uppercase" >
                                                {item.categoryTitle}
                                            </a>

                                        </li>
                                    </ul>
                                
                           

                        )}
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {products.map((item, index) =>
                                <div className="col-md-3 mt-3">
                                    <div className="card">
                                        <img src={item.file} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6 className="card-title">{item.productTitle}</h6>
                                            <p className="card-text text-center"><span className="badge bg-primary">{item.price}-TL</span></p>
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
export default SiteHome