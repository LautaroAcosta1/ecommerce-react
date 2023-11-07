import Banner from "../banner/Banner"
import Products from "../products/Products"

function Home() {
    return (
        <>
            <Banner/>
            <div className="products-card-container">
                <Products/>
            </div>
        </>
    )
}

export default Home