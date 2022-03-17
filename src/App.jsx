import logo from './logo.svg';
import './App.css';
import { Cart } from './components/Cart';
import { Button } from './components/Button';
import { Navbar } from './components/Navbar';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Cart /> */}
      {/* <Button /> */}
      <Navbar />
      <Status />
    </div>
  );
}

export default App;
