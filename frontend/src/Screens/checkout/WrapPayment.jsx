import React,{useState,useEffect} from 'react'
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios'
import  Payment  from './Payment'

const WrapPayment = () => {
    const [stripeApiKey, setStripeApiKey] = useState("");
    const [clientSecret, setClientSecret] = useState("");

    const paymentData = {
      amount: Math.round(1000.* 100),
    };

    async function getClientSecret(){
      const config = {
        headers:{
          "Content-type":"application/json",
        }
      }
      const {data} = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      )
      const client_secret = data.client_secret;
      setClientSecret(client_secret)
    }

    async function getStripeApiKey() {
        const { data } = await axios.get("/api/v1/stripeapikey");
        setStripeApiKey(data.stripeApiKey);
      }
      useEffect(() => {
        getStripeApiKey();
        getClientSecret();
      }, [])

      const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };
      console.log("The client serceret is ",clientSecret)
  return (
      <>
      {/* <Payment/> */}
        <Elements stripe={loadStripe(stripeApiKey)}
        options={options}
        >
            <Payment/>
        </Elements>
      
      </>
  )
}

export default WrapPayment