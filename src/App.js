import './App.css';
import BestRest from './Components/BestRest';
import Footer from './Components/Footer';
import Navigate from './Components/Navigate';
import OffersBanner from './Components/OffersBanner';
import RestaurentChain from './Components/RestaurentChain';
import RestaurentOnline from './Components/RestaurentOnline';

function App() {
  return (
    <div>
      <Navigate/>

      <div className="welcome-section">
        <h1>Welcome to Abhishek's Restaurant</h1>
        <p>Delicious food, delivered with love ❤️</p>
      </div>

      <OffersBanner/>
      <RestaurentChain/>
      <RestaurentOnline/>
      <BestRest/>
      <Footer/>
    </div>
  );
}

export default App;
