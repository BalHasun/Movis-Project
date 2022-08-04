import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './component/Header/Header';
import SideBar from "./component/SideBar/SideBar";

import Home from './page/Home/Home'
import Films from './page/films/Films'
import Series from './page/Series/Series'
import About from './page/About/About'
import Contact from './page/Contact/Contact'

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <div>

        <Header />
        <main className="main" >
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/series" element={<Series />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/films/*" element={<Films />} >
            </Route>
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
