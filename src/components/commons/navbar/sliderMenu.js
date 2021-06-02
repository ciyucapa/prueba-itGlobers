import PropTypes from 'prop-types';

import OptionsList from './optionsList';

const SliderMenu = (props) => (
    <div style={{width: 300, height: '100%', position: 'fixed', top: 0, left: 0, backgroundColor: '#FF0000'}}>
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