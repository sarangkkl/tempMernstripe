import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import { registerUser } from '../../action/userAction'
import { Loading } from '../../components'

const Registration = () => {

  const dispatch = useDispatch();
	const [avatar, setAvatar] = useState("/");
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	  });
    const { error, loading, isAuthenticated } = useSelector(
      (state) => state.user
    );
	  const { name, email, password } = user;
    let navigate = useNavigate()
    if(isAuthenticated===false){
      navigate("/profile")
    }

	const registerDataChange = (e) => {
		if (e.target.name === "avatar") {
		  const reader = new FileReader();
	
		  reader.onload = () => {
			if (reader.readyState === 2) {
			  
			  setAvatar(reader.result);
			}
		  };
	
		  reader.readAsDataURL(e.target.files[0]);
		} else {
		  setUser({ ...user, [e.target.name]: e.target.value });
		}
	  };
	  const registerSubmit = (e) => {
		e.preventDefault();
		const myForm = new FormData();
	
		myForm.set("name", name);
		myForm.set("email", email);
		myForm.set("password", password);
		myForm.set("avatar", avatar);
		dispatch(registerUser(myForm));
	  };

    if(loading === true){
      return <Loading/>
    }else{
      return (
        <>
          <div class="card container mx-auto col-md-4 my-3">
            <div class="card-body">
              <h4 class="card-title mb-4">Register</h4>
              <form>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    class="form-control"
                    placeholder="ex. name@gmail.com"
                    type="email"
                    value={email} onChange={registerDataChange}
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    class="form-control"
                    placeholder="******"
                    type="password"
                    name="password" value={password} onChange={registerDataChange}
                  />
                </div>
                <div class="mb-3">
                  <label for="formFileMultiple" class="form-label">
                    Your Avatar
                  </label>
                  <input class="form-control" type="file" id="formFileMultiple"  name="avatar"  onChange={registerDataChange}/>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block" onClick={registerSubmit}>
                    {" "}
                    Register{" "}
                  </button>
                </div>
              </form>
            </div>
            <div class="card-footer text-center">
              Already have account ? <Link to={"/login"}>Log in</Link>
            </div>
          </div>
        </>
      );
    }

 
};

export default Registration;
