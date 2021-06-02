import PropTypes from 'prop-types';

const InputField = (props) => (
    <div>  
        <input 
            {...props}
            className="form__input"
        />
        {props.error !== '' && (
            <div className="error__input">
                {props.error}
            </div>
        )}
    </div>
);

InputField.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    pattern: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    error: PropTypes.string,
};

InputField.defaultProps = {
    type: '',
    value: '',
    placeholder: '',
    onChangeText: () => {},
    pattern: "",
    min: '',
    max: '',
    error: '',
};

export default InputField;