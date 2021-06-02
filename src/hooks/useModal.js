import {useState} from 'react';

const useModal = () => {
    const [isVisible, setVisible] = useState(false);
    const [message, setMessage] = useState('');

    const hiddenModal = () => {
        setVisible(false);
        setMessage('');
    };

    const showModal = (messageValue) => {
        setVisible(true);
        setMessage(messageValue);
        setTimeout(hiddenModal, 5000);
    };

    return {
        isVisible,
        message,
        showModal,
        hiddenModal,
    };
};

export default useModal;