// @packages
import axios from 'axios';

// @scripts
import { config } from '../config';
import { globalUI } from '../core';
import { format } from '../util';

class Security {
    static async login(user, password) {
        try {
            const data = await axios.post(
                format(config.services.security.login,   
                    user,
                    password
                )
            );           
            return data;
        } catch (error) {
            globalUI.showAlertNotificationError(
                config.text.services.security.login,
                error.message
            );

            throw error;
        }
    }
}

export default Security;
