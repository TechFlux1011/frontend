import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-container'>
          <div className='App-tile'>
            <div className='App-tile-container'>
              <img src={logo} className="App-logo" alt="logo" />
              <div className='tile-header'>
                <h4 className='tile-title'>Title: <span className='tile-price'>$40</span></h4>
                                
              </div>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
