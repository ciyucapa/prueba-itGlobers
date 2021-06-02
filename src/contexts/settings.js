import React, {createContext, useCallback, useContext, useMemo} from 'react';
import PropTypes from 'prop-types';

import {SETTINGS_KEY, SETTINGS_DEFAULT_VALUE} from './state';

const settings = (useStorage) => {
    const SettingsContext = createContext();
    const {Provider} = SettingsContext;

    const SettingsProvider = (props) => {
        const [settings, updateSettings, hydrated] = useStorage(
            SETTINGS_KEY,
            SETTINGS_DEFAULT_VALUE,
        );

        const value = useMemo(
            () => ({
                settings,
                updateSettings,
                settingsIsReady: hydrated,
            }),
            [settings, updateSettings, hydrated],
        );

        return <Provider value={value} {...props} />;
    };

    SettingsProvider.propTypes = {
        children: PropTypes.shape({}).isRequired,
    };

    const useSettings = () => {
        const context = useContext(SettingsContext);

        if (!context) {
            throw new Error('useSettings must be used within a SettingsProvider');
        }

        const {settings, updateSettings: update, ...rest} = context;

        const changeAgencie = useCallback((agencie) => {
            update({
                ...settings,
                agencie,
            });
        }, [settings]);

        return {
            ...rest,
            settings,
            changeAgencie,
        };
    };

    return {
        SettingsProvider,
        useSettings,
    };
};

export default settings;