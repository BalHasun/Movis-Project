import Search from "../Search/Search";
import SelectedData from "./SelectedDate";
import SelectedLang from "./SelectedLang";
// import SelectedCountry from "./SelectedCountry";
// import SelectedQuality from "./SelectedQuality";
// import SelectedRating from "./SelectedRating";
// import SelectedType from "./SelectedType";



const FilterBar = (props) => {

    const value = props.value

    const FilterDate = props.setDate
    const FilterLang = props.setLang


    return (
        <div className="filterBar">
            <Search value={value} />
            <div className="SelectBar" >
                <SelectedData onFilterCities={FilterDate} />
                <SelectedLang onFilterCities={FilterLang} />
                {/* <SelectedCountry onFilterCities={FilterLang} />
                <SelectedQuality onFilterCities={FilterLang} />
                <SelectedRating onFilterCities={FilterLang} />
                <SelectedType onFilterCities={FilterLang} /> */}
            </div>
        </div>
    )
}

export default FilterBar
