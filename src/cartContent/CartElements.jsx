import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import CartItemCounter from "./CartItemCounter";

function CartElements() {

    const {cart, setCart} = useContext(dataContext)

    const deleteProduct = (id) => {
        const foundId = cart.find((elem) => elem.id === id)

        const newCart = cart.filter((elem) => {
            return elem !== foundId
        })

        setCart(newCart)
    }

    return cart.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
                <img className="image-cart" src={product.img} alt={product.name}/>
                <div className="quanty-cart">
                    <h3 className="name-cart">{product.name}</h3>
                    <CartItemCounter product={product}/>
                </div>
                <h4 className="price-cart">${product.price * product.quanty}</h4>
                <button id="btnDelete-cart" className="fa-solid fa-trash" onClick={() => deleteProduct(product.id)}></button>
            </div>
        )
    })
}

export default CartElements