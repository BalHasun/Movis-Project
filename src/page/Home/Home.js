import { useState } from "react";

import Data from '../../assets/Data/Data.json'

import MainCard from '../../component/Card/MainCard'
import FilterBar from '../../component/FilterBar/FilterBar'

const Home = () => {

    const [search, setSearch] = useState("");
    const [filteredDate, setFilteredDate] = useState(Data);
    const [filteredLang, setFilteredLang] = useState(Data);
    const [filteredCountry, setFilteredCountry] = useState(Data);

    const value = { search, filteredDate, filteredLang, filteredCountry, setSearch, setFilteredDate, setFilteredLang, setFilteredCountry };
    const data = { filteredDate, filteredLang, filteredCountry };

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

    //  set filtered data by country 
    const filterCountry = (selectedCountry) => {
        if (selectedCountry === '') {
            return setFilteredCountry(Data);
        }
        const filteredCountry = (Data.filter(Country => Country.country === (selectedCountry)))
        return setFilteredCountry(filteredCountry);
    }

    return (
        <>
            <MainCard value={value} data={data} >
                <FilterBar value={value} setDate={filterDate} setLang={filterLang} setCountry={filterCountry} />
            </MainCard>
        </>
    )
}

export default Home
