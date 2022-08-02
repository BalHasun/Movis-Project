import { BrowserRouter } from "react-router-dom";
import Header from './component/Header/Header';
import SideBar from "./component/SideBar/SideBar";
import './App.css'
import Card from "./component/Card/Card";



function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className="main" >
          <SideBar />
          <Card />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
