import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NewPost from './pages/NewPost';
import RequireAuth from './services/RequireAuth';


function App() {
  return (
    <div>
      <Routes> 
        
        <Route path="register" element={< Register/>}/>
        <Route path="login" element={<Login />} />
        <Route index element = { <Home/> }/>
        <Route element={ <RequireAuth />} >
          <Route path="newpost" element={<NewPost />} />
          
        </Route>
      </Routes>      
    </div>
  );
}

export default App;
