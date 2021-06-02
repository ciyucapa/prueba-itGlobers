import React, {createContext, useCallback, useContext, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';

import json from '../data/agencies.json';

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

        const {settings, updateSettings: update, settingsIsReady, ...rest} = context;

        useEffect(() => {
            let isAssign = true;

            if (isAssign && settingsIsReady) {
                update({
                    ...settings,
                    ...json,
                });
                isAssign = false;
            }
        }, [settingsIsReady]);

        const changeAgency = useCallback((agency) => {
            update({
                ...settings,
                agency,
            });
        }, [settings]);

        return {
            ...rest,
            settingsIsReady,
            settings,
            changeAgency,
        };
    };

    return {
        SettingsProvider,
        useSettings,
    };
};

export default settings;