import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="main">
        <div className="header">
          <div className="logo">
           <h1> Estore.</h1>
            </div>
          <div className="navigation">
            <ul>
              <li><a>Home</a></li>
              <li><a>Catagori</a></li>
              <li><a>Latest</a></li>
              <li><a>Blog</a></li>
              <li><a>Pages</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
       </div>

      <div className="section">
          <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png" />
          <p className="discount">60% Discount</p>
          <h1 className="winter">Winter</h1>
          <h1 className="collection">Collection</h1>
          <p className="best">Best Cloth Collection By 2024!</p>
          <button className="shop">Shop Now</button>
           </div>

    </div>
  );
}

export default App;
