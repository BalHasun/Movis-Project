// import React from 'react'
// import Data from '../../assets/Data/Data.json'

// const CardItems = () => {
//     return (
//         Data.filter(name => name.filmName.includes('or')).map(info =>
//             <li key={info.id} className='cardItem'>
//                 <div className="cardTop">
//                     <div className="layout">
//                         <h1 className='name'>{info.filmName} (<span className='date'>{info.date}</span>)</h1>
//                         <div ><p className='text'>Language : </p><span className='detay language'>{info.language}</span></div>
//                         <div ><p className='text'>Country : </p><span className='detay country'>{info.country}</span></div>
//                         <div ><p className='text'>Type : </p><span className='detay type'>{info.type.join('  •  ')}</span></div>
//                         <div ><p className='text'>Rating : </p><span className='detay '><span className='star'>⭐</span><span className='rating'> {info.rating}</span></span> / 10</div>
//                         <div ><p className='text'>Date : </p><span className='detay date'>{info.date}</span></div>
//                         <div ><p className='text'>Quality : </p><span className='detay quality'>{info.quality.join(' •  ')}</span></div>
//                     </div>
//                     <img src={info.image} alt={info.filmName}></img>
//                 </div>
//                 <div className="cardBotton">
//                     <p>{info.filmName}</p>
//                 </div>
//             </li>)
//     )
// }


// const Action = () => {



//     return (
//         <div className="mainCard">
//             <div className="cardImage">
//                 <ul className='cardItems'>
//                     <CardItems />
//                 </ul>
//             </div>
//             <div className="cardInfo">
//             </div>
//         </div>
//     )
// }

// export default Action
