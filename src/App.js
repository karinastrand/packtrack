import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchData from './components/FetchData.js';

function App() {
  return (
    <div className="App">
      <h1>Welcome to packtrack</h1>
      <FetchData />
    </div>
  );
}

export default App;
