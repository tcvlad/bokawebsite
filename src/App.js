import forestimg from "./Images/Forest.jpg";
import nodeBoard from "./Images/NodeBoard.png";
import schematicDrawing from "./Images/schematic.png";
import CAD from "./Images/NodeDesign.png";
import nodeShell from "./Images/NodeShell.jpg"
import logo from "./Images/BokaLogo.png";
import fire from "./Images/fire.png";
import "./App.css";
import MapContainer from "./Components/Map";



export default function App() {

  return (
    <body className="whole-page">
      <header role="banner" className="sticky-top">
        <nav id="navbar-primary" className="navbar sticky-top" role="navigation">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbar-primary-collapse">
              <ul className="nav navbar-nav">
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
                  <a href="index.html" className="navButton">home</a>
                </li>
                <li>
                  <a href="#prod" className="navButton">product</a>
                </li>
                <li>
                  <a href="#map" className="navButton">map</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="landing-container">
        <img className="background" src={forestimg} alt=""></img>
      </div>

      <div className="caption">
      <img src={logo} id="logo" alt="" className="logoMain"></img>
        <h3 className="fireMonitoring">a fire monitoring system</h3>
        <hr/>
        <a className="button1" href="#map">
          see locations
        </a>
      </div>

      <div className="information-section">

        <div className="backgroundInfo">
          <h2>The Problem</h2>
          <hr/>
          <div className="about">
            <div className="info1">
              <p>Forest fires have environmental, economic, and <br/>health related repercussions: </p>
              <ol>
                <li>In the United States, 10,122,336 acres of land were <br/> burned by forest fires in 2020</li>
                <li>From 2015-2020, fire suppression costs averaged<br/> an annual $2.3 billion in the U.S.</li>
                <li>Wildfire smoke can pollute the air up to 1000 km<br/> away, endangering the short and long-term health<br/> of those exposed</li>
              </ol>
            </div>
            <div className="info2">
              <img src={fire} alt="fire"></img>
            </div>
          </div>
          
          <h5> Watchtowers and satellite observation are among the traditional methods of forest fire detection. <br/> However, watchtowers rely on a labor force to regularly monitor during fire seasons and satellites can <br/>only provide images every two days (assuming weather has not affected the image quality). 
          </h5>
        </div>

        <div className="goalSection" id="prod">
          <div className="columnOne">
           <img src={nodeBoard} id="node" alt=""></img>
          </div>
          <div className="columnTwo"> 
          <img src={logo} id="goalLogo" alt=""></img>
            <p id="right-text">The goal of Boka is to provide an effective low-<br/>cost solution to early forest fire detection. Boka<br/>offers real-time fire risk assessment by utilizing a<br/>high quality CO2, temperature, and humidity<br/>sensor paired with LoRaWAN a long-range low-<br/>power wireless communication system perfect<br/>for vast forest environments.</p>
          </div>
        </div>
        
        <div className="schematicInfo">
          <h1>Schematics</h1>
          <hr/>
          <p>evolution of our shell</p>
          <div className="shellProgression">
            <div className="column">
              <img src={schematicDrawing} id="schematics" alt="Node Scehmatic"></img>
            </div>
            <div className="column">
              <img src={CAD} alt="Node CAD"/>
            </div>
            <div className="column">
                <img src={nodeShell} alt="Node Encasing"></img>
            </div>
          </div>
          
        </div>


        <div className="map-container" id="map">
        <h1>Interactive Map</h1>
        <hr/>
        <p>map of nodes and their live readings</p>
        <div className="map">
          <MapContainer/>
        </div>
        
        </div>

        <div className="credits" >
          <h5>
            Hardware Team: Nathanial D., Adrian D.
            <br/>
            Software Team: Jaie P., Tetsuya V.
          </h5>
        </div>

      </div>
    
    </body>
  );
}

