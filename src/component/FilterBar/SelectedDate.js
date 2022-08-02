// import { useEffect, useState } from "react";
// import styled from "styled-components";


// const SelectedDate = (props) => {
//     const DATA = [{
//         id: 1,
//         name: "Kodluyoruz Istanbul React Bootcamp",
//         limit: 10,
//         date: new Date()
//     },
//     {
//         id: 2,
//         name: "Kodluyoruz Bursa Vue Bootcamp",
//         limit: 0,
//         date: new Date()
//     },
//     {
//         id: 3,
//         name: "Kodluyoruz Mersin Angular Bootcamp",
//         limit: 5,
//         date: new Date()
//     },
//     {
//         id: 4,
//         name: "Kodluyoruz Antalya Front-End Bootcamp",
//         limit: 5,
//         date: new Date()
//     }];

//     const [filteredLessons, setFilteredLessons] = useState(DATA);

//     const filterLessons = (selected) => {
//         if (selected === "") {
//             return setFilteredLessons(DATA);
//         }

//         const filtered = DATA.filter(lessons => lessons.name.includes(selected));
//         setFilteredLessons(filtered);
//     }


//     const Select = styled.select`margin: 0px; padding: 10px;`;


//     const [selected, setSelected] = useState("");

//     useEffect((props) => {
//         const debounceSelect = setTimeout(() => {
//             props.onFilterCities(selected);
//         }, 2000);
//         return () => {
//             clearTimeout(debounceSelect);
//         }
//     }, [selected]);

//     const filterCities = (event) => {
//         setSelected(event.target.value);
//     }

//     return (
//         <Select onChange={filterCities} onFilterCities={filterLessons} >
//             <option value="">Tumu</option>
//             <option value="Istanbul">Istanbul</option>
//             <option value="Mersin">Mersin</option>
//             <option value="Bursa">Bursa</option>
//             <option value="Kodluyoruz">Kodluyoruz</option>
//         </Select>
//     )
// }

// export default SelectedDate
