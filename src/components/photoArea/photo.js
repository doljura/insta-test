import React, { Component } from 'react';

export const Photo = (props) => {
    return (
        <div className="photo">
            <img src={props.value} alt="photo"/>
        </div>
    )
}