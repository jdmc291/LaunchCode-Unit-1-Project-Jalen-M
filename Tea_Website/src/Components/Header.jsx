// ideally, the user will pass in the name for the prop so the name can be dynamically changed
import { HeaderData } from "../HeaderData"
import { Link } from "react-router-dom"

const Header = (props) => {

    const {title} = props

// This headerItems variable will map all the main pages along with the links to get there
    let headerItems = HeaderData.map((singleLink) => {

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
                        {title}
                    </span>
            <ul className="links-section">

                {headerItems}

            </ul>

        </nav>

    )
}

export default Header