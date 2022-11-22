import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


function App() {
  return (
    <div>
      <Routes> 
        <Route index element = { <Home/> }/>
        <Route path="register" element={< Register/>}/>
        <Route path="login" element={<Login />} />
      </Routes>      
    </div>
  );
}

export default App;
