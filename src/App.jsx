

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import SignIn from './components/auth/SignIn';
import Register from './components/auth/Register';
import Home from './components/home/Home';

function App() {

  return (
    <BrowserRouter>
<Routes>
<Route path="/*" element={<WelcomePage/>} />
<Route path="/sign-in" element={<SignIn/>} />
<Route path="/register" element={<Register/>} />
<Route path="/home" element={<Home/>} />

</Routes>
    </BrowserRouter>
  )
}

export default App
