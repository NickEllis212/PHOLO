import React from 'react';
import '../../Navigation/TabNavigator/BottomHeader.css';

const BottomHeader = props => {
    return <header className="bottom-header">
        {props.children} 
    </header>

}

export default BottomHeader;