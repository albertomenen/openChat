const stripe = Stripe(process.env.Stripe);

const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element');

const form = document.getElementById('payment-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const { token, error } = await stripe.createToken(card);
    
    if (error) {
      // Mostrar error en la página
    } else {
      // Enviar el token a tu servidor para procesar el pago
      const response = await fetch('/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token.id }),
      });
  
      if (response.ok) {
        // Pago procesado exitosamente
        const jsonResponse = await response.json();
        console.log(jsonResponse.message);
      } else {
        // Ocurrió un error al procesar el pago en el servidor
        const jsonResponse = await response.json();
        console.error(jsonResponse.error);
      }
    }
  });
  