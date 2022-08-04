import { useEffect, useState } from "react";
import styled from "styled-components";

import Datas from '../../assets/Data/Data.json'

import './FilterBar.css'

const Select = styled.select`margin: 0px; padding: 10px;`;

// sort json object by date 
var Data = Datas.sort(function (a, b) {
    return b.rating - a.rating;
});

// change decimal to main number 
const rating = Data.map((optionItem) =>Math.floor(optionItem.rating))


// Find and remove duplicates
var result = rating.reduce((unique, o) => {
    if (!unique.some(obj => obj === o && obj === o)) {
        unique.push(o);
    }
    return unique;
}, [])

// add last values to select elemant by map function
const option = result.map((optionItem, index) => <option key={index} className='optionItem' value={optionItem}>{optionItem} ⭐</option>)



const SelectedRating = (props) => {

    const [selected, setSelected] = useState("");

    // when chang value in the select set new value 
    useEffect(() => { props.onFilterCities(selected); }, [selected]);

    // set selected value
    const filterCities = (event) => {setSelected(event.target.value); }

    return (
        <div className="selectedDate">
            <Select className="optionItems" onChange={filterCities}>
                <option className='optionItem' value='' defaultValue="selected">Rating</option>
                {option}
            </Select>
        </div>
    )
}
export default SelectedRating
