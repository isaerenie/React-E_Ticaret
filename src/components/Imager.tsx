
import { useEffect, useState } from "react"



import { imageAdd, imageDelete, imageList } from "../services/productImageService"
import { Image, IProductImage } from "../models/IProductImage"
import { useLocation, useParams } from "react-router-dom"
function Imager() {
   

    const { pid } = useParams()
    const loc = useLocation()
    const pidd=loc.state.pid
    const [images, setImages] = useState<Image[]>([]) 
    useEffect(() => {
       imageUpdate(pidd)
    }, [])

    const imageUpdate = (pid: number) => {
        imageList(pidd).then(res => {
            setImages(res.data.images as Image[])
        })
    }
    const fncImageDelete = (iid: number) => {
        imageDelete(iid).then(res => {
            if (res.data.status) {
                imageUpdate(pidd)
            }
        })
    }

    const onChangeFile = (evt: any) => {
        if (evt.target.files.length < 1) {
            return;
        }
        for (let i = 0; i < evt.target.files.length; i++) {
            const file = evt.target.files[i];
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                if (file.size < 1000000) {
                    console.log("Gönderim : ", fileReader.result);
                    imageAdd(pidd, fileReader.result as string).then(res => {
                         imageUpdate(pidd)
                    }) 
                }
            }
            fileReader.readAsDataURL(file);
        }
    }
    return (
        <>
        <br />
            <input type='file' multiple onChange={onChangeFile} />
            <br />
            <div className="row">
                {images.map((item, index) =>
                    <div key={index} className="card col-sm-3 m-2">
                        <img src={item.file} className="card-img-top" alt="..." />
                        <div className="card-body mt-5">
                            <a role='button' onClick={()=>fncImageDelete(item.iid)} style={{ position: 'absolute', bottom: 10, right: 10 }} className="btn btn-primary">Sil</a>
                        </div>
                    </div>

                )}
            </div>
           
        </>

    )
}
export default Imager
