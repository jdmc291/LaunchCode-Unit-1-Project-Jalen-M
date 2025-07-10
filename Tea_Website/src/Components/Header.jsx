// ideally, the user will pass in the name for the prop so the name can be dynamically changed
import Teacup from "../assets/TeaIcon.jpg"
import Logo from "../assets/Icon.svg"
import { HeaderData } from "../HeaderData"

const Header = (props) => {

    let headerItems = HeaderData.map((singleLink) => {
        return (
            <li className="links-in-header">
                <a href="#">
                    {singleLink.Title}
                </a>
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