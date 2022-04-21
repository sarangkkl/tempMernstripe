import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { removeItemsFromCart,addItemsToCart } from '../../action/cartAction'
import "./Cart.scss";

const Cart = () => {
  const dispatch = useDispatch();
  
  const increaseQuantity = (id, quantity, stock,name) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
    toast.success(`${name} quantity updated succesfully`,{
      position:"top-center",
    })
  };

  const decreaseQuantity = (id, quantity,name) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
    toast.success(`${name} quantity decreased succesfully`,{
      position:"top-center",
    })
  };

  
  const removeCartHandle = (id,name) =>{
    dispatch(removeItemsFromCart(id));
    toast.error(`${name} removed from the cart`,{
      position:"top-center",
    })
  }
  const { cartItems } = useSelector(
    (state) => state.cart
  );

  // useEffect(() => {
  //   for(var i =0;i<cartItems.length;i++){
  //     setTotal(total+(cartItems[i].price*cartItems[i].quantity))
  //   }
  // }, [total])
  
  return (
    <>
      <div className="card">
        <div className="row no-gutters">
          <aside className="col-md-9">
            {cartItems.map((item,index)=>(
              <article className="card-body border-bottom">
              <div className="row">
                <div className="col-md-7">
                  <figure className="itemside">
                    <div className="aside">
                      <img
                        src={item.image} alt={item.name}
                      />
                    </div>
                    <figcaption className="info">
                      <Link to={`/product/${item.product}`} className="title">
                        {item.name}{" "}
                      </Link>
                      <strong className="">$ {item.price}</strong>
                      <div>
                        <a href="#" className="btn-link mr-2">
                          Save for later
                        </a>
                        <button href="#" className="btn-link text-danger"
                          onClick={()=>removeCartHandle(item.product,item.name)}
                        >
                          {" "}
                          Delete
                        </button>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-5 text-md-right text-right">
                  <div className="input-group input-spinner">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-plus"
                        onClick={()=>decreaseQuantity(item.product,item.quantity,item.name)}
                      >
                        {" "}
                        <i className="fa fa-minus"></i>{" "}
                      </button>
                    </div>
                    <input type="text" className="form-control" value={item.quantity} />
                    <div className="input-group-append">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-minus"

                        onClick={()=>increaseQuantity(item.product,item.quantity,item.stock,item.name)}
                      >
                        {" "}
                        <i className="fa fa-plus"></i>{" "}
                      </button>
                    </div>
                  </div>
                 
                </div>
              </div>
            </article>
              ))}
            
            
          </aside>
          <aside className="col-md-3 border-left">
            <div className="card-body">
              <dl className="dlist-align">
                <dt>Total price:</dt>
                <dd className="text-right">$ {`${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Discount:</dt>
                <dd className="text-right text-danger">- $00.00</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Total:</dt>
                <dd className="text-right text-dark b">
                  <strong>$ {`${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</strong>
                </dd>
              </dl>
              <hr />
              <Link to={"/checkout"} className="btn btn-primary btn-block">
                {" "}
                Make Purchase{" "}
              </Link>
              <a href="#" className="btn btn-light btn-block">
                Continue Shopping
              </a>
            </div>
          </aside>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Cart;
