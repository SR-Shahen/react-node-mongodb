
import './App.css';
import Header from './Componants/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Componants/Home/Home';
import AddUser from './Componants/Add/AddUser';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add' element={<AddUser></AddUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
