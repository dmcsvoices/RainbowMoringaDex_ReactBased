import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Rainbow Moringa Dex</h1>
      </header>
      <AccountBalance amount={10000} />
      <table className="coin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <Coin name="Bitcoin" ticker="BTC" price={34000.99} />
        <Coin name="Ethereum" ticker="ETH" price={2599} />
        <Coin name="Cardano" ticker="ADA" price={0.85} />
        <Coin name="Ripple" ticker="XRP" price={1.85} />
      </tbody>
    </table>
    </div>
  );
}

export default App;
