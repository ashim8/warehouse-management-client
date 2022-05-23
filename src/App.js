
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='product/:id' element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
