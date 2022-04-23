import React from "react";
// import "./main"
import { useNavigate } from "react-router-dom";
import {PaymentElement} from '@stripe/react-stripe-js';
import { useSelector } from "react-redux";
import { createOrder, clearErrors } from "../../action/orderAction";
// import { ElementsConsumer, PaymentElement } from "@stripe/react-stripe-js";

import { Elements } from "@stripe/react-stripe-js";

import axios from "axios";

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const tax = subtotal * 0.1;
  const shippingCharges = 0;
  const totalPrice = subtotal + tax;
  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: subtotal,
    taxPrice: tax,
    shippingPrice: shippingCharges,
    totalPrice: totalPrice,
  };

  const handleSubmit = async (e) => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <>
      <h1>This is payment</h1>

      <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
    </>
  );
};

export default Payment;
