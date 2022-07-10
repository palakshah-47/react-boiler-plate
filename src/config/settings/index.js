// @packages
import merge from 'deepmerge';

// @json
import envLocal from './env-local.json';
import envUnitTest from './env-unit-test.json';
import envProduction from './env-production.json';
import envMock from './env-mock.json';
import globals from './globals.json';

// @scripts
import { constants } from '../../core/constants';

/**
 * @return {Object}
 */
const getSettings = () => {
    switch (process.env.REACT_APP_ENV) {
        case constants.environment.UNIT_TEST:
            return merge(globals, envUnitTest);
        case constants.environment.PRODUCTION:
            return merge(globals, envProduction);
        case constants.environment.MOCK:
            return merge(globals, envMock);
        case constants.environment.LOCAL:
        default:
            return merge(globals, envLocal);
    }
};

export default getSettings();
