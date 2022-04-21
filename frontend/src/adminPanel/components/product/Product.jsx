import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux'
import { getAdminProduct } from '../../../action/ProductAction'
import { Link } from 'react-router-dom'
import { Loading } from '../../../components'
const Product = () => {
    const dispatch = useDispatch();
    const {products,loading} = useSelector(state => state.adminProduct);

    useEffect(() => {
      dispatch(getAdminProduct());
     
    }, [dispatch])
    
    if(loading===true){
      return <Loading />
    }else{
      return (
        <>
      <div className="col-md-12">
        <Link to={"/newProduct"}><button className="btn btn-primary">Add New Product</button></Link>
        <div>
          <table class="table mt-2">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Created By</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item,index)=>(
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>$ {item.price}</td>
                <td>{item.Stock}</td>
                <td>{item.user}</td>
                <td><Link to={"/edit"}><i class="fas fa-edit mx-3"></i></Link><Link to={"/delete"}><i class="fas fa-trash"></i></Link></td>
              </tr>
              ))}
              
              
            </tbody>
          </table>
        </div>
      </div>
    </>
      )
    }
  
};

export default Product;
