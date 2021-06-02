import PropTypes from 'prop-types';

import './modal.css';

const Modal = (props) => {
    const {isVisible, message} = props;

    if (!isVisible) {
        return null;
    }

    return (
        <div className="modal__container" >
            <div className="modal__box" >
                {message}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isVisible: PropTypes.bool,
};

Modal.defaultProps = {
    isVisible: false,
};

export default Modal;