import React from "react";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { addItemsToCart } from '../../../action/cartAction'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import "./card.scss";
import { ToastContainer, toast } from 'react-toastify';
import "../common.scss"

const Card = ({prod}) => {
  const dispatch = useDispatch();

  const addToCartHandler = (id,quantity,name)=>{
    dispatch(addItemsToCart(id,quantity));
    toast.success(`${name} successfully added to cart`,{
      position:"top-center",
    })
  }
  
  
  return (
    <>

      <div className="app__work-portfolio">
      <div className="app__work-item app__flex" >
            <div
              className="app__work-img app__flex"
            >
              <img src={prod.images[0].url} alt={prod.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                {/* <Link to={`/product/${prod._id}`} target="_blank" rel="noreferrer"> */}

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <Link to={`/product/${prod._id}`}>
                    <AiFillEye 
                      className="icon"
                      
                      size="50px"
                      
                      style={{
                        marginLeft: "12px",
                      }}
                    />
                    
                    </Link>
                  </motion.div>
                {/* </Link> */}
             
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <Link to={`/product/${prod._id}`}>
                    <AiFillHeart 
                      className="icon"
                      
                      size="50px"
                      color="red"
                      style={{
                        marginLeft: "12px",
                      }}
                    />
                    </Link>
                    
                  </motion.div>
               
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h6 className="bold-text mt-3">$ {prod.price}</h6>
              <h4 className="bold-text"><Link to={`/product/${prod._id}`}>{prod.name}</Link></h4>
              <p className="p-text" style={{ marginTop: 10 }}>{prod.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{prod.category}</p>
                
              </div>
            </div>
          <div className="button_container">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary flex" onClick={()=>{addToCartHandler(`${prod._id}`,1,`${prod.name}`)}}>Add Cart 
             <BsFillCartPlusFill 
               className="icon mx-1"
                      
               size="14px"
               color="white"
              /></button>
          </div>
          </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Card;
