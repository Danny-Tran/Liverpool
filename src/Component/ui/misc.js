import React from 'react';
import { Link } from 'react-router-dom';
// import { firebaseDB } from '../../firebase';


// tag component that created for matches 
export const Tag = (props) => {
    
    const template = <div
        style = {{
            background: props.bck,
            fontSize: props.size,
            color: props.color,
            padding: props.padding,
            display: props.display,
            fontFamily: props.font
        }}
    >
        {props.children}
    </div>

    if (props.link) {
        return (<Link to= {props.linkto}>
            {template}
        </Link>
        )
    } else {
        return template
    }
}

// function looping through firebase and store the data passing it to blocks
export const firebaseLooper = (snapshot) => {
    let data = [];

    snapshot.forEach((snap)=>{
        data.push({
            ...snap.val(),
            id: snap.key
        })
    });
    return data
}

//function that reverse array from firebase
export const newArray = (firebaseArray) => {
    let arr = [];

    for(let i = firebaseArray.length-1; i>=0; i--){
        arr.push(firebaseArray[i])
    }

    return arr; 
}