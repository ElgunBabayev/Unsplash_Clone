import "./assets/style/main.css";
import Layout from './layout/Layout'
import Profile from './components/Profile'
import Login from './components/Login'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'


function App() {

  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
        </Route>
          <Route path="/login" element={<Login />} />
          
      </Routes>
  );
}

export default App;
