import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import Form from './components/Form';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Navbar />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/product/:id">
        <Detail />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
    </div>
  );
}

export default App;
