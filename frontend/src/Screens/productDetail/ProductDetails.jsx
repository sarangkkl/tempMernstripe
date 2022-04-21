import React,{useEffect,useState} from 'react'
import { change_img } from './main';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../action/ProductAction';
import { ToastContainer, toast } from 'react-toastify';
import { addItemsToCart } from '../../action/cartAction'
import { useDispatch,useSelector } from 'react-redux';
import { Loading } from '../../components'
const ProductDetails = () => {
    const dispatch = useDispatch(); 
    let { id } = useParams();
    const [quantity,setQuantity] = useState(1)
    
    const { cartItems } = useSelector(
      (state) => state.cart
    );
    
    
    
   
    function handleQty(type){
      if(type==='add'){
        setQuantity(quantity+1)
      }else{
        if(quantity>1){
          setQuantity(quantity-1)
        }
      }
    }
  
    function addItemsToHandle(){
      dispatch(addItemsToCart(id,quantity))
      toast.success("Item added to cart successfully",{
        position:"top-center",
      })
    }
    const {loading,error,product} = useSelector((state)=>state.singleProduct)

    useEffect(() => {
      let x = cartItems.find(item =>item.product===id)
      setQuantity(x.quantity)
      dispatch(getProductDetails(id));
      
      }
   , [id,dispatch,cartItems])
     
    if(loading===true){
      return(
        <Loading/>
      )
    }else{
      return (
        <>
            <div>
              <div className="card">
                <div className="row no-gutters">
                  <aside className="col-md-6">
                    <article className="gallery-wrap">
                      <div className="img-big-wrap">
                        { product.images ? <div>
                          <img src={`${product.images[0].url}`} alt="" id="main_img" style={{ display: 'block', margin: '0px auto',cursor:"pointer" }} />
                        </div>:""}
                      </div>
                      <div className="thumbs-wrap">
                      {product.images &&
                  product.images.map((item, i) => (
                    
                    <img
                      className="item-thumb prod_img"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                      onClick={() => {
                        change_img()
                      }}
                      style={{cursor:"pointer"}}
                    />
                    
                  ))}
                      </div>
                    </article>
                  </aside>
                  <main className="col-md-6 border-left">
                    <article className="content-body">
                      <h2 className="title">{product.name}</h2>
    
                      <div className="rating-wrap my-3">
                        <ul className="rating-stars">
                          <li style={{ width: '80%' }} className="stars-active">
                            <img src="../images/icons/stars-active.svg" alt="" />
                          </li>
                          <li>
                            <img src="../images/icons/starts-disable.svg" alt="" />
                          </li>
                        </ul>
                        <small className="label-rating text-muted">{product.reviews ? product.reviews.length:""}</small>
                        <small className="label-rating text-success">
                          {' '}
                          <i className="fa fa-clipboard-check"></i> 154 orders{' '}
                        </small>
                      </div>
    
                      <div className="mb-3">
                        <var className="price h4">Price: $ {product.price}</var>
                      </div>
    
                      <p>
                        {product.description}
                      </p>
    
                      <dl className="row">
                        <dt className="col-sm-3">Category:</dt>
                        <dd className="col-sm-9">{product.category}</dd>
                        <dt className="col-sm-3">Delivery</dt>
                        <dd className="col-sm-9">Russia, USA, and Europe </dd>
                      </dl>
    
                      <hr />
                      <div className="row">
                        <div className="form-group col-md flex-grow-0">
                          <label>Quantity</label>
                          <div className="input-group mb-3 input-spinner">
                            <div className="input-group-prepend">
                              <button className="btn btn-light" type="button" id="button-plus"
                                onClick={()=>{handleQty("dec")}}
                              >
                                {' '}
                                -{' '}
                              </button>
                            </div>
                            <input type="text" className="form-control" value={quantity} />
                            <div className="input-group-append">
                              <button className="btn btn-light" type="button" id="button-minus"
                               onClick={()=>{handleQty("add")}}>
                                {' '}
                                +{' '}
                              </button>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <button href="#" className="btn  btn-primary mx-2">
                        {' '}
                        Buy now{' '}
                      </button>
                      <button href="#" className="btn  btn-outline-primary"
                      
                      
                      onClick={()=>{addItemsToHandle(`${product._id}`,quantity)}}>
                        {' '}
                        <span className="text">Add to cart</span> <i className="fas fa-shopping-cart"></i>{' '}
                      </button>
                    </article>
                  </main>
                </div>
              </div>
            </div>
            <ToastContainer />
        </>
      )
    }
    
  
}

export default ProductDetails