import "./assets/style/main.css";
import Layout from './layout/Layout'
import Profile from './components/Profile'
import Login from './components/Login'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import SignUp from "./components/SignUp";
import Detail from './components/Detail'


function App() {

  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/detail" element={<Detail/>}/>
        </Route>
          <Route path="/login" element={<Login />} />
          <Route path= "/signup" element ={<SignUp/>}/>
          
      </Routes>
  );
}

export default App;
