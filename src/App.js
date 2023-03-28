import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Registration';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored'>
        
      </ToastContainer>
      <BrowserRouter>
      <Routes>
<Route path="/" element={<Home/>}  />
<Route path="/login" element={<Login/>}  />
<Route path="/register" element={<Register/>}  />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
