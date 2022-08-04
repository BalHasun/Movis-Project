import { useEffect, useState } from "react";
import styled from "styled-components";

import Data from '../../assets/Data/Data.json'

import './FilterBar.css'

const Select = styled.select`margin: 0px; padding: 10px;`;

// Find and remove duplicates


// get values in type key and change them to new array 
const option2 =(Data.map((optionItem) => optionItem.type)).join().split(',')

// Find and remove duplicates
var result = option2.reduce((unique, o) => {
    if (!unique.some(obj => obj === o && obj === o)) {
        unique.push(o);
    }
    return unique;
}, [])

// add last values to select elemant by map function
const option = result.map((optionItem, index) => <option key={index} className='optionItem' value={optionItem}>{optionItem}</option>)



const SelectedType = (props) => {

    const [selected, setSelected] = useState("");

    // when chang value in the select set new value 
    useEffect(() => { props.onFilterCities(selected); }, [selected]);

    // set selected value
    const filterCities = (event) => { setSelected(event.target.value); }

    return (
        <div className="selectedDate">
            <Select className="optionItems" onChange={filterCities}>
                <option className='optionItem' value='' defaultValue="selected">Type</option>
                {option}
            </Select>
        </div>
    )
}
export default SelectedType
