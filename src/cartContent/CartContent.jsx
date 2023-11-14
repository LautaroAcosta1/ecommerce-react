import { useContext } from "react"
import { dataContext } from "../context/DataContext"
import CartElements from "./CartElements"
import CartTotal from "./CartTotal"
import "./cartContent.css"

function CartContent() {

    const {cart} =useContext(dataContext)

    return cart.length > 0 ? (
        <div className="cartElements-container">
            <>
                <CartElements/>
                <CartTotal/>
            </>
        </div>
    ) : (
        <h2 className="cartMessage">
            Cart empty.
        </h2>
    )
}

export default CartContent