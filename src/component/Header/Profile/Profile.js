import React from 'react';
// import css module file 
import styles from "./profile.module.css"
// import Navigation component 
import Navigation from '../../Navigation/Navigation';
// import image from assest 
import ProfileImage from '../../../assets/image/pngwing.com (3).png';

const Profile = () => {
    return (
        // in the right header section for sing in or sing up
        <div className={styles.profile}>
            <Navigation className={""} url="/singUp" icon="" text="">
                <div className={styles.profileText}>
                    <span>Sing</span>
                </div>
            </Navigation>
            {/* picture area  */}
            <div className={styles.profilePcs}>
                <img src={ProfileImage} alt={"profile pict"} />
            </div>
        </div>
    )
}

export default Profile
