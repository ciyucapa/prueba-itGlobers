import PropTypes from 'prop-types';

import Form from '../../components/commons/form';
import useForm from '../../hooks/useForm';
import BaseScene from '../baseScene';

const App = (props) => {
    const hook = useForm();
    return (
        <>
            {props.agency ? (
                <div>
                    Hola, bienvenido, sabemos que quieres viajar en un {props.agency.name}, por favor diligencia el siguiente formulario:
                    <Form {...hook} agency={props.agency}/>
                </div>
            ) : (
                <div>
                    Bienvenido, puedes escoger una agencia!
                </div>
            )}
        </>
    );
};

App.propType = {
    agency: PropTypes.any,
};

App.defaultProps = {
    agency: null,
};

export default BaseScene(App);