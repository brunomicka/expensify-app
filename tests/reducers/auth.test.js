import authReducer from '../../src/reducers/auth';

test('should set uid for login user', () => {
    const uid = 'asqw1w1qw';
    const action = {
        type: 'LOGIN',
        uid
    };

    const state = authReducer({}, action);
    expect(state.uid).toEqual(uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({ uid: '111as' }, action);
    expect(state).toEqual({});
});