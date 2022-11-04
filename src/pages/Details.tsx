import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { OrderList } from '../models/IOrders'
import { Image, IProductImage } from '../models/IProductImage'
import { ProBilgiler } from '../models/IProductss'
import { orderAdd } from '../services/orderService'
import { imageList } from '../services/productImageService'
import { control } from '../utils/control'


function Details() {
    const user1=control()!
    
    const [basket, setBasket] = useState<OrderList[]>([])
    const email = control()?.result.username as string
    const navigate = useNavigate()
    const addToBasket = (item: OrderList) => {
        orderAdd(email, item.pid).then(res => {
            if (!user1) {
              return  navigate('/sitehome')
            }
            if (res.status) {
                toast.success("Ürün Eklendi", {
                    position: toast.POSITION.TOP_CENTER
                });

            } else {
                toast.error("Ürün elenmedi!", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })

    }

    const [item, setItem] = useState<OrderList>()
    const [item1, setItem1] = useState<Image[]>([])
    const [bigImage, setBigImage] = useState('')
    const { pid } = useParams()
    const loc = useLocation()
    useEffect(() => {
        imageList(loc.state.pid).then(res => {
            const arr = res.data.images
            setItem1(arr)
        })
    }, [])
    useEffect(() => {
        if (loc.state) {
            const itm = loc.state as OrderList
            console.log(itm);
            setItem(itm)
            setBigImage(itm.file)
        } else {

        }
    }, [])
  
    return (
        <>
            {item &&
                <>

                    <div className="container">
                        {item &&
                            <>
                                <div className="text-right">

                                </div>
                                <div className=" row container my-3">
                                    <div className='col-sm-6'>
                                        <img src={bigImage} className="img-fluid" />
                                        <div>
                                            {item1.map((item, index) =>
                                                <img key={index} role='button' onClick={() => setBigImage(item.file)} src={item.file} className="img-thumbnail m-1" width={100} />
                                            )}
                                        </div>

                                       
                                            <button onClick={() => addToBasket(item)} className=" text-right btn btn-success btn-sm float-end"> <i className="fa fa-shopping-basket"></i> Sepete Ekle</button>
                                      
                                    </div>
                                    <div className='col-sm-6' style={{ height: 200 }}>
                                        <h3 className="p-3 mb-2 bg-primary text-white text-center"> {item.productTitle} </h3>
                                        <div>
                                            {item.description}
                                        </div>
                                        <span className="p-3 mb-5 bg-primary text-white text-center float-end">
                                            {item.price}  TL
                                        </span>
                                    </div>
                                </div>

                            </>
                        }
                    </div>

                </>
            }
        </>
    )
}

export default Details
