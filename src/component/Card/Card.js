import React from 'react'
import Navigation from '../Navigation/Navigation';
import EmptyCard from './EmptyCard';


const Card = (props) => {


    const { search, selected } = props.value;
    const { filteredDate, filteredLang, filteredCountry } = props.data

    // var myFinalArray = [...new Set([...filteredDate, ...filteredLang, ...filteredCountry])];

    // const uniqueIds = [];

    // const unique = myFinalArray.filter(element => {
    //     const isDuplicate = uniqueIds === (element);

    //     if (isDuplicate  ) {
    //         uniqueIds.push(element);
    //         return false;
    //     }
    //     return true;
    // });

    //  const result = myFinalArray.filter((a, i, aa) => aa.indexOf(a) !== i && aa.lastIndexOf(a) !== i);

    // console.log(filteredDate)
    // console.log(filteredLang)
    // console.log(filteredCountry)
    // console.log(myFinalArray)
    // console.log(uniqueIds)


    const arr1 = filteredDate.reduce((m, o) => m.set(o.id, o), new Map()), arr2 = filteredLang.reduce((r, o) => {
        if (arr1.has(o.id)) { r.push(Object.assign({}, o, arr1.get(o))); }
        return r;
    }, [], new Map());

    // const arr3 = arr2.reduce((m, o) => m.set(o.id, o), new Map()), arr4 = filteredCountry.reduce((r, o) => {
    //     if (arr3.has(o.id)) { r.push(Object.assign({}, o, arr3.get(o))); }
    //     return r;
    // }, [], new Map());

    const projectData = arr2.filter((project) =>
        project.filmName.toLowerCase().includes(search.toLowerCase()) ||
        project.filmName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )

    if (projectData.length === 0) { return <EmptyCard /> }

    return (
        <>
            <div className="cardImage">
                <ul className='cardItems'>
                    {projectData.map((info, index) =>
                        <li key={index} className='cardItem'>
                            <Navigation className="cardItemLink" url={`/film${info.filmName}`} icon="" text="" >
                                <div className="cardTop">
                                    <div className="layout">
                                        <h1 className='name'>{info.filmName} (<span className='date'>{info.date}</span>)</h1>
                                        <div ><p className='text'>Language : </p><span className='detay language'>{info.language}</span></div>
                                        <div ><p className='text'>Country : </p><span className='detay country'>{info.country}</span></div>
                                        <div ><p className='text'>Type : </p><span className='detay type'>{info.type.join('  •  ')}</span></div>
                                        <div ><p className='text'>Rating : </p><span className='detay '><span className='star'>⭐</span><span className='rating'> {info.rating}</span></span> / 10</div>
                                        <div ><p className='text'>Date : </p><span className='detay date'>{info.date}</span></div>
                                        <div ><p className='text'>Quality : </p><span className='detay quality'>{info.quality.join(' •  ')}</span></div>
                                    </div>
                                    <img src={info.image} alt={info.filmName}></img>
                                </div>
                                <div className="cardBotton">
                                    <p>{info.filmName}</p>
                                </div>
                            </Navigation>
                        </li>
                    )}
                </ul>
            </div>
            <div className="cardInfo">
            </div>
        </>
    )
}

export default Card
