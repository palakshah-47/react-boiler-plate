/**
 * @return {{isVisible: boolean, title: string, msg: string, type: string}}
 */
import { createSlice } from '@reduxjs/toolkit';
import { config } from '../config';
import { constants } from '../core';

const initialState = config.initialState.alertNotification;

const alertNotificationSlice = createSlice({
    name: 'alertNotification',
    initialState,
    reducers: {
        hideAlertNotification: (state) => {
            state.isVisible = false;
            state.type = null;
            state.msg = null;
            state.title = null;
        },
        showAlertNotificationError: (state, action) => {
            state.isVisible = true;
            state.title = action.payload.title;
            state.msg = action.payload.msg;
            state.type = constants.notificationType.ERROR;
        },
        showAlertNotificationInfo: (state, action) => {
            state.isVisible = true;
            state.title = action.payload.title;
            state.msg = action.payload.msg;
            state.type = constants.notificationType.INFO;
        },
        showAlertNotificationSuccess: (state, action) => {
            state.isVisible = true;
            state.title = action.payload.title;
            state.msg = action.payload.msg;
            state.type = constants.notificationType.SUCCESS;
        }
    }
});

export const {
    showAlertNotificationError,
    showAlertNotificationInfo,
    showAlertNotificationSuccess,
    hideAlertNotification
} = alertNotificationSlice.actions;

export default alertNotificationSlice.reducer;
