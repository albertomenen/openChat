import logo from './logo.svg';
import './App.css';
import StripePayment from './StripePayment'; // Asegúrate de que la ruta sea la correcta según la ubicación de tu archivo


function App() {
  return (
    <div className="App">
      <div>
      {/* ... */}
      <StripePayment />
      {/* ... */}
    </div>
    </div>
  );
}

export default App;
