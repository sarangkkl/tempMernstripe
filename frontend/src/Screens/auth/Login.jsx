import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux'
import { Loading } from '../../components'
import { useNavigate } from "react-router-dom";
import { loginTry,clearErrors } from '../../action/userAction'
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassowrd, setLoginPassword] = useState("");
  const {  error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/me");
    }
  }, [isAuthenticated,navigate]);

  const cred = {
    email: loginEmail,
    password: loginPassowrd,
  };
  const loginSubmit = (cred) => {
    // e.preventDefault();
    dispatch(loginTry(cred));
  };
  if(error){
    toast.error("Invalid Email or password",{
      position:"top-center"
    })
    dispatch(clearErrors())
  }
  if(loading===true){
    return <Loading/>
  }else{
    return (
      <>
      
      <div className="container">
        
          <div class="card col-md-4 mx-auto my-4">
          <div class="card-body">
            <h4 class="card-title mb-4">Sign in</h4>
            <form>
              <div class="form-group">
                <label>Email</label>
                <input
                  name=""
                  class="form-control"
                  placeholder="ex. name@gmail.com"
                  type="email"
                  onChange={(e)=>{setLoginEmail(e.target.value)}}
                />
              </div>
              <div class="form-group">
                <a class="float-right" href="#">
                  Forgot
                </a>
                <label>Password</label>
                <input
                  class="form-control"
                  placeholder="******"
                  type="password"
                  onChange={(e)=>{setLoginPassword(e.target.value)}}
                />
              </div>
              
              <div class="form-group">
                <button type="button" class="btn btn-primary btn-block" 
                 onClick={()=>{loginSubmit(cred)}}
                >
                  {" "}
                  Login{" "}
                </button>
              </div>
            </form>
          </div>
          <div class="card-footer text-center">
            Don't have an account? <a href="">Sign up</a>
          </div>
        {/* </div> */}
          </div>
        
      </div>
      <ToastContainer />

      </>
    );
  }
  
};

export default Login;
