import PropTypes from 'prop-types';

import InputField from '../inputField';

import './form.css'

const Form = (props) => {
    return(
        <div className="form__container" >
          <div  className="form__box" >
              <InputField 
                type="text" 
                placeholder="Nombres..." 
                error={props.errors.firstName}
                value={props.firstName}
                onChange={props.changeFirstName}/>
              <InputField 
                type="text"
                placeholder="Apellidos..." 
                error={props.errors.lastName}
                value={props.lastName} 
                onChange={props.changeLastName}/>
              <InputField 
                type="email" 
                placeholder="Email..." 
                error={props.errors.email}
                value={props.email} 
                onChange={props.changeEmail} />
              <InputField 
                type="date" 
                placeholder="Edad..." 
                error={props.errors.birthdate}
                value={props.birthdate} 
                onChange={props.changeBirthdate} 
                min="18" max="99" />
              <InputField 
                type="tel" 
                placeholder="Celular..." 
                error={props.errors.phone}
                value={props.phone} 
                onChange={props.changePhone} 
                pattern="[0-9]{9}" />
              <button 
                onClick={() => props.onSubmit(props.agency)}
                className="form__button" 
                type="submit">
                  Enviar
              </button>
          </div>
        </div>
    );
};

Form.propTypes = {
    firstName: PropTypes.string,
    changeFirstName: PropTypes.func,
    lastName: PropTypes.string,
    changeLastName: PropTypes.func,
    email: PropTypes.string,
    changeEmail: PropTypes.func,
    phone: PropTypes.string,
    changePhone: PropTypes.func,
    birthdate: PropTypes.string,
    changeBirthdate: PropTypes.func,
    onSubmit: PropTypes.func,
    isValidForm: PropTypes.bool,
    agency: PropTypes.shape({}).isRequired,
    errors: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      birthdate: PropTypes.string,
    }),
};

Form.defaultProps = {
    firstName: '',
    changeFirstName: () => {},
    lastName: '',
    changeLastName: () => {},
    email: '',
    changeEmail: () => {},
    phone: '',
    changePhone: () => {},
    birthdate: '',
    changeBirthdate: () => {},
    onSubmit: () => {},
    isValidForm: false,
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthdate: '',
    },
};

export default Form;