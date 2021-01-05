import React from 'react';
import '../Styles/BrowseMode.css'
import {connect} from 'react-redux'

const BrowseMode = (props) =>{

    return (
        <label className="switch">
            <input type="checkbox" checked={props.Page.darkMode} onChange={e=>{props.ModeSwitch(e)}}/>
            <span className="slider round"/>
        </label>
    )
}

const MapState = state =>{
    return {
        Page : state.Page
    }
}

const MapDispatch = dispatch => {
    return {
        ModeSwitch: (e) => {
            let theme = e.target.checked ? 'dark' : 'light'
            localStorage.setItem('theme', theme)
            dispatch({type: "MODE", mode: e.target.checked})
        }
    }
}

export default connect(MapState,MapDispatch)(BrowseMode);
