import {useState, useMemo} from 'react';

const useForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [bithdate, setBirthdate] = useState(null);

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
        return firstName && lastName && email && phone && bithdate;
    }, [firstName, lastName, email, phone, bithdate]);

    return {
        firstName,
        changeFirstName,
        lastName,
        changeLastName,
        email,
        changeEmail,
        phone,
        changePhone,
        bithdate,
        changeBirthdate,
        isValidForm,
    };
};

export default useForm;