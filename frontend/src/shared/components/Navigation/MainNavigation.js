import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './MainNavigation.css';
import MainHeader from './MainHeader'
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop';


const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawerHandler = () => { //side bar opens when clicked
        setDrawerIsOpen(true)
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }

    return (
        <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>} {/*when back drop is clicked side bar closes*/}

        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}> 
            <nav className="main-navigation__drawer-nav">
                <NavLinks/>
            </nav>
        </SideDrawer>
        

    <MainHeader>
        <button className="main-navigation__menu-btn " onClick={openDrawerHandler}> {/*opens side bar when clicked*/}
            <span />
            <span /> {/*these spans create the burger button with css*/}
            <span />
        </button>
        <h1 className="main-navigation__title">
            <Link to="/">Pholo</Link>
        </h1>
        <nav className="main-navigation__header-nav">
            <NavLinks />
        </nav>
    </MainHeader>
    </React.Fragment>
    );

};

export default MainNavigation;