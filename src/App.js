import forestimg from "./Images/Forest.png";
import logo from "./Images/BokaLogo.png";
import "./App.css";
import {useState} from "react";

function App() {
  const [count, setcount] = useState(0)
  return (
    <body>
      <header role="banner" class="sticky-top">
        <nav id="navbar-primary" class="navbar sticky-top" role="navigation">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbar-primary-collapse">
              <ul class="nav navbar-nav">
                <li>
                  <a href="index.html">
                    <img
                      id="logo-navbar"
                      src={logo}
                      width="200"
                      alt="Logo"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">Product</a>
                </li>
                <li>
                  <a href="abput.html">Pricing</a>
                </li>
                <li>
                  <a href="about.html">Contact</a>
                </li>
                <li>
                  <a href="aboout.html">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div class="landing-container">
        <img class="background" src={forestimg}></img>
      </div>

      <div class="caption">
        <h1>Bōka</h1>
        <h3>Fire Monitoring System</h3>
        <a class="button1" href="#">
          Locations
        </a>
      </div>

      <div>
        <h1>{count}</h1>
        <button onClick={() => setcount(count + 1)}>increment</button>
      </div>
    </body>
  );
}

export default App;
