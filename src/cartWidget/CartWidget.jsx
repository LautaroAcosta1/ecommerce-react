import "./cartWidget.css"

function CartWidget() {
    return (
        <div className="cartWidget-container">
            <div className="fa-solid fa-cart-shopping" id='cart'></div>
            <div className='number-container'>
                <span className='number'>0</span>
            </div>
        </div>
    )
}

export default CartWidget