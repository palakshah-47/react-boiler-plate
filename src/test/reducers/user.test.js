// @scripts
import userReducer, { login, logout } from '../../reducers/user-slice';
import { config } from '../../config';

describe('userReducer', () => {
    test('userReducer: LOGIN', () => {
        const payload = config.mockData.security.user;
        const action = {
            type: login,
            payload
        };
        const newState = userReducer(config.initialState.user, action);        
        const expectedState = {
            account: {
                authToken: action.payload.authToken,
                email: action.payload.email,
                name: action.payload.name,
                permissions: action.payload.permissions
            }
        };
        expect(newState).toEqual(expectedState);
    });

    test('userReducer: LOGOUT', () => {
        const payload = config.mockData.security.user;
        const action = {
            type: logout,
            payload
        };
        const newState = userReducer(config.initialState.user, action);
        const expectedState = {
            account: config.initialState.user.account
        };
        expect(newState).toEqual(expectedState);
    });

    test('userReducer: DEFAULT', () => {
        const initialState = config.initialState.user;
        const action = {
            type: 'UNLISTENED_ACTION'
        };
        const newState = userReducer(initialState, action);
        expect(newState).toEqual(initialState);
    });
});
