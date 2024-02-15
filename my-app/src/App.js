import logo from './logo.svg';
import './App.css';
import Btn from './companets/Btn';
import sekil from './companets/sekil/aaaa.png';


function App() {
  return (
    <div className="section"> 
      <div className="div1">
      <header className="App-header">
        <h1>Hello ,I'Riyad </h1> 
          <h4>Graphic Disigner ,  UI/UX <br></br>
          Disigner ,Web Disigner </h4><br></br>
       <Btn className="btn" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      </div>
      <div className="div2">
        
         <img src={sekil} className="heci" alt="logo" />
      </div>
    </div>
    
    
  );
}

export default App;

