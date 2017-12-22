import React from 'react';

const validation = (props) => {

    let validationCheck = null;

    if(props.textLength <= 5){
        validationCheck = (
            <div>
                <p>Text too Short</p>
            </div>    
        )
    }else{
        validationCheck = (
            <div>
                <p>Text long enough</p>
            </div>    
        )
    }

    return(
        <div>
            <p>Text length : {props.textLength}</p>
            {validationCheck}           
        </div>    
    );
};

export default validation;