import { 
    LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL,
    LOGOUT_SUCCESS,LOGOUT_FAIL,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_FAIL,ALL_USERS_REQUEST,ALL_USERS_SUCCESS,ALL_USERS_FAIL,
    CLEAR_ERRORS,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL
 } from '../constants/AuthConstants'


 export const userReducer = (state ={user:{}},action)=>{
     switch (action.type) {
         case LOGIN_REQUEST:
         case LOAD_USER_REQUEST:
         case REGISTER_USER_REQUEST:
             return{
                 loading:true,
                 isAuthenticated:false,
                 ...state,
             }
         case LOGIN_SUCCESS:
         case LOAD_USER_SUCCESS:
         case REGISTER_USER_SUCCESS:
             return{
                 loading:false,
                 isAuthenticated:true,
                 user:action.payload,
             }
         case LOAD_USER_FAIL:
         case REGISTER_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
              };
         case LOGIN_FAIL:
             return{
                 loading:false,
                 isAuthenticated:false,
                 error:action.payload,
             };
        case LOGOUT_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
                };
        case LOGOUT_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: action.payload,
                };
         case CLEAR_ERRORS:
             return{
                 ...state,
                 error:null,
             }
         default:
             return{
                 ...state,
             }
     }
 }