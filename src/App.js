import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Routes> 
        <Route index element = { <Home/> }/>
      </Routes>      
    </div>
  );
}

export default App;
