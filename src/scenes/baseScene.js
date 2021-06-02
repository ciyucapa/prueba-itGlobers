import PropTypes from 'prop-types';

import Navbar from '../components/commons/navbar';
import settingsContext from '../contexts/settings';
import useStorageCreator from '../hooks/useStorageCreator';

const BaseScene = (props) => {
    const {Child, stackProps, useSettings} = props;
    const {settings, settingsIsReady, changeAgencie} = useSettings();

    if (!settingsIsReady) {
        return null;
    }

    return (
        <>
            <Navbar options={settings.agencies} onSelect={changeAgencie} />
            <Child {...stackProps} agencie={settings.agencie} />
        </>
    );
};

BaseScene.propTypes = {
    stackProps: PropTypes.shape({}),
    Child: PropTypes.any,
};

BaseScene.defaultProps = {
    stackProps: {},
    Child: () => <></>,
};

export default (Child) => (props) => {
    const useStorage = useStorageCreator(localStorage);
    const {SettingsProvider, useSettings} = settingsContext(useStorage);

    return (
        <SettingsProvider>
            <BaseScene 
                stackProps={props} 
                Child={Child} 
                useSettings={useSettings} />
        </SettingsProvider>
    );
};