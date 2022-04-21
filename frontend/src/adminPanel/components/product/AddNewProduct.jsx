import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct,newProductReset } from "../../../action/ProductAction";
import { Loading } from '../../../components'
import { ToastContainer, toast } from 'react-toastify';
const AddNewProduct = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.newProduct);
  const [file, setFile] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
  });
  const { name, description, category, price, stock } = product;
  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitting...")
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };
  if(success===true){
    toast.success("Product Successfully created",{
        position:"top-center"
      })
      dispatch(newProductReset());
  }
  if(loading===true){
      return <Loading />
  }else{
    return (
        <div className="container col-md-6 mx-auto my-3">
          <form>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Product Name"
                name="name"
                onChange={registerDataChange}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="number" className="form-control" name="price" onChange={registerDataChange}/>
            </div>
            <div className="form-group">
              <label>Category</label>
              <input type="text" className="form-control" name="category" onChange={registerDataChange}/>
            </div>
            <div className="form-group">
              <label>Stock</label>
              <input type="number" className="form-control" name="stock" onChange={registerDataChange}/>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea type="text" className="form-control" name="description" onChange={registerDataChange}/>
            </div>
            <div class="custom-file">
              <input type="file" class="custom-file-input" onChange={createProductImagesChange} multiple />
              <label class="custom-file-label" for="customFile">
                Choose file
              </label>
            </div>
    
            <button type="button" className="btn btn-primary" onClick={(e)=>{createProductSubmitHandler(e)}}>
              Create Product
            </button>
          </form>
          <ToastContainer/>
        </div>
      );
  }

  
};

export default AddNewProduct;
