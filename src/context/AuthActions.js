// ACTION 1
export const LoginStart = (userCredentials) => ({
    type: "LOGIC_START",
});
// ACTION 2
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    // we will  pass user as payload to reducer ,"payload" is not a keyword, we can use any word we wnat.
    payload: user,
});
// ACTION 3
export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    // we will  pass error as payload to reducer.
    payload: error,
});