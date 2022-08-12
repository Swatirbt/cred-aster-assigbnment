import "./App.css"
import '..//node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar';
import Basic from './Components/Basic';
import Account from './Components/Account';
import General from './Components/General';
import Info from './Components/Info';
import "./index.css"


function App() {
  return (
    <div className="App">
      <div className="class-wrapper">
      <Info />
      <div className="routing-elements">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Basic />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/General' element={<General />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
    </div>



  );
}

export default App;
