import PropTypes from "prop-types";

const TextBox = ({ label, placeholder, value, onChange }) => {
    return (
        <>
            <label className="textbox-label">
                Test Label
            </label>
        </>
    )
};

TextBox.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default TextBox;