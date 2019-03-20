import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home.js'
//import Playlist from './src/playlist/components/playlist.js';
import data from '../api.json';


//ReactDOM.render(que , donde);
//referenciar con una constante id del dom no se repite en html
const homeContainer = document.getElementById('home-container');
ReactDOM.render(<Home data = {data}/>,homeContainer);
