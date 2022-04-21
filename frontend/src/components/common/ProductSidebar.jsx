import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getProduct } from '../../action/ProductAction'
const ProductSidebar = () => {
  const dispatch = useDispatch();
  const [minRange,setMinRange] = useState(0);
  const [maxRange,setMaxRange] = useState(100000);
  const [keyword,setkeyWord] = useState("");
  const [page,setPage] = useState(1);
  const [category,setCategory] = useState("")
  const [rating,setRating] = useState(1)



  const sliderHandle = (e)=>{
    setMaxRange(e.target.value)
  }

  const manageFilter = ()=>{
    dispatch(getProduct(keyword,page,[minRange,maxRange],category,rating))
  }
  return (
    
        // <aside className="col-md-3">
            <div className="card">
            <article className="filter-group">
                <header className="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">Category</h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_1" >
                    <div className="card-body">
                        <form className="pb-3">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search" onChange={(e)=>setkeyWord(e.target.value)}/>
                          <div className="input-group-append">
                            <button className="btn btn-light" type="button" 
                              onClick={()=>{manageFilter()}}
                            ><i className="fa fa-search"></i></button>
                          </div>
                        </div>
                        </form>
                        
                        <ul className="list-menu">
                        <li><a href="#">Laptop</a></li>
                        <li><a href="#">Clothes</a></li>
                        <li><a href="#">Phones</a></li>
                        <li><a href="#">Jwellary</a></li>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">Electronics</a></li>
                        
                        </ul>
        
                    </div> 
                </div>
            </article> 
            
            <article className="filter-group">
                <header className="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">Price range </h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_3" >
                    <div className="card-body">
                        <input type="range" className="custom-range" min="0" max="100000" name="" onChange={(e)=>{setMaxRange(e.target.value)}}/>
                        <div className="form-row">
                        <div className="form-group col-md-6">
                          <label>Min</label>
                          <input className="form-control" placeholder="$0" type="number" value={minRange} onChange={(e)=>{setMinRange(e.target.value)}}/>
                        </div>
                        <div className="form-group text-right col-md-6">
                          <label>Max</label>
                          <input className="form-control" placeholder="$1,0000" type="number" value={maxRange}
                          onChange={(e)=>{setMaxRange(e.target.value)}}/>
                        </div>
                        </div> 
                        <button className="btn btn-block btn-primary" onClick={()=>{manageFilter()}}>Apply</button>
                    </div>
                </div>
            </article> 
            
            <article className="filter-group">
                <header className="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">More filter </h6>
                    </a>
                </header>
                <div className="filter-content collapse in" id="collapse_5" >
                    <div className="card-body">
                        <label className="custom-control custom-radio">
                          <input type="radio" name="myfilter_radio" checked="" className="custom-control-input"/>
                          <div className="custom-control-label">Any condition</div>
                        </label>
        
                        <label className="custom-control custom-radio">
                          <input type="radio" name="myfilter_radio" className="custom-control-input"/>
                          <div className="custom-control-label">Brand new </div>
                        </label>
        
                        <label className="custom-control custom-radio">
                          <input type="radio" name="myfilter_radio" className="custom-control-input"/>
                          <div className="custom-control-label">Used items</div>
                        </label>
        
                        <label className="custom-control custom-radio">
                          <input type="radio" name="myfilter_radio" className="custom-control-input"/>
                          <div className="custom-control-label">Very old</div>
                        </label>
                    </div>
                </div>
            </article> 
            </div> 
        // </aside> 
   
  )
}

export default ProductSidebar