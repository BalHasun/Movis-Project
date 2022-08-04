import { useEffect, useState } from "react";
import styled from "styled-components";
import './FilterBar.css'
import Data from '../../assets/Data/Data.json'

const Select = styled.select`margin: 0px; padding: 10px;`;


// Find and remove duplicates
var result = Data.reduce((unique, o) => {
    if (!unique.some(obj => obj.language === o.language && obj.language === o.language)) {
        unique.push(o);
    }
    return unique;
}, []);

// add last values to select elemant by map function
const option = result.map((optionItem, index) => <option key={index} className='optionItem' value={optionItem.language}>{optionItem.language}</option>)

const SelectedLang = (props) => {
    const [selected, setSelected] = useState("");

    // when chang value in the select set new value 
    useEffect(() => { props.onFilterCities(selected); }, [selected]);

    // set selected value
    const filterCities = (event) => {  setSelected(event.target.value); }

    return (
        <div className="selectedDate">
            <Select className="optionItems" onChange={filterCities}>
                <option className='optionItem' value='' defaultValue="selected">Language</option>
                {option}
            </Select>
        </div>
    )
}

export default SelectedLang
