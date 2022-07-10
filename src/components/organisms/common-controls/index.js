// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

// @scripts
import NotificationAlert from '../alert';
import { globalUI } from '../../../core';

const CommonControls = () => {
    const {
        alertNotificationMsg,
        alertNotificationTitle,
        alertNotificationType,
        alertNotificationVisible
    } = useSelector((state) => ({
        alertNotificationMsg: state.alertNotification.msg,
        alertNotificationTitle: state.alertNotification.title,
        alertNotificationType: state.alertNotification.type,
        alertNotificationVisible: state.alertNotification.isVisible
    }));
    return (
        <NotificationAlert
            id="ctrl-alert-notification"
            key="ctrl-alert-notification"
            onHide={globalUI.hideAlertNotification}
            severity={alertNotificationType}
            text={alertNotificationMsg}
            title={alertNotificationTitle}
            visible={alertNotificationVisible}
        />
    );
};

export default CommonControls;
