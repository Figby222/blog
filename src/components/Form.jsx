import PropTypes from "prop-types";

const Form = ({ submitListener, submitButtonText, children }) => {
    return (
        <>
            <form>
                <button type="submit">Submit</button>
            </form>
        </>
    )
};

Form.propTypes = {
    submitListener: PropTypes.func.isRequired,
    submitButtonText: PropTypes.string.isRequired,
    children: PropTypes.any
}

export default Form;