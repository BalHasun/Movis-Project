import React from 'react'
import Navigation from '../Navigation/Navigation';
import EmptyCard from './EmptyCard';


const Card = (props) => {


    const { search, selected } = props.value;
    const { filteredDate, filteredLang } = props.data



    const map = filteredDate.reduce((m, o) => m.set(o.id, o), new Map), array3 = filteredLang.reduce((r, o) => {
        if (map.has(o.id)) {
            r.push(Object.assign({}, o, map.get(o.label)));
        }
        return r;
    }, []);

    const projectData = array3.filter((project) =>
        project.filmName.toLowerCase().includes(search.toLowerCase()) ||
        project.filmName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )

    console.log(array3)
    if (projectData.length === 0) {
        return <EmptyCard />
    }

    return (
        <>
            <div className="cardImage">
                <ul className='cardItems'>
                    {projectData.map((info, index) =>
                        <li key={index} className='cardItem'>
                            <Navigation className="cardItemLink"  url={`/film${info.filmName}`} icon="" text="" >
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
