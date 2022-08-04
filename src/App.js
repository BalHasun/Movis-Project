import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Data from './assets/Data/Data.json'

import Header from './component/Header/Header';
import SideBar from "./component/SideBar/SideBar";
import MainCard from "./component/Card/MainCard";
import FilterBar from "./component/FilterBar/FilterBar";

import './App.css'


function App() {

  const [search, setSearch] = useState("");
  const [filteredDate, setFilteredDate] = useState(Data);
  const [filteredLang, setFilteredLang] = useState(Data);

  const value = { search, filteredDate, filteredLang, setSearch, setFilteredDate, setFilteredLang };
  const data = { filteredDate, filteredLang};


  const filterDate = (selectedDate) => {
    if (selectedDate === "") {
      return setFilteredDate(Data);
    }

    const filteredDate = (Data.filter(Date => Date.date ===  Number(selectedDate)))
    // console.log(filteredDate)

    return setFilteredDate(filteredDate);
  }

  const filterLang = ( selectedLang) => {
    if ( selectedLang === '') {
      return setFilteredLang(Data);
    }

    const filteredLang = (Data.filter(Lang => Lang.language === (selectedLang)))
    // console.log(filteredLang)

    return setFilteredLang(filteredLang);
  }
  return (
    <BrowserRouter>
      <div>
        <Header />
        <FilterBar value={value} setDate={filterDate} setLang={filterLang} />
        <main className="main" >
          <SideBar />
          <MainCard value={value} data={data} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
