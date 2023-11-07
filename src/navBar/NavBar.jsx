import "./navBar.css"
import CartWidget from "../cartWidget/CartWidget"
import Logo from "../logo/Logo"
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <div className="navBar-container">
            <nav className="navBar">
                <Link className="navBar-logo" to={"/"}><Logo/></Link>
                <Link className="navBar-cartWidget" to={"/cart"}><CartWidget/></Link>
            </nav>
        </div> 
    )
}

export default NavBar