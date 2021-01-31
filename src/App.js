import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Blog from "./components/Blog";
import Post from "./components/posts/Post";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";

const App = (props) =>{

    useEffect(()=>{
        localStorage.setItem('theme', 'dark')
    },[])

    const theme = props.Page.darkMode ? 'dark' : 'light';
    const classes = `App ${theme}`;
    if (theme === 'dark'){
        document.body.style.backgroundColor = "black";
    } else document.body.style.backgroundColor = `rgb(226, 226, 226)`;

  return (
      <div className={classes}>
          <Navigation mode={theme}/>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <h2>Site Under Maintenance ...</h2>
            </div>
           {/*<Switch>
                <Route path={'/blog/:id'} component={Post}/>
                <Route path={'/blog'} component={Blog}/>
                <Route path={'/'} component={Portfolio}/>
            </Switch>*/} 
      </div>
  );
}

const MapState = state =>{
    return {
        Page : state.Page,
    }
}

export default connect(MapState, null)(App);
