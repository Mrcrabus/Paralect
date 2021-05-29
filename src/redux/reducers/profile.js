const GETPPROFILE_PENDING = "GETPPROFILE-PENDING";
const GETPPROFILE_SUCCESS = "GETPPROFILE-SUCCESS";
const GETPPROFILE_ERROR = "GETPPROFILE-ERROR";

const initialState = {
  profile: null,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPPROFILE_PENDING:
      return {
        profile: null,
        loading: true,
        error: false,
      };
    case GETPPROFILE_SUCCESS:
      return {
        profile: action.profile,
        loading: false,
        error: false,
      };
    case GETPPROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getProfilePending = () => ({ type: GETPPROFILE_PENDING });
export const getProfileSuccess = (profile) => ({ type: GETPPROFILE_SUCCESS, profile });
export const getProfileError = (error) => ({ type: GETPPROFILE_ERROR, error });

export default reducer;