import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid red',
        textAlign: 'center'
    };

    return <input type="text" 
                  style={inputStyle}
                  placeholder=" Enter Name"
                  onChange={props.changed}
                  //value={props.currentName}
                  />;
};

export default UserInput;