import Navigation from "../Navigation/Navigation"
import LogoImage from "../../assets/image/film-reel.png"
import Profile from "./Profile/Profile"

import "./Header.css"


const Logo = (props) => {
    return <img src={LogoImage} className="logoImage" alt="LogoImage" />
}


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Navigation className="navigationLink" url="/" icon="" text="Bal's Films" >
                    <Logo />
                </Navigation>
            </div>
            <nav className="navMenu">
                <Navigation className="navItem"  url="/" icon="DashboardIcon" text="Home" />
                <Navigation className="navItem" url="/about" icon="ReportsIcon" text="About" />
                <Navigation className="navItem" url="/contact" icon="MessageIcon" text="Contact" />
            </nav>
            <div>
                <Profile />
            </div>
        </header>
    )
}

export default Header 