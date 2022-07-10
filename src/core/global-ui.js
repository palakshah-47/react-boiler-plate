// @packages
import { bindActionCreators } from 'redux';

// @scripts
import {
    hideAlertNotification,
    showAlertNotificationError,
    showAlertNotificationInfo,
    showAlertNotificationSuccess
} from '../reducers/alert-notification-slice';

export const HIDE_ALERT_NOTIFICATION = 'HIDE_ALERT_NOTIFICATION';
export const SHOW_ALERT_NOTIFICATION = 'SHOW_ALERT_NOTIFICATION';

/**
 * @param {Store} store - The redux store.
 * @return {Object}
 */
export const initializeGlobalUI = (store) => {
    const globalUI = bindActionCreators({
        showAlertNotificationError,
        showAlertNotificationInfo,
        showAlertNotificationSuccess,
        hideAlertNotification
    }, store.dispatch);

    globalUI.showAlertNotificationError = (title, msg) => {
        store.dispatch(showAlertNotificationError({ title, msg }));
    };

    globalUI.showAlertNotificationSuccess = (title, msg) => {
        store.dispatch(showAlertNotificationSuccess({ title, msg }));
    };

    globalUI.showAlertNotificationInfo = (title, msg) => {
        store.dispatch(showAlertNotificationInfo({ title, msg }));
    };

    globalUI.hideAlertNotification = () => {
        if (store.getState().alertNotification.isVisible) {
            store.dispatch(hideAlertNotification());
        }
    };

    return globalUI;
};
