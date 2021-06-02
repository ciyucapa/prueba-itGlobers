import PropTypes from 'prop-types';

import Form from '../../components/commons/form';
import useForm from '../../hooks/useForm';
import BaseScene from '../baseScene';

import './app.css'


const App = (props) => {
    const hook = useForm(props.showModal);
    return (
        <>
            {props.agency ? (
                <div className="app__message">
                    Hola, bienvenido, sabemos que quieres viajar en un {props.agency.name}, por favor diligencia el siguiente formulario:
                    <Form {...hook} agency={props.agency}/>
                </div>
            ) : (
                <div className="app__message--welcome">
                    Bienvenido, puedes escoger una agencia!
                </div>
            )}
        </>
    );
};

App.propType = {
    agency: PropTypes.any,
    showModal: PropTypes.func,
};

App.defaultProps = {
    agency: null,
    showModal: () => {},
};

export default BaseScene(App);