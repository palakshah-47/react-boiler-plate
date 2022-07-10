// @scripts
import alertNotificationReducer, {
    showAlertNotificationError,
    showAlertNotificationInfo,
    hideAlertNotification
} from '../../reducers/alert-notification-slice';
import { config } from '../../config';
import { constants } from '../../core';

describe('Testing the component <ActionButton />', () => {
    test('alertNotificationReducer: SHOW_ALERT_NOTIFICATION_INFO', () => {
        const action = {
            type: showAlertNotificationInfo,
            payload: {
                title: 'INFO',
                msg: 'It is a info message',
                type: constants.notificationType.INFO
            }
        };
        const newState = alertNotificationReducer(
            config.initialState.alertNotification,
            action
        );
        const expectedState = {
            isVisible: true,
            msg: action.payload.msg,
            title: action.payload.title,
            type: action.payload.type
        };
        expect(newState).toEqual(expectedState);
    });

    test('alertNotificationReducer: SHOW_ALERT_NOTIFICATION_ERROR', () => {
        const action = {
            type: showAlertNotificationError,
            payload: {
                title: 'ERROR',
                msg: 'It is an error message',
                type: constants.notificationType.ERROR
            }
        };
        const newState = alertNotificationReducer(
            config.initialState.alertNotification,
            action
        );
        const expectedState = {
            isVisible: true,
            msg: action.payload.msg,
            title: action.payload.title,
            type: action.payload.type
        };
        expect(newState).toEqual(expectedState);
    });

    test('alertNotificationReducer: HIDE_ALERT_NOTIFICATION', () => {
        const initialState = {
            isVisible: true,
            msg: 'It is a message',
            title: 'Title'
        };
        const action = {
            type: hideAlertNotification
        };
        const newState = alertNotificationReducer(initialState, action);
        const expectedState = {
            isVisible: false,
            msg: null,
            title: null,
            type: null
        };
        expect(newState).toEqual(expectedState);
    });
});
