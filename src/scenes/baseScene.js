import PropTypes from 'prop-types';

import Navbar from '../components/commons/navbar';
import Modal from '../components/commons/modal';
import settingsContext from '../contexts/settings';
import useStorageCreator from '../hooks/useStorageCreator';
import useModal from '../hooks/useModal';

const BaseScene = (props) => {
    const {Child, stackProps, useSettings} = props;
    const {settings, settingsIsReady, changeAgency} = useSettings();
    const hook = useModal();
    const {showModal} = hook;

    if (!settingsIsReady) {
        return null;
    }

    return (
        <>
            <Navbar options={settings.agencies} onSelect={changeAgency} />
            <Child {...stackProps} agency={settings.agency} showModal={showModal} />
            <Modal {...hook} />
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