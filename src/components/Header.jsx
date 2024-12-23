import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ links, loggedInUser }) => {
    return (
        <>
            <header>
                <h1 className="main-heading">Figby</h1>
                <nav>
                    <ul className="nav-ul">
                        { links.map((link) => {
                            return <li key={link.path} className="nav-li">
                                <Link key={link.path} to={link.path} className="nav-link">{ link.name }</Link>
                            </li>
                        })}
                    </ul>
                </nav>
            </header>
        </>
    )
};

Header.defaultProps = { loggedInUser: null }

Header.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        isCurrentPage: PropTypes.bool.isRequired
    })),
    loggedInUser: PropTypes.shape({
        username: PropTypes.string.isRequired,
        userId: PropTypes.number.isRequired,
    })
}

export default Header;