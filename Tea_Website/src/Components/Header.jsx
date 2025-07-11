// ideally, the user will pass in the name for the prop so the name can be dynamically changed
import Teacup from "../assets/TeaIcon.jpg"
import Logo from "../assets/Icon.svg"
import { HeaderData } from "../HeaderData"
import { Link } from "react-router-dom"

const Header = (props) => {

    let headerItems = HeaderData.map((singleLink) => {
        console.log(singleLink.Link)
        return (
            <li key={singleLink.Id} className="links-in-header">
                <Link to={`${singleLink.Link}`}>
                    {singleLink.Title}
                </Link>
            </li>
        )
    })
    return (

        <nav className="header">

            <span className="lavishly-yours-regular">
                        The Tea House
                    </span>
            <ul className="links-section">
                

                {headerItems}

            </ul>

        </nav>

    )
}

export default Header