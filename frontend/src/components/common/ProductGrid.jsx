import React,{useState} from 'react';
import { useSelector } from 'react-redux'
import { Card } from '../'

const ProductGrid = () => {
    const { loading, products, error } = useSelector((state) => state.products);
    const [product, setProduct] = useState([]);
  return (
    <div>
        <div className="product__section">
          <div className="row">
            {products.map((item,index)=>(
              <div className="cold-md-3" key={index}>
              <Card prod={item}/>
            </div>
            ))}
            
          </div>
        </div>
    </div>
  )
}

export default ProductGrid