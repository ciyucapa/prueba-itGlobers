import PropTypes from 'prop-types';

import OptionsList from './optionsList';

import './navbar.css'

const SliderMenu = (props) => (
    <div className="navbar__slider--menu" >
        <OptionsList {...props} />
    </div>
);

SliderMenu.propTypes = {
    options: PropTypes.array,
    onSelect: PropTypes.func,
};

SliderMenu.defaultProps = {
    options: [],
    onSelect: () => {},
};

export default SliderMenu;