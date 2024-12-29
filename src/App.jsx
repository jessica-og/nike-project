

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import SignIn from './components/auth/SignIn';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import ForgotPassword from "./components/auth/ForgotPassword";
import Profile from './components/profile/Profile';
import EditProfile from "./components/profile/EditProfile";
import AddProduct from "./pages/AddProduct";


function App() {

  return (
    <BrowserRouter>
<Routes>
<Route path="/*" element={<WelcomePage/>} />
<Route path="/sign-in" element={<SignIn/>} />
<Route path="/register" element={<Register/>} />
<Route path="/password-reset" element={<ForgotPassword/>} />
<Route path="profile" element={<Profile/>} />
<Route path="edit-profile" element={<EditProfile/>} />
<Route path="/home" element={<Home/>} />
<Route path="/add-product" element={<AddProduct/>} />



</Routes>
    </BrowserRouter>
  )
}

export default App
