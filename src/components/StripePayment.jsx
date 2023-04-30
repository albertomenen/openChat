// StripePayment.js
import React, { useRef, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  // ... (código del componente CheckoutForm)
};

const stripePromise = loadStripe('tu_clave_publica');

const StripePayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripePayment;
