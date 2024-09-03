import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages & components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from "./pages/Signup/Signup"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
