import React from "react";
import { useDispatch,useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Checkout = () => {
  const navigation = useNavigate();
    const { cartItems } = useSelector(
        (state) => state.cart
      );
      const { isAuthenticated } = useSelector(
        (state) => state.user
      );
    const redirectShipping = () =>{
      if(isAuthenticated){
        navigation('/shipping');
      }else{
        toast.error("Please login first",{position:"top-center"})
        // navigation('/login');
      }
      
    }
  return (
    <>
      <div className="row">
        <article className="card mb-4 col-md-8">
          <div className="card-body">
            <h4 className="card-title mb-4">Review cart</h4>
            <div className="row">
                {cartItems.map((item,index)=>(
                    <div className="col-md-12">
                        <figure className="itemside  mb-4">
                        <div className="aside">
                            <img
                            src={item.image}
                            className="border img-sm"
                            alt={item.name}/>
                        </div>
                        <figcaption className="info">
                            <p>{item.name} </p>
                            <span className="text-muted">${item.price} * {item.quantity}= $ {item.price*item.quantity} </span>
                        </figcaption>
                        </figure>
                    </div>

                ))}
              
            </div>
          </div>
        </article>

        <aside class="col-md-4">
          <div class="card shadow">
            <div class="card-body">
              <h4 class="mb-3">Overview</h4>
              <dl class="dlist-align">
                <dt class="text-muted">Delivery:</dt>
                <dd>Pick-up</dd>
              </dl>
              <dl class="dlist-align">
                <dt class="text-muted">Delivery type:</dt>
                <dd>Standart</dd>
              </dl>
              <dl class="dlist-align">
                <dt class="text-muted">Payment method:</dt>
                <dd>Online</dd>
              </dl>
              <hr />
              <dl class="dlist-align">
                <dt>Total:</dt>
                <dd class="h5">$ {`${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</dd>
              </dl>
              <hr />
              <p class="small mb-3 text-muted">
                By clicking you are agree with terms of condition{" "}
              </p>
              <button onClick={()=>{redirectShipping()}} class="btn btn-primary btn-block">
                {" "}
                Checkout{" "}
              </button>
            </div>
          </div>
        </aside>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Checkout;
