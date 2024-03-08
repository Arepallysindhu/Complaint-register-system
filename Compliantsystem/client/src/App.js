import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CreateCompliant from './pages/Compliants/CreateCompliant';
import CompliantList from './pages/Compliants/CompliantList';
import Compliants from './pages/Compliants/Compliants';
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          {/*<Route path="/list" element={<CompliantList />}></Route>*/}
          <Route path="/" element={<Compliants/>}>
            <Route path="/create-compliant" element={<CreateCompliant/>}></Route>
            <Route path="/list" element={<CompliantList/>}></Route>
            </Route>
          {/*</Route> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
