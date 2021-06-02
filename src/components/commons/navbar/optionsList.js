import React from 'react';
import PropTypes from 'prop-types';

const OptionsList = (props) => (
    <ul>    
        {props.options.map(option => (
            <li
                key={option.id} 
                className="navbar__item--menu" 
                onClick={() => props.onSelect(option)}>
                    {option.name}
            </li>
        ))}
    </ul>
);

OptionsList.propTypes = {
    options: PropTypes.array,
    onSelect: PropTypes.func,
};

OptionsList.defaultProps = {
    options: [],
    onSelect: () => {},
};

export default OptionsList;