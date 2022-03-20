import React from 'react';
import Dial from '../Dial/Dial';
const Display = (props) => {
    return (
        <div style={{border:'2px solid green', margin:'5px'}}>
            <h1>Name: {props.name}</h1>
            <p>So far steps today: {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;