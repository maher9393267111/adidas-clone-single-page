import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/index';
import {useDispatch, useSelector} from 'react-redux';
import Navbar from './components/navbar';
 
function App() {


  const dispatch = useDispatch();
  const {message} = useSelector(state => state.global);
  console.log(message);
  return (
    <div className="">
      
<div>
  <Navbar />
</div>

      <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />}>  */}
        <Route path='/' element={<Home />} />
         {/* <Route path="teams" element={<Teams />}> */}
         
          
    </Routes>
  </BrowserRouter>




    </div>
  );
}

export default App;
