import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Data from '../../assets/Data/Data.json'
import MainCard from '../../component/Card/MainCard'

import Adventure from "./Adventu";
import Action from "./Action";
import Comedy from "./Comedy";
import History from "./History";
import Horror from "./Horror";
import Western from "./Western";
import Animation from "./Animation";
import Drama from "./Drama";
import Family from "./Family";
import NewFilms from "./NewFilms";

import '../Page.css'
const Films = () => {

    const [search, setSearch] = useState("");
    const [filteredDate, setFilteredDate] = useState(Data);
    const [filteredLang, setFilteredLang] = useState(Data);

    const value = { search, filteredDate, filteredLang, setSearch, setFilteredDate, setFilteredLang };
    const data = { filteredDate, filteredLang };


    return (
        <>
                <Routes>
                    <Route path='films2022' element={<NewFilms />} />
                    <Route path='Adventure' element={<Adventure />} />
                    <Route path='Action' element={<Action />} />
                    <Route path='Comedy' element={<Comedy />} />
                    <Route path='History' element={<History />} />
                    <Route path='Horror' element={<Horror />} />
                    <Route path='Western' element={<Western />} />
                    <Route path='Animation' element={<Animation />} />
                    <Route path='Drama' element={<Drama />} />
                    <Route path='Family' element={<Family />} />
                </Routes>
        </>
    )
}

export default Films
