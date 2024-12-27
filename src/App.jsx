

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import SignIn from './components/auth/SignIn';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import ForgotPassword from "./components/auth/ForgotPassword";
import Detailspage from "./pages/Detailspage";
import WishlistPage from './pages/WishlistPage';


function App() {

  return (
    <BrowserRouter>
<Routes>
<Route path="/*" element={<WelcomePage/>} />
<Route path="/sign-in" element={<SignIn/>} />
<Route path="/register" element={<Register/>} />
<Route path="/password-reset" element={<ForgotPassword/>} />
<Route path="/home" element={<Home/>} />
<Route path="/details" element={<Detailspage/>} />
<Route path="/wishlist" element={<WishlistPage/>} />

</Routes>
    </BrowserRouter>
  )
}

export default App
