import {
    NEW_PRODUCT_REQUEST, NEW_PRODUCT_SUCCESS, NEW_PRODUCT_FAIL, NEW_PRODUCT_RESET, CLEAR_ERRORS,
    ADMIN_PRODUCT_FAIL, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS, ADMIN_PRODUCT_RESET,
    ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, ALL_PRODUCT_RESET,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_RESET,
} from '../constants/ProductConstant'
import axios from 'axios'



// Get all the product 

export const getProduct =
    (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
    
        async (dispatch) => {
            
            try {
                dispatch({ type: ALL_PRODUCT_REQUEST });

                // let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
                // let link = "/api/v1/products?keyword=product one"
                let link = `api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`
                // let link = `/api/v1/products?price[gte]=2&price[lte]=1000&keyword=product`
                
                if (category) {
                    link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
                    // link="api/v1/products"
                }
                
                const { data } = await axios.get(link);

                dispatch({
                    type: ALL_PRODUCT_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                console.log("The error is ", error);
                dispatch({
                    type: ALL_PRODUCT_FAIL,
                    payload: error.response.data.message,
                });
            }
        };







// Create Product
export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.post(
            `/api/v1/admin/product/new`,
            productData,
            config
        );

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get all the admin product

// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST });

        const { data } = await axios.get("/api/v1/admin/products");

        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get the product details
// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/product/${id}`);
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const newProductReset = () =>async (dispatch) => {
    dispatch({type:NEW_PRODUCT_RESET})
}