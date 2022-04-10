import React from 'react';

const Actor = (props) => {
    const {name, img} =props

    return (
        <div>
            <div>
                <h1>{name}</h1>
                <img src={img} alt={name }/>
            </div>
        </div>
    );
};

export default Actor;