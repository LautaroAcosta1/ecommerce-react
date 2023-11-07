import { useContext } from "react"
import { dataContext } from "../context/DataContext"

function CartItemCounter({product}) {

    const {cart, setCart, buyProducts} = useContext(dataContext)



    const decrese = () => {
        const productRepeat = cart.find((item) => item.id === product.id)

        productRepeat.quanty !== 1 && setCart(cart.map((item) => (item.id === product.id ? {...product, quanty: productRepeat.quanty - 1} : item)))
    }

    return (
        <div className="counter-container">
            <button className="btnCounter" onClick={decrese}>
                -
            </button>
            <p className="quanty">
                {product.quanty}
            </p>
            <button className="btnCounter" onClick={() => buyProducts(product)}>
                +
            </button>
        </div>
    )
}

export default CartItemCounter