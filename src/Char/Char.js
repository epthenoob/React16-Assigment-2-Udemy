import React from 'react';

const char = (props) => {
    return(
        <div onClick = {props.whenClick} style = {props.cssStyle}>
            {props.character}
        </div>
    );
}

export default char;