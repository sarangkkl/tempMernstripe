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

      const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
      
  return (
      <>
      {/* <Payment/> */}
        <Elements stripe={loadStripe("pk_test_51K3v68SHnIwKHjK6Dc2nuXO54sHGX7DcMGPhAxVDIqMbphBki3zgVGBRKTwjTEgRlOYNmtkOdHSFld9o5j7RFQTF00cNYHkecS")}
        options={options}
        >
            <Payment/>
        </Elements>
      
      </>
  )
}

export default WrapPayment