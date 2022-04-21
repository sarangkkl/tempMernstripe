import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux'
import { saveShippingInfo } from '../../action/cartAction'
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(
    (state) => state.user
  );

    const dispatch = useDispatch();
    const [address,setAddress] = useState({
        name:'',
        email:'',
        phone:'',
        country:'',
        pincode:'',
        city:'',
        address:'',

    });

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }, [isAuthenticated,navigate]);

    const registerDataChange = (e) => {
		  setAddress({ ...address, [e.target.name]: e.target.value });
	  };
    function saveShippingInfoHandle(e){
        e.preventDefault();
        dispatch(saveShippingInfo(address))
        navigate("/payment");
    }
  return (
    <>
    <div className="container col-md-6 max-auto mt-3">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-4">Shipping Info</h4>
          <form>
            

            <div className="form-row">
              <div className="col form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" name="name" onChange={(e)=>{registerDataChange(e)}}/>
              </div>
              
            </div>

            <div className="form-row">
              <div className="col form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="" name="email" onChange={(e)=>{registerDataChange(e)}}/>
              </div>
              <div className="col form-group">
                <label>Phone</label>
                <input type="text" className="form-control" placeholder="" name="phone" onChange={(e)=>{registerDataChange(e)}}/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-12">
                <label>Country</label>
                <select id="inputState" className="form-control" name="country" onChange={(e)=>{registerDataChange(e)}}>
                  <option> Choose...</option>
                  <option value={"uzbekistan"}>Uzbekistan</option>
                  <option value={"Russia"}>Russia</option>
                  <option value={"United States"}>United States</option>
                  <option value={"India"}>India</option>
                  <option value={"Afganistan"}>Afganistan</option>
                </select>
              </div>
              
            </div>
            <div className="form-row">
                  <div className="col form-group">
                        <label>City</label>
                        <input type="text" className="form-control" name="city" onChange={(e)=>{registerDataChange(e)}}/>
                  </div>
                  <div className="col form-group">
                        <label>Pin code</label>
                        <input type="text" className="form-control" name="pincode" onChange={(e)=>{registerDataChange(e)}}/>
                  </div>
                
              </div>
            <div className="form-group">
              <label>Address</label>
              <textarea className="form-control" rows="2" name="address" onChange={(e)=>{registerDataChange(e)}}></textarea>
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-primary btn-block" onClick={(e)=>{saveShippingInfoHandle(e)}}>
                {" "}
                Go to Payment{" "}
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
    </>
  );
};

export default Shipping;
