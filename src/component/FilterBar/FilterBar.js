import React, { useState } from "react";
import Search from "../Search/Search";
import SelectedDate from "./SelectedDate";



const FilterBar = () => {

    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");
    const value = { search, selected, setSearch, setSelected };


    return (
        <div>
            <Search value={value} />
            <SelectedDate/>
        </div>
    )
}

export default FilterBar
