import React from 'react';
import PlayList from '../../playlist/components/playlist.js';
import './category.css';



function Category(props){
    return(

        <div className="Category">
            <p className="Category-title">{props.title}</p>
            <p className="Category-description">{props.description}</p>
            <PlayList 
                playlist = {props.playlist}
                handleOpenModal ={props.handleOpenModal}
            />
            
        </div>
    )
}

export default Category;