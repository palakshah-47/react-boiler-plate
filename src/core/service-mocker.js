// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import { config } from '../config';
import { createMockResponse, format, getMockParams } from '../util';

// @constants
const httpCodes = {
    success: 200,
    unauthorized: 401
};

const mockedServices = {
    mockLoginUser: (mockAdapter) => {
        mockAdapter.onPost(
            format(
                config.services.security.login,
                config.settings.serviceMocker.loginUserName,
                config.settings.serviceMocker.loginPassword
            )
        ).reply(() => createMockResponse({
            data: config.mockData.security.user,
            httpCode: httpCodes.success
        }));
    },    
};

export const initializeServiceMocker = (store) => {
    const mockAdapter = new MockAdapter(axios, { delayResponse: config.settings.serviceMocker.delayResponse });
    const serviceMocker = {
        replyWithMockData: () => {
            const include = config.settings.serviceMocker.include || [];
            Object.keys(mockedServices).forEach((name) => {
                if (include.some(item => item === name)) {                   
                    mockedServices[name](mockAdapter, store);
                }
            });
            mockAdapter.onAny().passThrough();
        },
        replyWithNetworkError: () => {
            mockAdapter.reset();
            mockAdapter.onAny().networkError();
        }
    };

    serviceMocker.replyWithMockData();
    return serviceMocker;
};
