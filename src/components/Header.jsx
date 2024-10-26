import PropTypes from "prop-types";

const Header = ({ links, loggedInUser }) => {
    return (
        <>
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