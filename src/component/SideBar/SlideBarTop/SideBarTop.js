import Navigation from '../../Navigation/Navigation'
import  './SideBarTop.css'
import React from 'react'

const SideBarInfo = [
    { id: 1, name: "2022 Films", url: "/films/films2022" },
    {
        id: 2, name: "Action", url: "/films/action"
    },
    {
        id: 3, name: "Adventure", url: "/films/adventure"
    },
    {
        id: 4, name: "Comedy", url: "/films/comedy"
    },
    {
        id: 5, name: "History", url: "/films/history"
    },
    {
        id: 6, name: "Horror", url: "/films/horror"
    },
    {
        id: 7, name: "Western", url: "/films/western"
    },
    {
        id: 8, name: "Animation", url: "/films/animation"
    },
    {
        id: 9, name: "Drama", url: "/films/drama"
    },
    {
        id: 10, name: "Family", url: "/films/family"
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
