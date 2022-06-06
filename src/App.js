import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/index';
import {useDispatch, useSelector} from 'react-redux';

function App() {


  const dispatch = useDispatch();
  const {message} = useSelector(state => state.global);
  console.log(message);
  return (
    <div className="App">
      {message}
      <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />}>  */}
        <Route path='/' element={<Home />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<Leag
          ueStandings />} /> */}
        {/* </Route> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>




    </div>
  );
}

export default App;
