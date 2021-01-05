import React,{useEffect} from 'react';
import '../Styles/Navigation.css';
import ThemeSwitch from './ThemeSwitch';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";

const Navigation = (props) =>{

    let history = useHistory();
    let menu = history.location.pathname === '/' || history.location.pathname === '/portfolio' ? 'Blog' : 'Profile'

    const style = `nav-menu ${props.mode}`;

    let NavMenu;
    switch (props.menu) {
        case "portfolio": NavMenu =<NavLink to={'/blog'} onClick={()=>props.NavigateMenu('blog')} style={{}}>{menu}</NavLink>; break;
        case "blog": NavMenu =  <NavLink to={'/portfolio'} onClick={()=>props.NavigateMenu('portfolio')} style={{}}>{menu}</NavLink>; break;
        default : return;
    }

    return (
        <div className="navigation">

            <div className="mode-switch pt-2">
                <ThemeSwitch/>
            </div>

            <div className={style}>
                <h3>Alvis Johnsen</h3>
                <div className="text-right menu">
                    {NavMenu}
                </div>
            </div>

        </div>
    )
}

const MapState = state =>{
    return {
        menu : state.Page.menu
    }
}

const MapDispatch = dispatch =>{
    return {
        NavigateMenu : (menu) => dispatch({type:"MENU_NAVIGATE", menu})
    }
}

export default connect(MapState,MapDispatch)(Navigation)
