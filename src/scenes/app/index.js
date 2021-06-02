import PropTypes from 'prop-types';

import BaseScene from '../baseScene';

const App = (props) => (
    <>
        {props.agencie ? (
            <div>
                Hola, bienvenido, sabemos que quieres viajar en un {props.agencie.name}, por favor diligencia el siguiente formulario:
            </div>
        ) : (
            <div>
                Bienvenido, puedes escoger una agencia!
            </div>
        )}
    </>
);

App.propType = {
    agencie: PropTypes.any,
};

App.defaultProps = {
    agencie: null,
};

export default BaseScene(App);