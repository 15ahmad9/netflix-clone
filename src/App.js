import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import FavList from './components/FavList';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favlist' element={<FavList/>}> </Route>
    </Routes>
    </>
  );
}

export default App;



