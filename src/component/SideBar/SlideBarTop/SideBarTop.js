import Navigation from '../../Navigation/Navigation'
import  './SideBarTop.css'
import React from 'react'

const SideBarInfo = [
    { id: 1, name: "2022 Films", url: "/film/films2022" },
    {
        id: 2, name: "Action", url: "/film/action"
    },
    {
        id: 3, name: "Adventure", url: "/film/adventure"
    },
    {
        id: 4, name: "Comedy", url: "/film/comedy"
    },
    {
        id: 5, name: "History", url: "/film/history"
    },
    {
        id: 6, name: "Horror", url: "/film/horror"
    },
    {
        id: 7, name: "Western", url: "/film/western"
    },
    {
        id: 8, name: "Animation", url: "/film/animation"
    },
    {
        id: 9, name: "Drama", url: "/film/drama"
    },
    {
        id: 10, name: "Family", url: "/film/family"
    },

]
const SlideItem = SideBarInfo.map((item) => (<li key={item.id} className="sideBarTopItem">
    <Navigation className="slideBarItem" url={item.url} icon="" text={item.name} />
</li>))


const SideBarTop = () => {
    return (
        <div className="sideBarTop">
            <ul className="sideBarTopItems">{SlideItem}</ul>
        </div>
    )
}

export default SideBarTop
