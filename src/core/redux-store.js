// @packages
import configureMockStore from 'redux-mock-store';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

// @scripts
import { config } from '../config';
import userReducer from '../reducers/user-slice';
import alertNotificationReducer from '../reducers/alert-notification-slice';

import {
    copyObjIncludingProps,
    getStorage,
    loadState,
    saveState
} from '../util';

/**
 * @param {Store} store - The redux store.
 */
const configureLocalStorage = (store) => {
    if (config.settings.localStorage.isEnabled) {
        store.subscribe(
            throttle(() => {
                const state = copyObjIncludingProps(
                    store.getState(),
                    config.settings.localStorage.savableState
                );
                saveState({
                    getStorage,
                    device: config.settings.localStorage.device,
                    key: config.settings.localStorage.key,
                    state
                });
            }, config.settings.localStorage.throttleWait)
        );
    }
};

/**
 * @param {{isUnitTest: boolean}} environment
 * @returns {Store}
 */
export const initializeReduxStore = (environment) => {
    const middleware = [thunk];
    if (config.settings.reduxLogger.isEnabled) {
        middleware.push(createLogger());
    }

    const state = config.settings.localStorage.isEnabled
        ? loadState({
            getStorage,
            device: config.settings.localStorage.device,
            key: config.settings.localStorage.key
        })
        : undefined;

    const store = environment.isUnitTest
        ? configureMockStore(middleware)(state || config.initialState)
        : configureStore({
            reducer: {
                alertNotification: alertNotificationReducer,
                user: userReducer
            },
            middleware,
            devTools: true
        });

    configureLocalStorage(store);
    return store;
};
