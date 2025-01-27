import logo from './logo.svg';
import './App.css';
import SearchAndFilter from './Search';

function App() {

  const data = [
    { id: 1, name: 'Item 1', category: 'category1' },
    { id: 2, name: 'Item 2', category: 'category2' },
    { id: 3, name: 'Item 3', category: 'category1' },
    { id: 4, name: 'Item 4', category: 'category3' },
    { id: 5, name: 'Item 5', category: 'category2' },
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-container'>
          <div className='App-tile'>
            <div className='App-tile-container'>
              <img src={logo} className="App-logo" alt="logo" />
              <div className='tile-header'>
                <h4 className='tile-title'>Title: <span className='tile-price'>$40</span></h4>
                <SearchAndFilter data={data} />                
              </div>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
