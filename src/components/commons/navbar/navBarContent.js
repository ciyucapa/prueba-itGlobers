import {useState} from 'react';
import PropTypes from 'prop-types';

import {Assents} from '../../../v1/resources';

import './navbar.css'
import OptionsList from './optionsList';
import SliderMenu from './sliderMenu';

const NavbarContent = (props) => {
    const [isViewSliderMenu, setViewSliderMenu] = useState(false);

    const onPressMenu = () => {
        setViewSliderMenu(!isViewSliderMenu);
    };

    return (
        <div className="navbar__container">
            <div className="navbar__box">
                <div className="navbar__title">Menu</div>
                <div className="navbar__item">
                    <div className="navbar__item--icon mobile">
                        <div onClick={onPressMenu}>
                            <img src={Assents.image.menu} alt="icon"/>
                        </div>
                        {isViewSliderMenu && <SliderMenu {...props} />}
                    </div>
                    <div className="navbar__item--list desktop">
                        <OptionsList {...props} />
                    </div>
                </div>
            </div>
        </div>
    );
};

NavbarContent.propTypes = {
    options: PropTypes.array,
    onSelect: PropTypes.func,
};

NavbarContent.defaultProps = {
    options: [],
    onSelect: () => {},
};

export default NavbarContent;