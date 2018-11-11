import React, { Component } from 'react';

export const Round = (props) => {
    return (
        <div className={`round ${props.className || ''}`}>
            {props.children}
        </div>
    )
}