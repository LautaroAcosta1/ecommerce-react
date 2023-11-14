import "./cartWidget.css"
import TotalItems from "../cartContent/TotalItems"

function CartWidget() {
    return (
        <div className="cartWidget-container">
            <div className="fa-solid fa-cart-shopping" id='cart'></div>
            <div className='number-container'>
                <span className='number'>
                    <TotalItems/>
                </span>
            </div>
        </div>
    )
}

export default CartWidget