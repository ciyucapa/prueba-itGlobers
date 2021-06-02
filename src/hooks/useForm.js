import {useState, useMemo, useCallback} from 'react';

import {validateEmail, ageCalculator} from '../utils';

const useForm = (showModal = () => {}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthdate, setBirthdate] = useState(null);
    const [isFirstTouchButton, setFirstTouchButton] = useState(false);

    const resetForm = () => {
        setBirthdate(null);
        setEmail('');
        setFirstName('');
        setLastName('');
        setPhone('');
        setFirstTouchButton(false);
    };

    const changeFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const changeLastName = (event) => {
        setLastName(event.target.value);
    };

    const changeEmail = (event) => {
        setEmail(event.target.value);
    };

    const changePhone = (event) => {
        setPhone(event.target.value);
    };

    const changeBirthdate = (event) => {
        setBirthdate(event.target.value);
    };

    const isValidForm = useMemo(() => {
        return firstName && lastName && email && phone && birthdate;
    }, [firstName, lastName, email, phone, birthdate]);

    const errors = useMemo(() => {
        return {
            firstName: isFirstTouchButton ? firstName === '' ? 'El nombre es requerido' : '' : '',
            lastName: isFirstTouchButton ? lastName === '' ? 'El apellido es requerido' : '' : '',
            phone: isFirstTouchButton ? phone === '' ? 'El telefono es requerido' : '' : '',
            birthdate: isFirstTouchButton ? 
                birthdate === null ? 'La fecha de nacimiento es requerida' : 
                    ageCalculator(birthdate) < 18 ? 
                        'Debes ser mayor de edad' : '' : '',
            email: isFirstTouchButton ? validateEmail(email) ? '' : 'El correo es invalido' : '',
        }
    }, [email, isFirstTouchButton, firstName, lastName, phone, birthdate]);

    const onSubmit = useCallback((agency) => {
        setFirstTouchButton(true);

        if (isValidForm) {
            console.log('Request:', {
                firstName,
                lastName,
                email,
                phone,
                birthdate,
                agency_id: agency.id, 
            });

            resetForm();
            showModal('Tu información fue enviada con éxito, estaremos en contacto contigo');
        }
    }, [isValidForm, firstName, lastName, email, phone, birthdate]);

    return {
        firstName,
        changeFirstName,
        lastName,
        changeLastName,
        email,
        changeEmail,
        phone,
        changePhone,
        birthdate,
        changeBirthdate,
        isValidForm,
        onSubmit,
        errors,
    };
};

export default useForm;