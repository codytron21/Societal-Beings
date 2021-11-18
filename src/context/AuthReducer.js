const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload,
            }
        case "FOLLOW":
            return {
                ...state, //it copies the the previous state as it is.("..." it is called spread operator).
                user: {
                    ...state.user, //it copies details of user.
                    //to assign new value to any value of user.
                    followings: [...state.user.followings, action.payload]
                }
            }
        case "UNFOLLOW":
            return {
                ...state, //it copies the the previous state as it is.("..." it is called spread operator).
                user: {
                    ...state.user, //it copies details of user.
                    //filtering and removing a particular user.
                    followings: state.user.followings.filter((following) => following !== action.payload)
                }
            }
        default:
            return state;
    }
};
export default AuthReducer;