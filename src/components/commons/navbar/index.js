import PropTypes from 'prop-types';

import NavbarContent from './navBarContent';

const Navbar = (props) => <NavbarContent {...props} />;

Navbar.propTypes = {
    options: PropTypes.array,
    onSelect: PropTypes.func,
};

Navbar.defaultProps = {
    options: [],
    onSelect: () => {},
};

export default Navbar;