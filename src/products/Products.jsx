import {useContext} from "react";
import "./products.css"
import {dataContext} from "../context/DataContext";

function Products() {

    const {data, buyProducts} = useContext(dataContext)

    return data.map((product) => {
        return (
            <div key={product.id} className="card-container">
                <div className="image-container">
                    <img className="image-card" src={product.img} alt={product.name}/>
                </div>
                <h3 className="name-card">{product.name}</h3>
                <h4 className="price-card">${product.price}</h4>
                <button className="btn-card" onClick={() => buyProducts(product)}>COMPRAR</button>
            </div>
        )
    })
}

export default Products