import "./Style.scss"
//import slide from "../../assets/img/slide-1.png"
import React, { useState } from 'react'

const Carraousel = (contenido) => {
    
    const [carruselSelected, setCarruselSelected] = useState(0)
    console.log(contenido)
    return (
        <div className="my-carrousel">
            {  
                contenido.children.map((item, index) => {
                    return (         
                        <div className={`${carruselSelected === index ? "item active" : "item"}`}>            
                            <div className="content">
                                <div className="back-image">
                                    {item.img}
                                </div>   
                                <div className="text1-s1">
                                    <p>
                                        {item.title}
                                    </p>
                                    
                                </div>       
                            </div>
                        </div>)
                })
            }
            <div className="container-points">
                {
                    contenido.children.map((item, index) => {
                        return (
                            <div onClick={() => setCarruselSelected(index)} className={`${carruselSelected === index ? "point selected" : "point"}`}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carraousel