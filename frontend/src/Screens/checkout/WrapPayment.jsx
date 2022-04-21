import React,{useState,useEffect} from 'react'
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios'
import  Payment  from './Payment'

const WrapPayment = () => {
    const [stripeApiKey, setStripeApiKey] = useState("");

    async function getStripeApiKey() {
        const { data } = await axios.get("/api/v1/stripeapikey");
    
        setStripeApiKey(data.stripeApiKey);
      }
      useEffect(() => {
        getStripeApiKey();
      }, [])
      
  return (
      <>
      {/* <Payment/> */}
        <Elements stripe={loadStripe(stripeApiKey)}>
            <Payment/>
        </Elements>
      
      </>
  )
}

export default WrapPayment