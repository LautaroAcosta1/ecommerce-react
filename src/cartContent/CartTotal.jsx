import { useContext } from "react"
import { dataContext } from "../context/DataContext"

function CartTotal() {

    const {cart} = useContext(dataContext)
    const total = cart.reduce((acum, elem) => acum + elem.price * elem.quanty, 0)

    return (
        <div className="cartTotal">
            <h3>
                Total: ${total}
            </h3>
        </div>
    )
}

export default CartTotal