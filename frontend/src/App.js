import Home from './components/Home';
import Parents from './components/Parents';
import Admin from './components/Admin';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Student from './components/Student';
import Teacher from './components/Teacher';
import SignUp from './components/Signup';
import Login from './components/login';
import AdminHomePage from './components/AdminPage';

function App() {
  return (
    <div>
      <BrowserRouter>  
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/student" element={<Student/>} />
                   

          
            <Route path="signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/teacher" element={<Teacher/>} />
            <Route path="/parents" element={<Parents/>} />
            <Route path="/admin" element={<Admin/>} /> 
            <Route path="/AdminPage" element={<adminPage/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
