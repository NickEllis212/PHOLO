import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../Navigation/TabNavigator/BottomNavigation.css';
import BottomHeader from './BottomHeader'

import { FaUserFriends } from "react-icons/fa";


const MainNavigation = props => {
  

    return (
       
    <React.Fragment>
    <BottomHeader>
       
        <div className="main-navigation__title">
            <Link to="/"><FaUserFriends/></Link>
        </div>
        <nav className="main-navigation__header-nav">
            <div>
             
            </div>
        </nav>
            
    </BottomHeader>
    </React.Fragment>
    );

};

export default MainNavigation;