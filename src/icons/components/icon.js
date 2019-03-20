import React from 'react';


function Icon(props){
    const  {
        size,
        color,
    } = props;
    return(
        <svg
            width={size}
            height={size}
            fill={color}
            viewBox="0 0 32 32"
        >
            {props.children}
        </svg>
    )
}
export default Icon;