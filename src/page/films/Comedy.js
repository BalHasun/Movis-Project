import { useState } from "react";

import Data2 from '../../assets/Data/Data.json'

import MainCard from '../../component/Card/MainCard'
import FilterBar from '../../component/FilterBar/FilterBar'

const Comedy = () => {

    const Data = Data2.filter(costum => costum.type.includes('Comedy'))
    // console.log(Data)

    const [search, setSearch] = useState("");
    const [filteredDate, setFilteredDate] = useState(Data);
    const [filteredLang, setFilteredLang] = useState(Data);

    const value = { search, filteredDate, filteredLang, setSearch, setFilteredDate, setFilteredLang };
    const data = { filteredDate, filteredLang };

    //  set filtered data by date 
    const filterDate = (selectedDate) => {
        if (selectedDate === "") {
            return setFilteredDate(Data);
        }
        const filteredDate = (Data.filter(Date => Date.date === Number(selectedDate)))
        return setFilteredDate(filteredDate);
    }
    //  set filtered data by language 
    const filterLang = (selectedLang) => {
        if (selectedLang === '') {
            return setFilteredLang(Data);
        }
        const filteredLang = (Data.filter(Lang => Lang.language === (selectedLang)))
        return setFilteredLang(filteredLang);
    }

    return (
        <>
            <MainCard value={value} data={data} >
                <FilterBar value={value} setDate={filterDate} setLang={filterLang} />
            </MainCard>
        </>
    )
}

export default Comedy