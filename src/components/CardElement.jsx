import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      setPaymentStatus('error');
    } else {
      // Enviar el token a tu servidor para procesar el pago
      // ...
      setPaymentStatus('success');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pagar
      </button>
      {paymentStatus === 'success' && <p>Pago realizado con éxito</p>}
      {paymentStatus === 'error' && <p>Error al procesar el pago</p>}
    </form>
  );
};
